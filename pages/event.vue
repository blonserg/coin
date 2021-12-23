<template>
  <div class="article-main">
    <NuxtLink class="link d-block mb-12" to="/main">
      <svg
        width="5"
        height="9"
        viewBox="0 0 5 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.2 5.0248C0.05 4.8748 0 4.7248 0 4.5248C0 4.3248 0.05 4.1748 0.2 4.0248L3.9 0.374805C4.05 0.224805 4.2 0.174805 4.35 0.174805C4.75 0.174805 5 0.474805 5 0.824805C5 0.974805 4.95 1.1748 4.8 1.2748L1.55 4.5248L4.8 7.7248C4.95 7.8748 5 8.0248 5 8.1748C5 8.52481 4.7 8.8248 4.35 8.8248C4.15 8.8248 4 8.7748 3.9 8.6248L0.2 5.0248Z"
          fill="#2D7BF6"
        />
      </svg>
      Главная
    </NuxtLink>
    <v-row>
      <v-col md="11">
        <div class="article-invest_img">
          <img :src="eventImage" alt="" />
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="12">
        <h1 class="article-main_ttl">
          {{ eventTitle }}
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="3" class="align-center">
        <div>
          <span class="article-event_txt">Когда:</span>
          <span class="article-event_date">{{ $moment(eventDate).format("D MMMM, YYYY") }}</span>
        </div>
        <div>
          <span class="article-event_txt">Спикер:</span>
          <span class="article-event_name">{{ eventAuthor }}</span>
        </div>
      </v-col>
      <v-col md="3">
        <v-btn
          class="btn"
          color="#2d7bf6"
          x-large
          height="48px"
        >
          Записаться на вебинар
        </v-btn>
      </v-col>
    </v-row>
    <div class="mt-16">
      <v-row>
        <v-col md="10">
          <p>
            {{ eventContent }}
          </p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import HttpService from "~/services/HttpService";

export default {
  data () {
    return {
      event: null,
      eventTitle: null,
      eventContent: null,
      eventDate: null,
      eventAuthor: null,
      eventImage: null
    };
  },
  async fetch () {
    const slug = this.$route.params.slug || null;
    if (slug) {
      const apiPath = "/events/" + slug;
      const response = await HttpService.get(apiPath);
      if (response.status === 200) {
        this.event = response.data;
        this.eventTitle = response.data.title;
        this.eventContent = response.data.content;
        this.eventDate = response.data.date;
        this.eventAuthor = response.data.author;
        this.eventImage = response.data.image;
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

  .article-event {
    &_txt {
      font-size: 14px;
      line-height: 18px;
      color: #6a6b79;
    }

    &_date {
      font-size: 14px;
      line-height: 18px;
      color: #2d7bf6;
    }

    &_name {
      font-size: 13px;
      line-height: 17px;
      color: #808190;
    }
  }
}
</style>
