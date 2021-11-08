<template>
  <div class="landing">
    <v-row class="landing-block align-center">
      <v-col cols="12" md="7">
        <div class="landing-ttl">
          <LandTtl />
        </div>
        <div class="landing-txt mb-10">
          Хочешь выжать максимум из инвестиций? Мы расскажем как это
          сделать и поделимся своим опытом!
        </div>
        <div class="d-flex align-center">
          <Button :text="`Начать сейчас`" />
        </div>
      </v-col>
      <v-col cols="12" md="5" style="position: relative">
        <img class="landing-main_image" src="/man-rocket.png" alt="" />
      </v-col>
    </v-row>
    <v-lazy
      v-model="firstBlock"
      :options="{
        threshold: 1.0,
      }"
      transition="scroll-y-transition"
    >
      <div class="landing-subtxt">О команде</div>
    </v-lazy>
    <v-lazy
      v-model="secondBlock"
      :options="{
        threshold: 1.0,
      }"
      min-height="200"
      transition="scroll-y-transition"
      class="landing-block"
    >
      <v-row>
        <v-col cols="12" md="4" class="landing-ttl">
          Lorem ipsum dolor sit amet
        </v-col>
        <v-col cols="12" md="8" class="landing-txt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </v-col>
      </v-row>
    </v-lazy>
    <v-lazy
      v-model="thirdBlock"
      :options="{
        threshold: 1.0,
      }"
      transition="scroll-y-transition"
      min-height="200"
    >
      <div class="landing-block_system text-center">
        <div class="landing-subtxt">Про систему</div>
        <div class="landing-ttl">
          Мы разработали <span>уникальную</span> систему,<br />
          аналогов которой еще нет
        </div>
        <div class="landing-txt">
          Стать ее частью и прокачай себя и<br
            class="d-none d-md-block"
          />
          свою команду на максимум!
        </div>
      </div>
    </v-lazy>
    <v-lazy
      v-model="fourBlock"
      :options="{
        threshold: 1.0,
      }"
      transition="scroll-y-transition"
      min-height="200"
    >
      <v-row class="landing-block_system">
        <v-col cols="12" md="7">
          <img src="/learn.png" alt="" />
        </v-col>
        <v-col cols="12" md="5" class="pr-md-14">
          <LandSmile />
          <div class="landing-block_ttl">Обучение</div>
          <div class="landing-block_txt">
            На нашей платформе будут выступать ведущие спикеры из
            самых разных сфер жизни, поэтому каждый желающий найдет
            что-то для себя
          </div>
        </v-col>
      </v-row>
    </v-lazy>
    <v-lazy
      v-model="fiveBlock"
      :options="{
        threshold: 1.0,
      }"
      transition="scroll-y-transition"
      min-height="200"
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
    </v-lazy>
    <v-lazy
      v-model="sixBlock"
      :options="{
        threshold: 1.0,
      }"
      transition="scroll-y-transition"
      min-height="200"
    >
      <v-row class="landing-block_system">
        <v-col cols="12" md="7">
          <img src="/stock.png" alt="" />
        </v-col>
        <v-col cols="12" md="5" class="pr-md-14">
          <LandSmile />
          <div class="landing-block_ttl">Биржа услуг</div>
          <div class="landing-block_txt">
            Наши первоклассные специалисты с удовольствием окажут
            содействие в решении Ваших потребностей
          </div>
        </v-col>
      </v-row>
    </v-lazy>
    <v-lazy
      v-model="sevenBlock"
      :options="{
        threshold: 1.0,
      }"
      transition="scroll-y-transition"
      min-height="200"
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
    </v-lazy>
    <v-lazy
      v-model="eightBlock"
      :options="{
        threshold: 1.0,
      }"
      transition="scroll-y-transition"
      min-height="200"
    >
      <div class="landing-ascent">
        <div class="landing-ascent_ttl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
          do eiusmod tempor incididunt
        </div>
        <div class="d-flex align-center justify-center">
          <Button :text="`Начать сейчас`" />
        </div>
      </div>
    </v-lazy>
    <v-lazy
      :options="{
        threshold: 1.0,
      }"
      transition="scroll-y-transition"
      min-height="200"
    >
      <v-row transition="scroll-y-transition">
        <v-col md="6">
          <div class="landing-subtxt">Статистика</div>
          <div class="landing-ttl">
            Excepteur sint occaecat officia
          </div>
          <div class="landing-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </div>
        </v-col>
        <v-col md="6" class="table">
          <div class="landing-table">
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
                  <v-btn value="day"> Сутки </v-btn>

                  <v-btn value="week"> Неделя </v-btn>

                  <v-btn value="month"> Месяц </v-btn>

                  <v-btn value="all"> ВСе время </v-btn>
                </v-btn-toggle>
              </div>
              <div class="main-body">
                <v-simple-table>
                  <template #default>
                    <thead>
                      <tr>
                        <th class="text-left">Name</th>
                        <th class="text-left">
                          Calories
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="item in desserts"
                        :key="item.name"
                      >
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </div>
              <p class="main-info d-none d-md-block">
                Время и границы суток определены в GMT (MSK
                −3:00)
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-lazy>
    <v-lazy
      v-model="nineBlock"
      :options="{
        threshold: 1.0,
      }"
      transition="scroll-y-transition"
      min-height="200"
    >
      <div class="landing-review">
        <div class="landing-subtxt">О нас гворят</div>
        <div class="landing-ttl mb-16 mb-md-0">
          What <span>motivates</span> users to use<br
            class="d-none d-md-block"
          />
          Strike strategies to <span>earn</span><br class="d-none d-md-block" />
          and <span>discover</span> new opportunities
        </div>
        <Button
          class="d-none d-md-block"
          :text="`Смотерть видео отзывы`"
        />
        <div class="landing-review_wrap">
          <div class="landing-review_item item1">
            <div class="landing-review_txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit
            </div>
            <div class="landing-review_name">Дмитрий Портнягин</div>
            <div class="landing-review_img">
              <img src="/review-1.png" alt="" />
            </div>
          </div>
        </div>
        <div class="landing-review_wrap">
          <div class="landing-review_item item2">
            <div class="landing-review_txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit
            </div>
            <div class="landing-review_name">Дмитрий Портнягин</div>
            <div class="landing-review_img">
              <img src="/review-2.png" alt="" />
            </div>
          </div>
        </div>
        <div class="landing-review_wrap">
          <div class="landing-review_item item3">
            <div class="landing-review_txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit
            </div>
            <div class="landing-review_name">Дмитрий Портнягин</div>
            <div class="landing-review_img">
              <img src="/review-3.png" alt="" />
            </div>
          </div>
        </div>
        <div class="landing-review_wrap">
          <div class="landing-review_item item4">
            <div class="landing-review_txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit
            </div>
            <div class="landing-review_name">Дмитрий Портнягин</div>
            <div class="landing-review_img">
              <img src="/review-4.png" alt="" />
            </div>
          </div>
        </div>
        <div class="landing-review_wrap">
          <div class="landing-review_item item5">
            <div class="landing-review_txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit
            </div>
            <div class="landing-review_name">Дмитрий Портнягин</div>
            <div class="landing-review_img">
              <img src="/review-5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </v-lazy>
    <v-lazy
      v-model="tenBlock"
      :options="{
        threshold: 1.0,
      }"
      transition="scroll-y-transition"
      min-height="200"
    >
      <div class="landing-ascent">
        <div class="landing-ascent_ttl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
          do eiusmod tempor incididunt
        </div>
        <div class="d-flex align-center">
          <Button :text="`Начать сейчас`" />
        </div>
      </div>
    </v-lazy>
    <div v-if="$fetchState.pending">Loading...</div>
    <div v-else>
      {{ staticData }}
      <br />
      <hr />
      <br />
      {{ dynamicData }}
    </div>
  </div>
