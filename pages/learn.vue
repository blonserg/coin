<template>
  <div class="learn">
    <div class="ttl mb-2">
      Обучение
    </div>
    <v-row>
      <v-col col="12" md="6">
        <div class="subttl">
          Наши курсы и коучинги приобрели широкий общественный резонанс благодаря уникальному формату обучения с интенсивной практикой, опытными наставниками и гарантией результата
        </div>
      </v-col>
    </v-row>
    <div class="learn-subttl">
      Доступные программы:
    </div>
    <v-row>
      <v-col col="12" md="6">
        <v-card class="learn-item">
          <div class="learn-img">
            <img src="/learn-free.png" alt="">
          </div>
          <div class="learn-info">
            <div class="learn-ttl">
              Введение: Работа со Strike Team
            </div>
            <div class="learn-bottom d-flex mb-2">
              <div class="learn-label">
                <LearnPlay class="mr-2" />
                10 уроков
              </div>
              <div class="learn-label">
                <LearnTime class="mr-2" />
                10+ часов
              </div>
            </div>
            <p class="article-txt mb-7">
              Освой JavaScript и frontend-разработку на React, Redux и Typescript с нуля. Самый востребованный стек для работы над крупными проектами.
            </p>
            <v-btn
              class="btn"
              color="#2d7bf6"
              height="48px"
              to="/learnlist"
              v-on="on"
            >
              Подробнее
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col col="12" md="6">
        <v-card class="learn-item">
          <div class="learn-img">
            <img src="/learn-pro.png" alt="">
          </div>
          <div class="learn-info">
            <div class="learn-ttl">
              Введение: Работа со Strike Team
            </div>
            <div class="learn-bottom d-flex mb-2">
              <div class="learn-label">
                <LearnPlay class="mr-2" />
                100 уроков
              </div>
              <div class="learn-label">
                <LearnTime class="mr-2" />
                100+ часов
              </div>
            </div>
            <p class="article-txt mb-7">
              Освой JavaScript и frontend-разработку на React, Redux и Typescript с нуля. Самый востребованный стек для работы над крупными проектами.
            </p>
            <v-btn
              class="btn"
              color="#2d7bf6"
              height="48px"
              to="/learnlist"
              v-on="on"
            >
              Подробнее
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
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

    &-list {
      display: flex;
      justify-content: space-between;
    }

    &-item {
      background: #2b2e38;
      border: 1px solid #272a33;
      border-radius: 15px;

      .theme--light & {
        background: #e4e5e8;
        border: 1px solid #f0f0f0;
      }
    }

    &-img {
      height: 386px;

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
