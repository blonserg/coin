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
      <v-row>
        <v-col v-for="item in news" :key="item.slug" md="4">
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
          slug: "test1"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг",
          slug: "test2"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг",
          slug: "test3"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг",
          slug: "test4"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг",
          slug: "test5"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг",
          slug: "test6"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг",
          slug: "test7"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг",
          slug: "test8"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг",
          slug: "test9"
        }
      ],
      staticData: [],
      apiNews: null,
      categories: ["category1", "category2", "category3"], // TODO get data from apiNews
      selectedSortType: null,
      selectedCategories: null,
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
    await this.getNews();
  },
  fetchOnServer: false,
  methods: {
    onSortTypeChange (sortType) {
      this.selectedSortType = sortType;
      this.getNews();
    },
    onCategoriesChange (categories) {
      this.selectedCategories = categories;
      this.getNews();
    },
    async getNews () {
      const params = {};
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
        this.apiNews = response.data;
      } else {
        // TODO do we need to inform user?
      }
    }
  }
};
</script>
