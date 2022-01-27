<template>
  <div class="landing">
    <div v-if="$fetchState.pending">
      <div class="loader d-flex justify-center align-center">
        <Loader />
      </div>
    </div>
    <div v-else>
      <v-row class="landing-block first-block align-center">
        <v-col cols="12" md="7" data-aos="zoom-in" data-aos-duration="1500">
          <div class="landing-ttl">
            <LandTtl />
          </div>
          <div class="landing-txt mb-10">
            {{ staticData.want_max }}
          </div>
          <div class="d-flex align-center flex-column flex-md-row">
            <v-btn
              class="btn--more"
              x-large
              plain
              height="48px"
            >
              {{ staticData.learn_more }}
              <ArrowRight class="ml-2" />
            </v-btn>
            <v-btn
              class="btn ml-md-6 mt-4 mt-md-0"
              color="#2d7bf6"
              x-large
              height="48px"
              to="register"
            >
              {{ staticData.start_now }}
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="5" data-aos="zoom-in" data-aos-duration="1500">
          <img class="landing-main_image" src="/man-rocket.png" alt="" />
        </v-col>
      </v-row>
      <div class="landing-subtxt">{{ staticData.about_team }}</div>
      <div
        class="landing-block"
        data-aos="fade-up"
      >
        <v-row>
          <v-col cols="12" md="4" class="landing-ttl">
            {{ staticData.about_team_left_text }}
          </v-col>
          <v-col cols="12" md="8" class="landing-txt">
            {{ staticData.about_team_right_text }}
          </v-col>
        </v-row>
      </div>
      <div
        id="system"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div class="landing-block_system text-center">
          <div class="landing-subtxt">{{ staticData.about_system }}</div>
          <div class="landing-ttl">
            Мы разработали <span>уникальную</span> систему,<br />
            аналогов которой еще нет
          </div>
          <div class="landing-txt">
            {{ staticData.about_system_small_headline }}
          </div>
        </div>
      </div>
      <div
        v-for="blockContent in dynamicData.about_system"
        :key="blockContent.id"
        data-aos="fade-up"
        data-aos-duration="1500"
        class="landing-block_system-wrap"
      >
        <v-row class="landing-block_system">
          <v-col cols="12" md="7" data-aos="fade-right" data-aos-duration="1500">
            <img :src="blockContent.image" alt="" />
          </v-col>
          <v-col cols="12" md="5" class="pr-md-14" data-aos="fade-left">
            <LandSmile />
            <div class="landing-block_ttl">{{ blockContent.title }}</div>
            <div class="landing-block_txt">
              {{ blockContent.content }}
            </div>
          </v-col>
        </v-row>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div class="landing-ascent">
          <div class="landing-ascent_ttl">
            {{ staticData.first_blue_background_big_text }}
          </div>
          <div class="d-flex align-center justify-center flex-column flex-md-row">
            <v-btn
              class="btn--more"
              x-large
              plain
              height="48px"
            >
              {{ staticData.learn_more }}
              <ArrowRight class="ml-2" />
            </v-btn>
            <v-btn
              class="btn btn--invert ml-md-6 mb-2 mb-md-0"
              color="#fff"
              x-large
              height="48px"
              to="register"
            >
              {{ staticData.start_now }}
            </v-btn>
          </div>
        </div>
      </div>
      <div id="statistic">
        <v-row>
          <v-col cols="12" md="6" data-aos="fade-down-right" data-aos-duration="1500">
            <div class="landing-subtxt">
              {{ staticData.statistics }}
            </div>
            <div class="landing-ttl">
              {{ staticData.statistics_left_headline }}
            </div>
            <div class="landing-txt">
              {{ staticData.statistics_left_text }}
            </div>
          </v-col>
          <v-col cols="12" md="6" class="table" data-aos="zoom-in-left" data-aos-duration="1500">
            <div class="landing-table">
              <div class="d-flex justify-space-between align-center mb-14">
                <div class="landing-table_ttl">
                  {{ staticData.statistics_right_headline }}
                </div>
                <div class="d-block">
                  <LogoSvg />
                </div>
              </div>
              <div class="main-table">
                <img class="main-table_img" src="svg/static.svg" alt="">
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div
        id="speak"
        data-aos="fade-up"
      >
        <div class="landing-review">
          <div class="landing-subtxt">О нас говорят</div>
          <div class="landing-ttl mb-16 mb-md-4">
            What <span>motivates</span> users to use<br
              class="d-none d-md-block"
            />
            Strike strategies to <span>earn</span><br class="d-none d-md-block" />
            and <span>discover</span> new opportunities
          </div>
          <v-dialog
            v-model="dialog"
          >
            <template #activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                class="btn d-none d-md-block"
                color="#2d7bf6"
                x-large
                height="48px"
                v-on="on"
              >
                {{ staticData.review_about_us_talk }}
                <PlaySvg class="ml-2" />
              </v-btn>
            </template>

            <v-card class="dialog dialog--review">
              <v-row>
                <v-col cols="12" md="5">
                  <v-card-text class="dialog-text">
                    <h2>{{ staticData.video_review_modal_headline }}</h2>
                    <p>
                      {{ staticData.video_review_modal_paragraph1 }}
                    </p>
                    <p class="dialog-text_review">
                      {{ staticData.video_review_modal_paragraph2 }}
                    </p>
                    <NuxtLink to="/register">
                      <v-btn
                        class="btn d-none d-md-flex"
                        color="#2d7bf6"
                        x-large
                        height="48px"
                      >
                        Регистрация
                        <RegisterSvg class="ml-2" />
                      </v-btn>
                    </NuxtLink>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="7">
                  <v-row>
                    <v-col v-for="dynamicReviewitem in dynamicData.videoReviews" :key="dynamicReviewitem.id" cols="12" md="6" class="dialog-review">
                      <div class="dialog-review_video">
                        <img :src="dynamicReviewitem.image" alt="">
                        <button class="dialog-review_play" type="button" @click="showVideo = dynamicReviewitem.id">
                          <PlayVideo />
                        </button>
                      </div>
                      <div v-if="showVideo === dynamicReviewitem.id" class="dialog-review_video-wrap">
                        <iframe
                          width="100%"
                          height="100%"
                          :src="dynamicReviewitem.link"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        >
                        </iframe>
                        <v-btn
                          color="primary"
                          class="dialog-review_video-close"
                          text
                          @click="showVideo = null"
                        >
                          <CloseButton />
                        </v-btn>
                      </div>
                      <div class="dialog-review_name">
                        {{ dynamicReviewitem.title }}
                      </div>
                      <div class="dialog-review_date">
                        {{ $moment(dynamicReviewitem.date).format("DD MMM YYYY") }}
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-card-actions>
                <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
                >
                  <CloseButton />
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <div class="landing-review_wrap">
            <div v-for="dynamicDataitem in dynamicData.reviews" :key="dynamicDataitem.id" class="landing-review_item">
              <div class="landing-review_txt">
                {{ dynamicDataitem.content }}
              </div>
              <div class="landing-review_name">{{ dynamicDataitem.name }}</div>
              <div class="landing-review_img">
                <img :src="dynamicDataitem.image" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
      >
        <div class="landing-ascent">
          <div class="landing-ascent_ttl">
            {{ staticData.first_blue_background_big_text }}
          </div>
          <div class="d-flex align-center justify-center">
            <v-btn
              class="btn btn--invert"
              color="#fff"
              x-large
              height="48px"
              to="register"
            >
              {{ staticData.start_now }}
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import LandTtl from "~~/components/svg/LandTtl";
import LandSmile from "~~/components/svg/LandSmile";
import StaticService from "~/services/StaticService";
import HttpService from "~/services/HttpService";
import PlaySvg from "~~/components/svg/PlaySvg";
import RegisterSvg from "~~/components/svg/RegisterSvg";
import CloseButton from "~~/components/svg/CloseButton";
import LogoSvg from "~~/components/svg/LogoSvg";
import ArrowRight from "~~/components/svg/ArrowRight";
import PlayVideo from "~~/components/svg/PlayVideo";
import Loader from "~~/components/common/Loader.vue";

