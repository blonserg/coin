<template>
  <div class="news-page">
    <div v-if="$fetchState.pending">Loading...</div>
    <div v-else>
      <Title
        :title="staticData.news_title"
        :sort="staticData.news_sort"
        :filtr="staticData.news_category_filter"
        :sort-items="sortItems"
        :categories="categories"
        :on-select-sort-type="onSortTypeChange"
        :on-select-categories="onCategoriesChange"
      />
      <VueSlickCarousel v-bind="settings">
        <v-col v-for="item in apiNews" :key="item.id" md="4">
          <News
            :title="item.title"
            :date="item.date"
            :slug="item.slug"
            :category="item.categories | nameCategories"
            :image="item.preview"
          />
        </v-col>
      </VueSlickCarousel>
      <v-btn
        v-if="showMoreNewsButton"
        class="btn btn-seetoo"
        block
        @click="showMoreNews()"
      >
        {{ staticData.news_show_more }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import Title from "~~/components/common/Title";
import News from "~~/components/common/News";
import StaticService from "~/services/StaticService";
import HttpService from "~/services/HttpService";

export default {
  components: {
    VueSlickCarousel,
    Title,
    News
  },
  filters: {
    nameCategories (value) {
      return value[0].name;
    }
  },
  data () {
    return {
      staticData: [],
      apiNews: [],
      categories: [],
      selectedSortType: null,
      selectedCategories: null,
      newsPage: 1,
      showMoreNewsButton: true,
      settings: {
        "slidesToShow": 4,
        "slidesToScroll": 4,
        "arrows": false,
        "responsive": [
          {
            "breakpoint": 1920,
            "settings": "unslick"
          },
          {
            "breakpoint": 768,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          }
        ]
      },
      sortItems: [
        {
          text: "Latest",
          value: "latest"
        },
        {
          text: "Oldest",
          value: "oldest"
        }
      ]
    };
  },
  async fetch () {
    this.staticData = await StaticService.get("/news");
    await this.getNews(true);
  },
  fetchOnServer: false,
  mounted () {
    const token = window.localStorage.getItem("userToken");
    if (!token) {
      this.$router.push("login");
    }
  },
  methods: {
    onSortTypeChange (sortType) {
      this.selectedSortType = sortType;
      this.getNews();
    },
    onCategoriesChange (categories) {
      this.selectedCategories = categories;
      this.getNews();
    },
    async getNews (doGetCategories) {
      const params = {};
      params.page = this.newsPage;
      if (this.selectedSortType !== null) {
        params.sort = this.selectedSortType;
      }
      if (this.selectedCategories !== null) {
        this.selectedCategories.forEach((categoryName, categoryIndex) => {
          params["category[" + categoryIndex + "]"] = categoryName;
        });
      }
      const response = await HttpService.get("/news", params);
      if (response.status === 200) {
        if (!response.data.articles || response.data.articles.length === 0) {
          this.showMoreNewsButton = false;
        } else {
          this.apiNews = this.apiNews.concat(response.data.articles);
        }
        if (doGetCategories &&
            response.data.filter &&
            response.data.filter.categories &&
            response.data.filter.categories.length !== 0) {
          this.categories = response.data.filter.categories.map((categoryItem) => {
            return {
              text: categoryItem.name,
              value: categoryItem.slug
            };
          });
        }
      } else {
        // TODO do we need to inform user?
      }
    },
    showMoreNews () {
      this.newsPage = this.newsPage + 1;
      this.getNews();
    }
  }
};
</script>
<style lang="scss" scoped>
.news-page {
  .regular.slider {
    display: flex;
  }
}
</style>
