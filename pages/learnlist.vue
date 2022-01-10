<template>
  <div class="learn">
    <div class="ttl">
      Введение: Работа со Strike Team
    </div>
    <div class="subttl">
      Базовый курс по работе с системой Strike Team,  для новых пользователей, который включает в себя основы работы с данным сервисом.
    </div>
    <div class="learn-subttl">
      Доступные курсы:
    </div>
    <v-card class="learn-list">
      <div class="learn-list-img"></div>
      <div class="learn-list-info">
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
        v-on="on"
      >
        Подробнее
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import LearnPlay from "~~/components/svg/LearnPlay";
import LearnTime from "~~/components/svg/LearnTime";

export default {
  components: {
    LearnPlay,
    LearnTime
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
  }
</style>
