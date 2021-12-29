<template>
  <div>
    <div class="ttl">
      {{ staticData.burse_title }}
    </div>
    <div class="article-stock">
      <section class="article-grid">
        <article v-for="item in services" :key="item.id" class="article-grid_item">
          <v-card class="article-item_invest">
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
              {{ item.short_description }}
            </p>
            <v-expansion-panels class="article-pannel">
              <v-expansion-panel>
                <v-expansion-panel-content>
                  <p class="article-txt">
                    {{ item.content }}
                  </p>
                </v-expansion-panel-content>
                <div class="article-bottom d-flex justify-space-between align-center">
                  <div class="article-bottom_info">
                    <span>{{ staticData.burse_used }}</span>
                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 9.97586C0 8.45862 1.96296 6.37241 5 6.37241C8.03704 6.37241 10 8.45862 10 9.97586C10 10.6207 9.62963 11 8.51852 11H1.48148C0.37037 11 0 10.6207 0 9.97586ZM2.59259 2.65517C2.59259 1.21379 3.66667 0 5 0C6.33333 0 7.40741 1.21379 7.40741 2.65517C7.40741 4.17241 6.33333 5.34828 5 5.34828C3.66667 5.34828 2.59259 4.17241 2.59259 2.65517Z" fill="#808190" />
                    </svg>
                    <span>{{ item.used }}</span>
                  </div>
                  <v-expansion-panel-header expand-icon="">
                    <span class="article-link _more">
                      {{ staticData.read_more }}
                    </span>
                    <a :href="item.link" class="article-link _used">
                      Воспользоваться услугой
                    </a>
                  </v-expansion-panel-header>
                </div>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </article>
      </section>
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
      services: null,
      servicesRequest: null,
      isActive: false,
      servicesRequestParams: {
        "link": "https://rozetka.com.ua/"
      }
    };
  },
  async fetch () {
    this.staticData = await StaticService.get("/burse");

    const response = await HttpService.get("/services");
    if (response.status === 200) {
      this.services = response.data;
    } else {
      // TODO do we need to inform user?
    }

    const resp = await HttpService.get("/services-request", this.servicesRequestParams);
    if (resp.status === 200) {
      this.servicesRequest = resp.data;
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
