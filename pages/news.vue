<template>
  <div class="news-page">
    <Title
      :title="staticData.news_title"
      :sort="staticData.news_sort"
      :filtr="staticData.news_category_filter"
      :get-sorted-news="getSortedNews"
      :categories="categories"
      :get-categorized-news="getCategorizedNews"
    />
    <v-row>
      <v-col v-for="item in news" :key="item.title" md="4">
        <News
          :title="item.title"
          :views="item.views"
          :date="item.date"
          :slug="item.slug"
        />
      </v-col>
    </v-row>
    <v-btn class="btn btn-seetoo" block>
      {{ staticData.news_show_more }}
    </v-btn>
  </div>
</template>

<script>
import Title from "~~/components/common/Title";
import News from "~~/components/common/News";
import StaticService from "~/services/StaticService";
import HttpService from "~/services/HttpService";

export default {
  components: {
    Title,
    News
  },
  data () {
    return {
      news: [
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг",
          slug: "test"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг",
          slug: "test"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг",
          slug: "test"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг",
          slug: "test"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг",
          slug: "test"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг",
          slug: "test"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг",
          slug: "test"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг",
          slug: "test"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг",
          slug: "test"
        }
      ],
      staticData: [],
      apiNews: null,
      latestNews: null,
      oldestNews: null,
      categories: ["category1", "category2", "category3"], // TODO get data from apiNews
      categorizedNews: null
    };
  },
  async fetch () {
    this.staticData = await StaticService.get("/news");

    const response = await HttpService.get("/news");
    if (response.status === 200) {
      this.apiNews = response.data.articles;
    } else {
      // TODO
    }
  },
  fetchOnServer: false,
  methods: {
    async getSortedNews (selectedSortItem) {
      let response;
      if (selectedSortItem === "Latest") {
        response = await HttpService.get("/news?sort=latest");
        if (response.status === 200) {
          this.latestNews = response.data;
        } else {
        // TODO
        }
      } else if (selectedSortItem === "Oldest") {
        response = await HttpService.get("/news?sort=oldest");
        if (response.status === 200) {
          this.oldestNews = response.data;
        } else {
        // TODO
        }
      } else {
        // TODO
      }
    },
    async getCategorizedNews (selectedCategories) {
      const response = await HttpService.get("/news?sort=oldest", selectedCategories);
      if (response.status === 200) {
        this.categorizedNews = response.data;
      } else {
        // TODO
      }
    }
  }
};
</script>
