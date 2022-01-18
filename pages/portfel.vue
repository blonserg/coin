<template>
  <div class="article-invest">
    <v-dialog v-model="alert.active">
      <Alert
        :text="alert.text"
        @close="() => { alert.active = false; }"
      />
    </v-dialog>
    <NuxtLink class="link d-block mb-6" to="/invests">
      <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.2 5.0248C0.05 4.8748 0 4.7248 0 4.5248C0 4.3248 0.05 4.1748 0.2 4.0248L3.9 0.374805C4.05 0.224805 4.2 0.174805 4.35 0.174805C4.75 0.174805 5 0.474805 5 0.824805C5 0.974805 4.95 1.1748 4.8 1.2748L1.55 4.5248L4.8 7.7248C4.95 7.8748 5 8.0248 5 8.1748C5 8.52481 4.7 8.8248 4.35 8.8248C4.15 8.8248 4 8.7748 3.9 8.6248L0.2 5.0248Z" fill="#2D7BF6" />
      </svg>
      {{ staticData.project_list_title }}
    </NuxtLink>
    <div class="article-invest_img mb-12">
      <img :src="portfelItemImage" alt="">
    </div>
    <div class="article-head d-flex align-center mb-16">
      <div class="article-head_img">
        <img :src="portfelItemPreview" alt="">
      </div>
      <div style="width: 100%;">
        <div>
          <div class="article-name article-name--invest mb-2">
            {{ portfelItemTitle }}
          </div>
        </div>
        <Button :text="staticData.project_reg_button" @click.native="registerButtonClick" />
      </div>
    </div>
    <div>
      <div class="article-invest_ttl">
        {{ staticData.project_information }}
      </div>
      <v-divider class="mb-12" />
      <v-row>
        <v-col md="8">
          <div class="article-invest_txt">
            {{ portfelItemContent }}
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="6">
          <div class="article-invest_video">
            <youtube :video-id="portfelItemVideo"></youtube>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="4">
          <div class="article-invest_ttl">
            {{ staticData.project_traded_instruments }}
          </div>
          <div class="article-invest_txt">
            {{ portfelItemTraded }}
          </div>
          <div class="article-invest_ttl">
            {{ staticData.project_investments_from }}
          </div>
          <div class="article-invest_txt">
            {{ portfelItemInvest }}
          </div>
          <div class="article-invest_ttl">
            {{ staticData.project_profit_a_year }}
          </div>
          <div class="article-invest_txt">
            {{ portfelItemProfit }}
          </div>
          <div class="article-invest_ttl">
            {{ staticData.project_deadlines }}
          </div>
          <div class="article-invest_txt">
            {{ portfelItemDeadlines }}
          </div>
          <div class="article-invest_ttl">
            {{ staticData.project_start }}
          </div>
          <div class="article-invest_txt">
            {{ portfelItemStart }}
          </div>
        </v-col>
        <v-col md="4">
          <div class="article-invest_ttl">
            {{ staticData.project_about_project }}
          </div>
          <div class="article-invest_txt">
            {{ portfelItemAbout }}
          </div>
          <div class="article-invest_ttl">
            {{ staticData.project_benefits }}
          </div>
          <div class="article-invest_txt">
            <ul>
              <li v-for="item in portfelItemBenefitsList" :key="item.name">
                {{ item.name }}
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { Youtube } from "vue-youtube";
import Button from "~~/components/common/Button";
import StaticService from "~/services/StaticService";
import HttpService from "~/services/HttpService";
import Alert from "~~/components/common/Alert";

export default {
  components: {
    Button,
    Youtube,
    Alert
  },
  data () {
    return {
      staticData: [],
      portfelItem: null,
      portfelItemTitle: null,
      portfelItemContent: null,
      portfelItemImage: null,
      portfelItemPreview: null,
      portfelItemTraded: null,
      portfelItemInvest: null,
      portfelItemProfit: null,
      portfelItemRisk: null,
      portfelItemDeadlines: null,
      portfelItemStart: null,
      portfelItemAbout: null,
      portfelItemBenefits: null,
      portfelItemVideo: null,
      portfelItemBenefitsList: null,
      alert: {
        text: "",
        active: false
      }
    };
  },
  async fetch () {
    const slug = this.$route.params.slug || null;
    if (slug) {
      const apiPath = "/project/" + slug;
      const response = await HttpService.get(apiPath);
      if (response.status === 200) {
        this.portfelItem = response.data
        this.portfelItemTitle = response.data.title
        this.portfelItemContent = response.data.content
        this.portfelItemImage = response.data.image
        this.portfelItemTraded = response.data.traded_instruments
        this.portfelItemInvest = response.data.investments
        this.portfelItemProfit = response.data.profit
        this.portfelItemRisk = response.data.risk
        this.portfelItemDeadlines = response.data.deadlines
        this.portfelItemStart = response.data.start
        this.portfelItemAbout = response.data.about_project
        this.portfelItemBenefits = response.data.benefits
        this.portfelItemVideo = response.data.video_link
        this.portfelItemPreview = response.data.preview
      } else {
      // TODO do we need to inform user
      }
      this.portfelItemBenefitsList = JSON.parse(this.portfelItemBenefits)
    }

    this.staticData = await StaticService.get("/project")
  },
  fetchOnServer: false,
  mounted () {
    const token = window.localStorage.getItem("userToken");
    if (!token) {
      this.$router.push("login");
    }
  },
  methods: {
    async registerButtonClick () {
      const slug = this.$route.params.slug || null;
      if (slug) {
        const response = await HttpService.post("/register/" + slug);
        if (response.status === 200) {
          const link = response.data.link;
          if (link) {
            window.location.href = link;
          } else {
            const message = response.data.message;
            this.alert = {
              text: message,
              active: true
            };
          }
        }
      }
    }
  }
};
</script>
