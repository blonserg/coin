<template>
  <div>
    <div class="ttl">
      {{ staticData.strategy_title }}
    </div>
    <v-dialog v-model="alert.active">
      <Alert
        :text="alert.text"
        @close="() => { alert.active = false; }"
      />
    </v-dialog>
    <div class="subttl">
      {{ staticData.strategy_paragraph }}
    </div>
    <div class="article-wrap">
      <div class="article">
        <VueSlickCarousel v-if="strategies" v-bind="settings">
          <v-card
            v-for="strategiesItem in strategies"
            :key="strategiesItem.id"
            transition="fade-transition"
            class="article-item"
            :class="strategiesItem.code"
          >
            <div class="article-ttl">
              {{ strategiesItem.code }}
            </div>
            <p class="article-txt">
              {{ strategiesItem.title }}
            </p>
            <div class="article-count">
              {{ strategiesItem.price }}
            </div>
            <p class="article-txt">
              {{ strategiesItem.content }}
            </p>
            <div class="article-info">
              <div class="article-info_item d-flex justify-space-between">
                <span class="article-info_lt">
                  {{ staticData.diversification }}
                </span>
                <span class="article-info_rt">
                  {{ strategiesItem.diversification }}
                </span>
              </div>
              <div class="article-info_item d-flex justify-space-between">
                <span class="article-info_lt">
                  {{ staticData.profit_a_year }}
                </span>
                <span class="article-info_rt">
                  {{ strategiesItem.profit }}
                </span>
              </div>
              <div class="article-info_item d-flex justify-space-between">
                <span class="article-info_lt">
                  {{ staticData.risk }}
                </span>
                <span class="article-info_rt">
                  {{ strategiesItem.risk }}
                </span>
              </div>
            </div>
            <div v-if="strategiesItem.link" class="article-btn">
              <a class="btn" :href="strategiesItem.link">{{ staticData.strategy_button }}</a>
            </div>
          </v-card>
        </VueSlickCarousel>
      </div>
    </div>
    <div class="ttl">
      {{ staticDataProject.project_list_title }}
    </div>
    <div class="subttl">
      {{ staticDataProject.project_list_paragraph }}
    </div>
    <div class="article-invest">
      <v-row>
        <v-col v-for="(item, i) in projects" :key="i" md="4">
          <v-card transition="fade-transition" class="article-item_invest">
            <div class="article-head d-flex align-center">
              <div class="article-head_img">
                <img :src="item.preview" alt="">
              </div>
              <div class="article-head_rt">
                <div class="article-name mb-2">
                  {{ item.title }}
                </div>
                <div class="article-link" @click="getClickedProject(item)">
                  {{ staticDataProject.project_see_project }}
                </div>
              </div>
            </div>
            <p class="article-txt">
              {{ item.preview_text }}
            </p>
            <div class="article-info">
              <div class="article-info_item d-flex justify-space-between">
                <span class="article-info_lt">
                  {{ staticDataProject.project_investments_from }}
                </span>
                <span class="article-info_rt">
                  {{ item.investments }}
                </span>
              </div>
              <div class="article-info_item d-flex justify-space-between">
                <span class="article-info_lt">
                  {{ staticData.profit_a_year }}
                </span>
                <span class="article-info_rt">
                  {{ item.profit }}
                </span>
              </div>
              <div class="article-info_item d-flex justify-space-between">
                <span class="article-info_lt">
                  {{ staticDataProject.project_deadlines }}
                </span>
                <span class="article-info_rt">
                  {{ item.deadlines }}
                </span>
              </div>
              <div class="article-info_item d-flex justify-space-between">
                <span class="article-info_lt">
                  {{ staticData.risk }}
                </span>
                <span class="article-info_rt">
                  {{ item.risk }}
                </span>
              </div>
            </div>
            <div class="article-bottom d-flex align-center justify-space-between">
              <div class="article-bottom_info">
                <span>{{ staticDataProject.project_participants }}</span>
                <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 9.97586C0 8.45862 1.96296 6.37241 5 6.37241C8.03704 6.37241 10 8.45862 10 9.97586C10 10.6207 9.62963 11 8.51852 11H1.48148C0.37037 11 0 10.6207 0 9.97586ZM2.59259 2.65517C2.59259 1.21379 3.66667 0 5 0C6.33333 0 7.40741 1.21379 7.40741 2.65517C7.40741 4.17241 6.33333 5.34828 5 5.34828C3.66667 5.34828 2.59259 4.17241 2.59259 2.65517Z" fill="#808190" />
                </svg>
                <span>{{ item.active }}</span>
              </div>
              <div v-if="item.top === 1" class="article-bottom_top">
                Топ проект
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <LockUser />
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import StaticService from "~/services/StaticService";
import HttpService from "~/services/HttpService";
import Alert from "~~/components/common/Alert";
import LockUser from "~~/components/common/LockUser";

export default {
  components: {
    VueSlickCarousel,
    Alert,
    LockUser
  },
  data () {
    return {
      staticData: [],
      staticDataProject: [],
      strategies: null,
      projects: null,
      settings: {
        "slidesToShow": 4,
        "slidesToScroll": 4,
        "arrows": false,
        "responsive": [
          {
            "breakpoint": 6000,
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
      alert: {
        text: "",
        active: false
      }
    }
  },
  async fetch () {
    this.staticData = await StaticService.get("/strategy");
    this.staticDataProject = await StaticService.get("/project");

    let response = await HttpService.get("/strategy");
    if (response.status === 200) {
      this.strategies = response.data;
    } else {
      // TODO do we need to inform user?
    }

    response = await HttpService.get("/projects");
    if (response.status === 200) {
      this.projects = response.data;
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
  },
  methods: {
    async getClickedProject (item) {
      const slug = item.slug;
      const apiPath = "/project/" + slug;
      const response = await HttpService.get(apiPath);
      if (response.status === 200) {
        const path = "portfel/" + slug;
        this.$router.push(path);
      } else {
        let errorText;
        if (Array.isArray(response.errors)) {
          errorText = response.errors.join("; ")
        } else {
          errorText = "An error occurred"
        }
        this.alert = {
          text: errorText,
          active: true
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-application p {
  margin-bottom: 0;
}
</style>
