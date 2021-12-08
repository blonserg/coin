<template>
  <div class="landing">
    <div v-if="$fetchState.pending">Loading...</div>
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
            Lorem ipsum dolor sit amet
          </v-col>
          <v-col cols="12" md="8" class="landing-txt">
            {{ staticData.about_team_left_text }}
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
      <div>
        <v-row class="landing-block_system">
          <v-col cols="12" md="7" data-aos="fade-right" data-aos-duration="1500">
            <img src="/learn.png" alt="" />
          </v-col>
          <v-col cols="12" md="5" class="pr-md-14" data-aos="fade-left">
            <LandSmile />
            <div class="landing-block_ttl">Обучение</div>
            <div class="landing-block_txt">
              На нашей платформе будут выступать ведущие спикеры из
              самых разных сфер жизни, поэтому каждый желающий найдет
              что-то для себя
            </div>
          </v-col>
        </v-row>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-anchor-placement="center-center"
      >
        <v-row class="landing-block_system">
          <v-col cols="12" md="5" class="pl-md-14">
            <LandSmile />
            <div class="landing-block_ttl">Стратегии</div>
            <div class="landing-block_txt">
              Неважно, с какой суммы Вы желаете начать свой путь
              инвестора, мы поможем подобрать оптимальную стратегию
              исходя из Ваших желаний и возможностей
            </div>
          </v-col>
          <v-col cols="12" md="7">
            <img src="/strategy.png" alt="" />
          </v-col>
        </v-row>
      </div>
      <div>
        <v-row class="landing-block_system">
          <v-col cols="12" md="7" data-aos="fade-right" data-aos-duration="1500" data-aos-anchor-placement="center-center">
            <img src="/stock.png" alt="" />
          </v-col>
          <v-col cols="12" md="5" class="pr-md-14" data-aos="fade-left">
            <LandSmile />
            <div class="landing-block_ttl">Биржа услуг</div>
            <div class="landing-block_txt">
              Наши первоклассные специалисты с удовольствием окажут
              содействие в решении Ваших потребностей
            </div>
          </v-col>
        </v-row>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-anchor-placement="center-center"
      >
        <v-row class="landing-block_system">
          <v-col cols="12" md="5" class="pl-md-14">
            <LandSmile />
            <div class="landing-block_ttl">Нетворк</div>
            <div class="landing-block_txt">
              StrikeTeam это большая и дружная команда, с которой
              можно не только работать, но и отлично проводить время.
              Вливайся!
            </div>
          </v-col>
          <v-col md="7">
            <img src="/strategy.png" alt="" />
          </v-col>
        </v-row>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-anchor-placement="center-center"
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
            >
              {{ staticData.start_now }}
            </v-btn>
          </div>
        </div>
      </div>
      <div id="statistic">
        <v-row>
          <v-col md="6" data-aos="fade-down-right" data-aos-duration="1500" data-aos-anchor-placement="center-center">
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
          <v-col md="6" class="table" data-aos="zoom-in-left" data-aos-duration="1500" data-aos-anchor-placement="center-center">
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
                <div
                  class="main-table_head d-flex flex-column-reverse flex-md-row justify-space-between"
                >
                  <div class="main-table_people">
                    <svg
                      width="24"
                      height="17"
                      viewBox="0 0 24 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 15.2518C0 12.7553 2.46729 9.80496 6.4486 9.80496C8.13084 9.80496 9.42056 10.3156 10.4299 11.0532C8.52337 12.5851 7.51402 15.3085 8.41121 16.5H1.45794C0.448598 16.5 0 16.0461 0 15.2518ZM3.42056 5.03901C3.42056 3.16667 4.82243 1.69149 6.50467 1.69149C8.18692 1.69149 9.53271 3.16667 9.53271 5.03901C9.53271 6.96809 8.13084 8.44326 6.50467 8.44326C4.87851 8.44326 3.42056 6.96809 3.42056 5.03901ZM9.19626 15.3085C9.19626 12.9823 12.0561 9.8617 16.5981 9.8617C21.1402 9.8617 24 13.039 24 15.3085C24 16.1028 23.4953 16.4433 22.2617 16.4433H10.9907C9.70094 16.5 9.19626 16.1028 9.19626 15.3085ZM13.1215 4.35816C13.1215 2.20213 14.7477 0.5 16.6542 0.5C18.5607 0.5 20.1869 2.14539 20.1869 4.30142C20.1869 6.51418 18.5607 8.21631 16.6542 8.21631C14.7477 8.27305 13.1215 6.57092 13.1215 4.35816Z"
                        fill="#6A6B79"
                      />
                    </svg>
                    36 459
                  </div>
                  <v-btn-toggle
                    v-model="text"
                    tile
                    group
                    class="mb-4 mb-md-0"
                  >
                    <v-btn value="day"> {{ staticData.statistics_day }} </v-btn>

                    <v-btn value="week"> {{ staticData.statistics_week }} </v-btn>

                    <v-btn value="month"> {{ staticData.statistics_month }} </v-btn>

                    <v-btn value="all"> {{ staticData.statistics_all_time }} </v-btn>
                  </v-btn-toggle>
                </div>
                <div class="main-body">
                  <!-- <v-simple-table>
                    <template #default>
                      <thead>
                        <tr>
                          <th class="text-left">{{ staticData.statistics_country }}</th>
                          <th class="text-left">
                            {{ staticData.statistics_qty }}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="item in statisticsCountries"
                          :key="item.country"
                        >
                          <td>{{ item.country }}</td>
                          <td>{{ item.procent }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table> -->
                </div>
                <p class="main-info d-none d-md-block">
                  {{ staticData.statistics_bottom_text }}
                </p>
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
                    <v-col cols="12" md="6" class="dialog-review">
                      <div class="dialog-review_video">
                      </div>
                      <div class="dialog-review_name">
                        Отзыв от Дмитрия Портнягина
                      </div>
                      <div class="dialog-review_date">
                        28 окт
                      </div>
                    </v-col>
                    <v-col cols="12" md="6" class="dialog-review">
                      <div class="dialog-review_video">
                      </div>
                      <div class="dialog-review_name">
                        Отзыв от Дмитрия Портнягина
                      </div>
                      <div class="dialog-review_date">
                        28 окт
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
                <img src="/review-1.png" alt="" />
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

export default {
  components: {
    LandTtl,
    LandSmile,
    PlaySvg,
    RegisterSvg,
    CloseButton,
    LogoSvg,
    ArrowRight
  },
  layout: "landing",
  data () {
    return {
      text: "all",
      dialog: false,
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159
        }
      ],
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
      // TODO
    }
  },
  created () {
    AOS.init()
  },
  fetchOnServer: false
};
</script>

<style lang="scss" scoped>
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
</style>
