<template>
  <div class="news-page">
    <Title :title="staticData.news_title" :sort="staticData.news_sort" :filtr="staticData.news_category_filter" />
    <v-row>
      <v-col v-for="item in news" :key="item.title" md="4">
        <News :title="item.title" :views="item.views" :date="item.date" />
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
import StaticService from "~/api/StaticService";

export default {
  components: {
    Title,
    News
  },
  async asyncData () {
    const staticData = await StaticService.get("/news")
    return { staticData }
  },
  data () {
    return {
      news: [
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг"
        },
        {
          title: "Cложность майнинга биткоина снова выросла",
          views: "830",
          date: "14 авг"
        }
      ],
      staticData: []
    };
  }
};
</script>
