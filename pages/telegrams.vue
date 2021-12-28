<template>
  <div>
    <div class="ttl">
      {{ staticData.telegram_title }}
    </div>
    <div class="article-telegram">
      <v-row>
        <v-col v-for="item in userChats" :key="item.id" md="5">
          <div class="article-item_tel">
            <div class="article-head d-flex align-center">
              <div class="article-head_img">
                <img :src="item.image" alt="">
              </div>
              <div class="article-head_rt">
                <div class="article-name">
                  {{ item.title }}
                </div>
              </div>
            </div>
            <p class="article-txt">
              {{ item.content }}
            </p>
            <div class="article-bottom d-flex justify-space-between align-center">
              <a class="article-link" :href="item.link">
                Перейти в чат
              </a>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import StaticService from "~/services/StaticService";
import HttpService from "~/services/HttpService";

export default {
  data () {
    return {
      staticData: [],
      userChats: null
    };
  },
  async fetch () {
    this.staticData = await StaticService.get("/telegram")

    const response = await HttpService.get("/user-chats");
    if (response.status === 200) {
      this.userChats = response.data;
    } else {
      // TODO do we need to inform user?
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
