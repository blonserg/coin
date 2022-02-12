<template>
  <div class="learn">
    <NuxtLink class="link d-block mb-10" to="/learn">
      <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.2 5.0248C0.05 4.8748 0 4.7248 0 4.5248C0 4.3248 0.05 4.1748 0.2 4.0248L3.9 0.374805C4.05 0.224805 4.2 0.174805 4.35 0.174805C4.75 0.174805 5 0.474805 5 0.824805C5 0.974805 4.95 1.1748 4.8 1.2748L1.55 4.5248L4.8 7.7248C4.95 7.8748 5 8.0248 5 8.1748C5 8.52481 4.7 8.8248 4.35 8.8248C4.15 8.8248 4 8.7748 3.9 8.6248L0.2 5.0248Z" fill="#2D7BF6" />
      </svg>
      Обучение
    </NuxtLink>
    <div class="ttl mb-2">
      Введение: Работа со Strike Team
    </div>
    <v-row>
      <v-col col="12" md="6">
        <div class="subttl">
          Базовый курс по работе с системой Strike Team,  для новых пользователей, который включает в себя основы работы с данным сервисом.
        </div>
      </v-col>
    </v-row>
    <div class="learn-subttl">
      Доступные курсы:
    </div>
    <v-card class="learn-list">
      <div class="learn-list-img">
        <img src="/article.png" alt="">
      </div>
      <div class="learn-list-info">
        <div class="learn-list-course">
          Курс #1
        </div>
        <div class="learn-list-ttl">
          Введение: Работа со Strike Team
        </div>
        <div class="learn-list-bottom d-flex mb-2">
          <div class="learn-list-label">
            <LearnPlay class="mr-2" />
            10 уроков
          </div>
          <div class="learn-list-label">
            <LearnTime class="mr-2" />
            10+ часов
          </div>
        </div>
        <p class="article-txt">
          Освой JavaScript и frontend-разработку на React, Redux и Typescript с нуля. Самый востребованный стек для работы над крупными проектами.
        </p>
      </div>
      <v-btn
        class="btn"
        color="#2d7bf6"
        height="48px"
        to="/learnitem"
      >
        Подробнее
      </v-btn>
    </v-card>
    <v-alert
      class="learn-list-alert"
    >
      <LearnAlert />
      <div>Чтобы получить досутп к остальным курсам необходимо успешно пройти Курс #1 Верим в вас!</div>
    </v-alert>
    <v-card class="learn-list disabled">
      <div class="learn-list-img">
        <img src="/article.png" alt="">
      </div>
      <div class="learn-list-info">
        <div class="learn-list-course">
          Курс #1
        </div>
        <div class="learn-list-ttl">
          Введение: Работа со Strike Team
        </div>
        <div class="learn-list-bottom d-flex mb-2">
          <div class="learn-list-label">
            <LearnPlay class="mr-2" />
            10 уроков
          </div>
          <div class="learn-list-label">
            <LearnTime class="mr-2" />
            10+ часов
          </div>
        </div>
        <p class="article-txt">
          Освой JavaScript и frontend-разработку на React, Redux и Typescript с нуля. Самый востребованный стек для работы над крупными проектами.
        </p>
      </div>
      <v-btn
        class="btn"
        color="#2d7bf6"
        height="48px"
        disabled
      >
        Недоступно
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import LearnPlay from "~~/components/svg/LearnPlay";
import LearnTime from "~~/components/svg/LearnTime";
import LearnAlert from "~~/components/svg/LearnAlert";

export default {
  components: {
    LearnPlay,
    LearnTime,
    LearnAlert
  }
}
</script>

<style lang="scss" scoped>
  .learn {
    &-subttl {
      font-size: 18px;
      line-height: 23px;
      color: #adafc2;
      margin-bottom: 18px;
    }
  }

  .learn-list {
    background: #23262e;
    border: 1px solid #23262e;
    border-radius: 15px;
    display: flex;
    align-items: center;
    padding-right: 40px;
    margin-bottom: 20px;

    .theme--light & {
      background: #e4e5e8;
      border: 1px solid #f0f0f0;
    }

    &-subttl {
      font-size: 18px;
      line-height: 23px;
      color: #adafc2;
      margin-bottom: 18px;
    }

    &-img {
      height: 263px;
      min-width: 284px;

      .disabled & {
        position: relative;

        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          border-radius: 15px 0 0 15px;
          left: 0;
        }
      }

      img {
        max-width: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px 0 0 15px;
      }
    }

    &-info {
      background: #23262e;
      padding: 20px 16px;

      .theme--light & {
        background: #fff;
      }
    }

    &-ttl {
      font-size: 20px;
      line-height: 26px;
      padding-right: 20px;
      margin-bottom: 20px;

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
      color: #adafc2;

      & + & {
        margin-left: 10px;
      }

      svg {
        margin-right: 6px;
      }

      .theme--light & {
        background: #f6f7f9;
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

    &-course {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.01px;
      color: #2d7bf6;
      margin-bottom: 10px;
    }

    &-alert {
      max-width: 710px;
      background-color: rgba(247, 80, 80, 0.1);
      color: #ff9c9c;
      font-size: 16px;
      line-height: 20px;
    }

    .theme--dark.v-btn.v-btn--disabled.v-btn--has-bg {
      background-color: #1e1f26 !important;
      color: #808190;
    }
  }
</style>
