<template>
  <div>
    <NuxtLink class="link d-block mb-10" to="/learnlist">
      <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.2 5.0248C0.05 4.8748 0 4.7248 0 4.5248C0 4.3248 0.05 4.1748 0.2 4.0248L3.9 0.374805C4.05 0.224805 4.2 0.174805 4.35 0.174805C4.75 0.174805 5 0.474805 5 0.824805C5 0.974805 4.95 1.1748 4.8 1.2748L1.55 4.5248L4.8 7.7248C4.95 7.8748 5 8.0248 5 8.1748C5 8.52481 4.7 8.8248 4.35 8.8248C4.15 8.8248 4 8.7748 3.9 8.6248L0.2 5.0248Z" fill="#2D7BF6" />
      </svg>
      Обучение
    </NuxtLink>
    <v-row>
      <v-col md="8">
        <h1 class="article-main_ttl">
          Тест
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="subttl">
          Пройдите тест чтобы lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </div>
      </v-col>
    </v-row>
    <div class="learn-question">
      <div class="d-flex align-center mb-6">
        <div class="learn-question-number">
          1
        </div>
        <div class="learn-question-ttl">
          Назовите 3 главных правила инвестирования:
        </div>
      </div>
      <v-text-field label="Напишите ваш ответ..." single-line></v-text-field>
    </div>
    <div class="learn-question">
      <div class="d-flex align-center mb-6">
        <div class="learn-question-number">
          2
        </div>
        <div class="learn-question-ttl">
          Прикрепите ссылку на ваш сайт портфолио
        </div>
      </div>
      <v-text-field label="Вставьте ссылку..." single-line></v-text-field>
    </div>
    <div class="learn-question">
      <div class="d-flex align-center mb-10">
        <div class="learn-question-number">
          3
        </div>
        <div class="learn-question-ttl">
          Какое из предложений является правильным?
        </div>
      </div>
      <div class="learn-radio">
        <label
          v-for="n in 3"
          :key="n"
          class="learn-radio-item"
        >
          <input type="radio" name="group1" />
          <span>Lorem ipsum dolor sit amet</span>
        </label>
      </div>
    </div>
    <div class="learn-complete">
      <v-btn
        class="btn"
        color="#2d7bf6"
        height="48px"
        @click="dialogTest = true"
      >
        Завершить тест
      </v-btn>
    </div>
    <v-dialog
      v-model="dialogTest"
      max-width="400"
    >
      <v-card class="dialog dialog--test">
        <TestComplete class="mb-7" />
        <p class="mb-7">
          Тест завершен! Вы получите уведомление о результатах в течении 24 часов.
        </p>
        <NuxtLink to="/learn">
          <button class="article-link" type="button" @click="dialogTest = false">
            Смотреть курс
          </button>
        </NuxtLink>
        <div class="v-card__actions">
          <NuxtLink to="/learn">
            <v-btn
              color="primary"
              text
              @click="dialogTest = false"
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
import CloseButton from "~~/components/svg/CloseButton";
import TestComplete from "~~/components/svg/TestComplete";

export default {
  components: {
    CloseButton,
    TestComplete
  },
  data () {
    return {
      dialogTest: null
    }
  }
}
</script>
