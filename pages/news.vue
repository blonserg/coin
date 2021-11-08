<template>
  <div class="news-page">
    <Title :title="`Новости`" />
    <v-row>
      <v-col v-for="item in news" :key="item.title" md="4">
        <News :title="item.title" :views="item.views" :date="item.date" />
      </v-col>
    </v-row>
    <v-btn class="btn btn-seetoo" block>
      Смотреть еще
    </v-btn>
  </div>
</template>

<script>
import Title from "~~/components/common/Title";
import News from "~~/components/common/News";

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
      ]
    };
  }
};
</script>
