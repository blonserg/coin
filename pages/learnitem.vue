<template>
  <div>
    <div class="article-main">
      <NuxtLink class="link d-block mb-10" to="/learnlist">
        <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.2 5.0248C0.05 4.8748 0 4.7248 0 4.5248C0 4.3248 0.05 4.1748 0.2 4.0248L3.9 0.374805C4.05 0.224805 4.2 0.174805 4.35 0.174805C4.75 0.174805 5 0.474805 5 0.824805C5 0.974805 4.95 1.1748 4.8 1.2748L1.55 4.5248L4.8 7.7248C4.95 7.8748 5 8.0248 5 8.1748C5 8.52481 4.7 8.8248 4.35 8.8248C4.15 8.8248 4 8.7748 3.9 8.6248L0.2 5.0248Z" fill="#2D7BF6" />
        </svg>
        Обучение
      </NuxtLink>
      <div class="learn-nav mb-7">
        <div class="d-flex align-center">
          <div class="learn-nav-info mr-4 d-flex align-center">
            <LearnPlay class="mr-2" />
            <span>#10 урок</span>
          </div>
          <a class="article-link d-flex align-center mr-2" href="">
            <ArrowRight class="article-link-prev" />
          </a>
          <a class="article-link d-flex align-center mr-2" href="">
            <ArrowRight class="article-link-prev mr-3 ml-1" />
            <span>предыдущий урок</span>
          </a>
          <a class="article-link d-flex align-center" href="">
            <span>следующий урок</span>
            <ArrowRight class="mr-1 ml-3" />
          </a>
        </div>
      </div>
      <v-row>
        <v-col md="12">
          <div class="article-invest_img">
            <img src="/article.png" alt="">
          </div>
        </v-col>
      </v-row>
      <div class="d-flex justify-space-between align-center">
        <h1 class="article-main_ttl mb-3">
          Веб-дизайн 3.0
        </h1>
        <div class="d-flex align-center justify-space-between">
          <div class="learn-list-bottom d-flex">
            <div class="learn-list-label">
              <LearnPlay class="mr-2" />
              10 уроков
            </div>
            <div class="learn-list-label">
              <LearnTime class="mr-2" />
              10+ часов
            </div>
          </div>
        </div>
      </div>
      <div class="learn-speaker d-flex align-center  mb-7">
        <span>Спикеры:</span>
        <span class="learn-speaker-item">Алексей Алексеев,</span>
        <span class="learn-speaker-item">Алексей Алексеев</span>
      </div>
      <v-row class="mb-2">
        <v-col md="10">
          <p>
            В 2020 году многие авиаперевозчики оказались на грани банкротства после ввода карантинных ограничений в весенне-летний период. От этого пассажиропоток упал более чем на 90%, согласно данным TSA — агентства в США, которое отслеживает, сколько людей в аэропорту входят в зоны безопасности.
          </p>
          <p>
            В 2020 году многие авиаперевозчики оказались на грани банкротства после ввода карантинных ограничений в весенне-летний период. От этого пассажиропоток упал более чем на 90%, согласно данным TSA — агентства в США, которое отслеживает, сколько людей в аэропорту входят в зоны безопасности.
          </p>
          <p>
            В 2020 году многие авиаперевозчики оказались на грани банкротства после ввода карантинных ограничений в весенне-летний период. От этого пассажиропоток упал более чем на 90%, согласно данным TSA — агентства в США, которое отслеживает, сколько людей в аэропорту входят в зоны безопасности.
          </p>
        </v-col>
      </v-row>
      <div class="learn-buy">
        <div class="learn-buy_ttl">
          Приобрести курс
        </div>
        <div class="learn-buy_txt">
          Вы можете приобрести данный курс за баллы системы. Доступ ко всем урокам остается у вас безсрочно.
        </div>
        <div class="learn-buy_bottom">
          <div class="d-flex align-center justify-space-between">
            <div class="learn-price">
              <span class="learn-price_first">10$</span>
              <span class="learn-price_second">100$</span>
            </div>
            <button class="article-link" @click="dialogBuy = true">
              Приобрести
            </button>
          </div>
        </div>
      </div>
      <v-card class="learn-card">
        <div class="learn-card-txt mb-5">
          Пройдите тест чтобы lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </div>
        <v-btn
          class="btn"
          color="#2d7bf6"
          height="48px"
          to="/test"
        >
          <span class="mr-2">Пройти тест</span>
          <LearnTest class="mt-1" />
        </v-btn>
      </v-card>
    </div>
    <v-dialog
      v-model="dialogBuy"
      max-width="400"
    >
      <v-card class="dialog dialog--test">
        <div v-if="enableBuy">
          <RocketSvg class="mb-7" />
          <p class="mb-7">
            Вы действительно хотите приобрести курс “Веб дизайн 3.0”?
          </p>
          <div class="d-flex align-center justify-center mt-7">
            <button class="article-link mr-3 article-link--gray" type="button" @click="dialogBuy = false">
              отмена
            </button>
            <button class="article-link" type="button" @click="enableBuy = false">
              Купить
            </button>
          </div>
        </div>
        <div v-if="!enableBuy">
          <BuyDenied class="mb-7" />
          <p class="mb-7">
            У вас не достаточно баллов для покупки данного курса
          </p>
          <NuxtLink to="/learn">
            <button class="article-link" type="button" @click="dialogBuy = false">
              Смотреть курс
            </button>
          </NuxtLink>
        </div>
        <div v-if="completeBuy">
          <TestComplete class="mb-7" />
          <p class="mb-7">
            Поздравляем, вы успешно приобрели курс “Веб дизайн 3.0”
          </p>
          <NuxtLink to="/learn">
            <button class="article-link" type="button" @click="dialogBuy = false">
              Смотреть курс
            </button>
          </NuxtLink>
        </div>
        <div class="v-card__actions">
          <NuxtLink to="/learn">
            <v-btn
              color="primary"
              text
              @click="dialogBuy = false"
            >
              <CloseButton />
            </v-btn>
          </NuxtLink>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import LearnPlay from "~~/components/svg/LearnPlay";
import LearnTime from "~~/components/svg/LearnTime";
import ArrowRight from "~~/components/svg/ArrowRight";
import LearnTest from "~~/components/svg/LearnTest";
import CloseButton from "~~/components/svg/CloseButton";
import TestComplete from "~~/components/svg/TestComplete";
import RocketSvg from "~~/components/svg/RocketSvg";
import BuyDenied from "~~/components/svg/BuyDenied";

export default {
  components: {
    LearnPlay,
    LearnTime,
    ArrowRight,
    LearnTest,
    CloseButton,
    TestComplete,
    RocketSvg,
    BuyDenied
  },
  data () {
    return {
      dialogBuy: null,
      enableBuy: true,
      completeBuy: false
    }
  }
}
</script>
