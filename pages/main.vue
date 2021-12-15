<template>
  <div>
    <Title
      :title="staticData.cabinet_main_event"
      :sort-items="sortItems"
      :on-select-sort-type="onSortTypeChangeEvents"
    />
    <div class="d-flex mb-16">
      <!-- <VueSlickCarousel v-if="events" v-bind="settings" class="events"> -->
      <!-- <v-card v-for="item in events" :key="item.id" class="events-item d-flex justify-space-between align-center">
        <div class="events-date">
          <span class="events-date_month"> {{ item.date | moment("MMM") }}</span>
          <span class="events-date_day">{{ item.date | moment("DD") }}</span>
        </div>
        <v-divider vertical />
        <div class="events-info">
          <div class="events-ttl d-flex">
            {{ item.title }}
            <ArrowRight class="ml-4" />
          </div>
          <div
            class="events-info_bottom d-flex justify-space-between align-center"
          >
            <div class="events-name">
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 9.97586C0 8.45862 1.96296 6.37241 5 6.37241C8.03704 6.37241 10 8.45862 10 9.97586C10 10.6207 9.62963 11 8.51852 11H1.48148C0.37037 11 0 10.6207 0 9.97586ZM2.59259 2.65517C2.59259 1.21379 3.66667 0 5 0C6.33333 0 7.40741 1.21379 7.40741 2.65517C7.40741 4.17241 6.33333 5.34828 5 5.34828C3.66667 5.34828 2.59259 4.17241 2.59259 2.65517Z"
                  fill="#808190"
                />
              </svg>
              {{ item.author }}
            </div>
            <div v-if="item.event_time" class="events-time">{{ item.event_time }}</div>
          </div>
        </div>
      </v-card> -->
      <v-card class="events-item d-flex justify-space-between align-center">
        <div class="events-date">
          <span class="events-date_month"> ДЕК</span>
          <span class="events-date_day">31</span>
        </div>
        <v-divider vertical />
        <div class="events-info">
          <NuxtLink to="/event">
            <div class="events-ttl d-flex">
              Как инвестировать в криптовалюту
              <ArrowRight class="ml-4" />
            </div>
          </NuxtLink>
          <div
            class="events-info_bottom d-flex justify-space-between align-center"
          >
            <div class="events-name">
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 9.97586C0 8.45862 1.96296 6.37241 5 6.37241C8.03704 6.37241 10 8.45862 10 9.97586C10 10.6207 9.62963 11 8.51852 11H1.48148C0.37037 11 0 10.6207 0 9.97586ZM2.59259 2.65517C2.59259 1.21379 3.66667 0 5 0C6.33333 0 7.40741 1.21379 7.40741 2.65517C7.40741 4.17241 6.33333 5.34828 5 5.34828C3.66667 5.34828 2.59259 4.17241 2.59259 2.65517Z"
                  fill="#808190"
                />
              </svg>
              Дмитрий Портнягин
            </div>
            <div class="events-time">12:00</div>
          </div>
        </div>
      </v-card>
    <!-- </VueSlickCarousel> -->
    </div>
    <!-- Promo:
    {{ promo }}
    <br> -->
    <Seetoo :title="staticData.cabinet_main_be_interested" />
    <Title
      :title="staticData.cabinet_main_news"
      :categories="categories"
      :sort-items="sortItems"
      :on-select-sort-type="onSortTypeChangeNews"
      :on-select-categories="onCategoriesChangeNews"
    />
    <v-row>
      <v-col v-for="item in apiNews" :key="item.id" md="4">
        <News
          :title="item.title"
          :date="item.date"
          :slug="item.slug"
          :category="item.categories.name"
          :image="item.preview"
        />
      </v-col>
    </v-row>
    <v-btn class="btn btn-seetoo" to="/news" block>{{ staticData.cabinet_main_see_more }} </v-btn>
    <h2 class="main-ttl">{{ staticData.cabinet_main_total_user_amount }}</h2>
    <span class="main-subttl">
      Учитываются все пользователи, зарегистрировавшиеся на Strike Team
    </span>
    <div class="main-table">
      <div
        class="
          main-table_head
          d-flex
          flex-column flex-md-row
          justify-space-between
        "
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
        <v-btn-toggle v-model="text" tile group>
          <v-btn @click="applyInterval('1month')"> 1 месяц </v-btn>
          <v-btn @click="applyInterval('3months')"> 3 месяца </v-btn>
          <v-btn value="all" @click="applyInterval('all')"> Все время </v-btn>
        </v-btn-toggle>
      </div>
      <div class="main-body">
        <v-container>
          <v-row>
            <v-col md="6">
              <v-simple-table>
                <template #default>
                  <thead>
                    <tr>
                      <th class="text-left">Страна</th>
                      <th class="text-left">Количество</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in statisticsCountries" :key="item.country">
                      <td>{{ item.country }}</td>
                      <td>{{ item.procent }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
            <v-col md="6">
              <v-simple-table>
                <template #default>
                  <thead>
                    <tr>
                      <th class="text-left">Город</th>
                      <th class="text-left">Количество</th>
                    </tr>
                  </thead>
                  <v-spacer />
                  <tbody>
                    <tr v-for="item in statisticsCities" :key="item.city">
                      <td>{{ item.city }}</td>
                      <td>{{ item.procent }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <p class="main-info">
        {{ staticData.cabinet_main_time_defined_in_gmt }}
      </p>
    </div>
  </div>
</template>

<script>
// import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
import Title from "~~/components/common/Title";
import News from "~~/components/common/News";
import Seetoo from "~~/components/Seetoo";
import StaticService from "~/services/StaticService";
import HttpService from "~/services/HttpService";
import ArrowRight from "~~/components/svg/ArrowRight";

export default {
  components: {
    Title,
    News,
    Seetoo,
    ArrowRight
  },
  data () {
    return {
      text: "all",
      staticData: [],
      events: null,
      promo: null,
      apiNews: null,
      statisticsCountries: null,
      statisticsCities: null,
      selectedSortTypeEvents: null,
      selectedSortTypeNews: null,
      selectedCategoriesNews: null,
      categories: ["category1", "category2", "category3"], // TODO get data from apiNews
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
      // settings: {
      //   "slidesToShow": 3,
      //   "slidesToScroll": 1,
      //   "arrows": false,
      //   "variableWidth": true,
      //   "responsive": [
      //     {
      //       "breakpoint": 768,
      //       "settings": {
      //         "slidesToShow": 1,
      //         "slidesToScroll": 1
      //       }
      //     }
      //   ]
      // }
    };
  },
  async fetch () {
    this.staticData = await StaticService.get("/cabinet_main");

    await this.getEvents();

    await this.getNews();

    let response = await HttpService.get("/promo");
    if (response.status === 200) {
      this.promo = response.data;
    } else {
      // TODO do we need to inform user?
    }

    response = await HttpService.get("/statistics");
    if (response.status === 200) {
      this.statisticsCountries = response.data.countries;
      this.statisticsCities = response.data.cities;
    } else {
      // TODO do we need to inform user?
    }
  },
  fetchOnServer: false,
  computed: {
    desserts () {
      return this.$store.state.desserts;
    },
    news () {
      return this.$store.state.news;
    }
  },
  methods: {
    async applyInterval (interval) {
      const params = {
        interval
      }
      const response = await HttpService.get("/statistics", params);
      if (response.status === 200) {
        this.statisticsCountries = response.data.countries;
        this.statisticsCities = response.data.cities;
      } else {
      // TODO do we need to inform user?
      }
    },
    async getEvents () {
      const params = {};
      if (this.selectedSortTypeEvents !== null) {
        params.sort = this.selectedSortTypeEvents;
      }
      const response = await HttpService.get("/events", params);
      if (response.status === 200) {
        this.events = response.data;
      } else {
        // TODO do we need to inform user?
      }
    },
    onSortTypeChangeEvents (sortType) {
      this.selectedSortTypeEvents = sortType;
      this.getEvents();
    },
    async getNews () {
      const params = {};
      if (this.selectedSortTypeNews !== null) {
        params.sort = this.selectedSortTypeNews;
      }
      if (this.selectedCategoriesNews !== null) {
        this.selectedCategoriesNews.forEach((categoryName, categoryIndex) => {
          params["category[" + categoryIndex + "]"] = categoryName;
        });
      }
      const response = await HttpService.get("/news", params);
      if (response.status === 200) {
        this.apiNews = response.data.articles;
      } else {
        // TODO do we need to inform user?
      }
    },
    onSortTypeChangeNews (sortType) {
      this.selectedSortTypeNews = sortType;
      this.getNews();
    },
    onCategoriesChangeNews (categories) {
      this.selectedCategoriesNews = categories;
      this.getNews();
    }
  }
};
</script>

<style lang="scss" scoped>
.theme--dark.v-card {
  background: #23262e;
}

.v-btn.v-btn--has-bg {
  background: #1e1f26;
}

.theme--light.v-btn.v-btn--has-bg {
  background: #eef0f2;
}

.main {
  &-ttl {
    font-weight: 600;
    font-size: 24px;
    line-height: 31px;
    color: white;

    .theme--light & {
      color: #474856;
    }
  }

  &-subttl {
    font-size: 16px;
    line-height: 21px;
    color: #808190;
    margin-bottom: 30px;
    display: inline-block;
  }

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
      @media screen and (max-width: 758px) {
        overflow-y: scroll;
      }

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

        .theme--light & {
          border: 1px solid #e1e3ea;
          background: rgba(255, 255, 255, 0.5);
        }
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

.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  height: 30px;
  background: #1e1f26;
  border-bottom: 0;

  .theme--light & {
    background: #fff;
  }
}

.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  color: #afb0bb;
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

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td + td {
  color: #fff;
}

.v-data-table .v-data-table__wrapper table tbody tr {
  position: relative;
}

.v-data-table .v-data-table__wrapper table tbody tr td:first-child::before {
  content: '';
  position: absolute;
  left: 3px;
  top: 11px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.v-data-table .v-data-table__wrapper table tbody tr:nth-child(5n + 1) td:first-child::before {
  background-color: #8d68f5;
}

.v-data-table .v-data-table__wrapper table tbody tr:nth-child(5n + 2) td:first-child::before {
  background-color: #68f58f;
}

.v-data-table .v-data-table__wrapper table tbody tr:nth-child(5n + 3) td:first-child::before {
  background-color: #f5ac68;
}

.v-data-table .v-data-table__wrapper table tbody tr:nth-child(5n + 4)td:first-child::before {
  background-color: #687ff5;
}

.v-data-table .v-data-table__wrapper table tbody tr:nth-child(5n + 5) td:first-child::before {
  background-color: #f56868;
}

.v-data-table .v-data-table__wrapper table thead::after {
  content: "@";
  display: block;
  line-height: 17px;
  text-indent: -99999px;
}

.v-data-table {
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
</style>
