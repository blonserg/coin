<template>
  <v-card class="news-item" @click="goToNewsItem()">
    <div class="news-img">
      <img :src="image" alt="">
    </div>
    <div class="news-info">
      <div class="news-ttl d-flex">
        <span class="pr-5">{{ title }}</span>
        <ArrowRight class="ml-4" />
      </div>
      <div class="news-bottom d-flex justify-space-between">
        <div class="news-label c-green">
          {{ category }}
        </div>
        <div class="news-metrics d-flex">
          <!-- <div class="news-views">
            {{ views }}
            <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3.5C0 2.65865 2.25982 0 5.51662 0C8.77341 0 11 2.65865 11 3.5C11 4.34135 8.74018 7 5.51662 7C2.29305 7 0 4.30769 0 3.5ZM7.77643 3.5C7.77643 2.22115 6.77946 1.21154 5.51662 1.21154C4.25378 1.21154 3.2568 2.22115 3.2568 3.5C3.2568 4.74519 4.25378 5.78846 5.51662 5.78846C6.74622 5.78846 7.77643 4.74519 7.77643 3.5ZM4.6858 3.5C4.6858 3.02885 5.05136 2.65865 5.51662 2.65865C5.98187 2.65865 6.34743 3.02885 6.34743 3.5C6.34743 3.9375 5.98187 4.34135 5.51662 4.34135C5.05136 4.30769 4.6858 3.9375 4.6858 3.5Z" fill="#808190" />
            </svg>
          </div> -->
          <div class="news-date">
            {{ $moment(date).format("DD MMM") }}
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import ArrowRight from "~~/components/svg/ArrowRight";

export default {
  components: {
    ArrowRight
  },
  props: {
    title: {
      type: String,
      default: "Новость"
    },
    category: {
      type: String,
      default: "Прогноз"
    },
    // views: {
    //   type: String,
    //   default: "1"
    // },
    date: {
      type: String,
      default: "1 янв"
    },
    image: {
      type: String,
      default: ""
    },
    slug: {
      type: String,
      default: "new-year"
    }
  },
  methods: {
    goToNewsItem () {
      this.$router.push("article/" + this.slug);
    }
  }
};
</script>

<style lang="scss" scoped>
  .news {
    &-list {
      display: flex;
      justify-content: space-between;
    }

    &-item {
      background: #2b2e38;
      border: 1px solid #272a33;
      border-radius: 15px;
      width: 344px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .theme--light & {
        background: #e4e5e8;
        border: 1px solid #f0f0f0;
      }
    }

    &-img {
      height: 263px;

      img {
        max-width: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px 15px 0 0;
      }
    }

    &-info {
      background: #23262e;
      padding: 20px 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 2;

      .theme--light & {
        background: #fff;
      }
    }

    &-ttl {
      font-size: 20px;
      line-height: 26px;
      margin-bottom: 20px;
      justify-content: space-between;

      a {
        color: #eef1f8;
        text-decoration: none;

        .theme--light & {
          color: #474856;
        }
      }
    }

    &-label {
      background: #1b1d23;
      border-radius: 4px;
      padding: 4px 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      line-height: 17px;

      .theme--light & {
          background: #f6f7f9;
        }

      &.c-green {
        color: #61ccbf;
      }

      &.c-purple {
        color: #8d68f5;
      }

      &.c-orange {
        color: #f7aa50;
      }
    }

    &-metrics {
      color: #808190;
      font-size: 13px;
    }

    &-views {
      margin-right: 20px;

      svg {
        margin-left: 3px;
      }
    }
  }
</style>
