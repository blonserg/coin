<template>
  <div class="article-main">
    <NuxtLink class="link d-block mb-12" to="/news">
      <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.2 5.0248C0.05 4.8748 0 4.7248 0 4.5248C0 4.3248 0.05 4.1748 0.2 4.0248L3.9 0.374805C4.05 0.224805 4.2 0.174805 4.35 0.174805C4.75 0.174805 5 0.474805 5 0.824805C5 0.974805 4.95 1.1748 4.8 1.2748L1.55 4.5248L4.8 7.7248C4.95 7.8748 5 8.0248 5 8.1748C5 8.52481 4.7 8.8248 4.35 8.8248C4.15 8.8248 4 8.7748 3.9 8.6248L0.2 5.0248Z" fill="#2D7BF6" />
      </svg>
      Новости
    </NuxtLink>
    <div class="article-main_date mb-8">
      {{ $moment(articleDate).format("DD MMM YYYY") }}
    </div>
    <v-row>
      <v-col md="8">
        <h1 class="article-main_ttl">
          {{ articleTitle }}
        </h1>
      </v-col>
    </v-row>
    <div v-for="item in articleCategories" :key="item.id" class="d-flex align-center mb-5">
      <div class="news-label c-purple">
        {{ item.name }}
      </div>
    </div>
    <v-row>
      <v-col md="10">
        <div class="article-invest_img">
          <img :src="articleImage" alt="">
        </div>
      </v-col>
    </v-row>
    <div>
      <v-row>
        <v-col md="10" v-html="articleContent" />
      </v-row>
    </div>
  </div>
</template>

<script>
import HttpService from "~/services/HttpService";

export default {
  components: {

  },
  data () {
    return {
      article: null,
      articleTitle: null,
      articleContent: null,
      articleDate: null,
      articleImage: null,
      articleCategories: null
    };
  },
  async fetch () {
    const slug = this.$route.params.slug || null;
    if (slug) {
      const apiPath = "/news/" + slug;
      const response = await HttpService.get(apiPath);
      if (response.status === 200) {
        this.article = response.data;
        this.articleTitle = response.data.title;
        this.articleContent = response.data.content;
        this.articleDate = response.data.date;
        this.articleImage = response.data.image;
        this.articleCategories = response.data.categories;
      } else {
      // TODO do we need to inform user?
      }
    }
  },
  fetchOnServer: false,
  mounted () {
    const token = window.localStorage.getItem("userToken");
    if (!token) {
      this.$router.push("login");
    }
  }
};
</script>

<style lang="scss" scoped>
  .news {
    &-label {
      background: #1b1d23;
      border-radius: 4px;
      padding: 4px 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      line-height: 17px;
      margin-right: 5px;

      &.c-green {
        color: #61ccbf;
      }

      &.c-purple {
        color: #8d68f5;
      }

      &.c-orange {
        color: #f7aa50;
      }
    }
  }

  .article-main {
    p {
      font-size: 19px;
      line-height: 28px;
      color: #abacb8;
      margin-bottom: 20px;
      max-width: 720px;
    }

    h2 {
      font-weight: 600;
      font-size: 26px;
      line-height: 34px;
      color: #eef1f8;
      margin: 48px 0 20px;
      max-width: 720px;
    }

    img {
      border-radius: 16px;
      margin-bottom: 70px;
      max-width: 100%;
    }

    ol,
    ul {
      max-width: 720px;
      margin-bottom: 20px;

      li {
        font-size: 19px;
        line-height: 28px;
        color: #abacb8;
      }
    }

    img + h2 {
      margin-top: 0;
    }

    .article-invest_img {
      img {
        margin-bottom: 20px;
      }
    }
  }
</style>