</template>

<script>
import Button from "~~/components/common/Button";
import LandTtl from "~~/components/svg/LandTtl";
import LandSmile from "~~/components/svg/LandSmile";
import Http from "~~/api/http";

export default {
  components: {
    Button,
    LandTtl,
    LandSmile
  },
  layout: "landing",
  data () {
    return {
      text: "all",
      firstBlock: false,
      secondBlock: false,
      thirdBlock: false,
      fourBlock: false,
      fiveBlock: false,
      sixBlock: false,
      sevenBlock: false,
      eightBlock: false,
      nineBlock: false,
      tenBlock: false,
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159
        },
        {
          name: "Ice cream sandwich",
          calories: 237
        },
        {
          name: "Eclair",
          calories: 262
        },
        {
          name: "Cupcake",
          calories: 305
        },
        {
          name: "Gingerbread",
          calories: 356
        },
        {
          name: "Jelly bean",
          calories: 375
        },
        {
          name: "Lollipop",
          calories: 392
        },
        {
          name: "Honeycomb",
          calories: 408
        },
        {
          name: "Donut",
          calories: 452
        },
        {
          name: "KitKat",
          calories: 518
        }
      ],
      staticData: [],
      dynamicData: {}
    };
  },
  async fetch () {
    this.staticData = await Http.get("/static-content/main");
    this.dynamicData = await Http.get("/main-page");
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
</style>