export default {
  components: {
    LandTtl,
    LandSmile,
    PlaySvg,
    RegisterSvg,
    CloseButton,
    LogoSvg,
    ArrowRight,
    PlayVideo,
    Loader
  },
  layout: "landing",
  data () {
    return {
      text: "all",
      dialog: false,
      showVideo: null,
      staticData: [],
      dynamicData: {}
    };
  },
  async fetch () {
    this.staticData = await StaticService.get("/main");

    const response = await HttpService.get("/main-page");
    if (response.status === 200) {
      this.dynamicData = response.data;
    } else {
      // TODO do we need to inform user?
    }
  },
  created () {
    AOS.init()
  },
  fetchOnServer: false
};
</script>

<style lang="scss" scoped>
  .landing {
    img {
      @media screen and (max-width: 758px) {
        max-width: 100%;
      }
    }
  }
  .main {
      &-table {
          &_people {
              font-weight: 500;
              font-size: 36px;
              line-height: 47px;
          }

          &_head {
              margin-bottom: 20px;
          }

          .v-btn-toggle {
              .v-btn {
                  font-size: 13px;
                  line-height: 17px;
                  color: #6a6b79;
                  height: 30px;
                  letter-spacing: 0;
                  text-transform: none;
                  border: 1px solid #272a33;
                  border-radius: 4px !important;
                  width: 89px;
              }

              .v-btn--active {
                  background: #2d7bf6 !important;
                  border-color: #2d7bf6;
                  color: #fff;
              }
          }
      }

      &-info {
          margin-top: 30px;
          text-align: right;
          font-size: 13px;
          line-height: 17px;
          color: #6a6b79;
      }
  }

  .theme--dark.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
      height: 30px;
      background: #1e1f26;
      border-bottom: 0;
  }

  .v-data-table > .v-data-table__wrapper > table > thead > tr > th:first-child {
      border-radius: 6px 0 0 6px;
  }

  .v-data-table > .v-data-table__wrapper > table > thead > tr > th:last-child {
      border-radius: 0 6px 6px 0;
  }

  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
      height: 30px;
      font-size: 14px;
      line-height: 18px;
      color: #adafc2;
      background: none;
  }

  .v-data-table .v-data-table__wrapper table thead::after {
      content: "@";
      display: block;
      line-height: 17px;
      text-indent: -99999px;
  }

  .theme--dark.v-data-table {
      background: inherit;
  }

  .v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default {
      height: 30px;
  }

  .v-application--is-ltr .v-btn-toggle > .v-btn.v-btn:not(:first-child) {
      border-left-width: 1px;
  }

  .v-sheet.v-card:not(.v-sheet--outlined) {
      border-radius: 15px;
  }

  .v-btn-toggle--group {
      @media screen and (max-width: 758px) {
          overflow-y: scroll;
      }
  }

  a {
    text-decoration: none;
  }

  .main-table_img {
    max-width: 100%;
  }
</style>
