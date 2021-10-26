<template>
  <div class="landing">
    <v-row class="landing-block align-center">
      <v-col md="7">
        <div class="landing-ttl">
          <LandTtl />
        </div>
        <div class="landing-txt mb-10">
          Хочешь выжать максимум из инвестиций? Мы расскажем как это сделать и поделимся своим опытом!
        </div>
        <div class="d-flex align-center">
          <Button :text="`Начать сейчас`" />
        </div>
      </v-col>
      <v-col md="5">
        <img src="/man-rocket.png" alt="">
      </v-col>
    </v-row>
    <v-lazy
      :options="{
        threshold: 1.0
      }"
      transition="scroll-y-transition"
    >
      <div class="landing-subtxt">
        О команде
      </div>
    </v-lazy>
    <v-lazy
      :options="{
        threshold: 1.0
      }"
      min-height="200"
      transition="scroll-y-transition"
    >
      <v-row class="landing-block">
        <v-col md="4" class="landing-ttl">
          Lorem ipsum dolor sit amet
        </v-col>
        <v-col md="8" class="landing-txt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-col>
      </v-row>
    </v-lazy>
    <div class="landing-block_system text-center">
      <div class="landing-subtxt">
        Про систему
      </div>
      <div class="landing-ttl">
        Мы разработали <span>уникальную</span> систему,<br> аналогов которой еще нет
      </div>
      <div class="landing-txt">
        Стать ее частью и прокачай себя и<br> свою команду на максимум!
      </div>
    </div>
    <v-row class="landing-block_system">
      <v-col md="7">
        <img src="/learn.png" alt="">
      </v-col>
      <v-col md="5" class="pr-14">
        <LandSmile />
        <div class="landing-block_ttl">
          Обучение
        </div>
        <div class="landing-block_txt">
          На нашей платформе будут выступать ведущие спикеры из самых разных сфер жизни, поэтому каждый желающий найдет что-то для себя
        </div>
      </v-col>
    </v-row>
    <v-row class="landing-block_system">
      <v-col md="5" class="pl-14">
        <LandSmile />
        <div class="landing-block_ttl">
          Стратегии
        </div>
        <div class="landing-block_txt">
          Неважно, с какой суммы Вы желаете начать свой путь инвестора, мы поможем подобрать оптимальную стратегию исходя из Ваших желаний и возможностей
        </div>
      </v-col>
      <v-col md="7">
        <img src="/strategy.png" alt="">
      </v-col>
    </v-row>
    <v-row class="landing-block_system">
      <v-col md="7">
        <img src="/stock.png" alt="">
      </v-col>
      <v-col md="5" class="pr-14">
        <LandSmile />
        <div class="landing-block_ttl">
          Биржа услуг
        </div>
        <div class="landing-block_txt">
          Наши первоклассные специалисты с удовольствием окажут содействие в решении Ваших потребностей
        </div>
      </v-col>
    </v-row>
    <v-row class="landing-block_system">
      <v-col md="5" class="pl-14">
        <LandSmile />
        <div class="landing-block_ttl">
          Нетворк
        </div>
        <div class="landing-block_txt">
          StrikeTeam это большая и дружная команда, с которой можно не только работать, но и отлично проводить время. Вливайся!
        </div>
      </v-col>
      <v-col md="7">
        <img src="/strategy.png" alt="">
      </v-col>
    </v-row>
    <div class="landing-ascent">
      <div class="landing-ascent_ttl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
      </div>
      <div class="d-flex align-center justify-center">
        <Button :text="`Начать сейчас`" />
      </div>
    </div>
    <v-row transition="scroll-y-transition">
      <v-col md="6">
        <div class="landing-subtxt">
          Статистика
        </div>
        <div class="landing-ttl">
          Excepteur sint occaecat officia
        </div>
        <div class="landing-txt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </v-col>
      <v-col md="6">
        <div class="landing-table">
          <div class="main-table">
            <div class="main-table_head d-flex flex-column flex-md-row justify-space-between">
              <div class="main-table_people">
                <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 15.2518C0 12.7553 2.46729 9.80496 6.4486 9.80496C8.13084 9.80496 9.42056 10.3156 10.4299 11.0532C8.52337 12.5851 7.51402 15.3085 8.41121 16.5H1.45794C0.448598 16.5 0 16.0461 0 15.2518ZM3.42056 5.03901C3.42056 3.16667 4.82243 1.69149 6.50467 1.69149C8.18692 1.69149 9.53271 3.16667 9.53271 5.03901C9.53271 6.96809 8.13084 8.44326 6.50467 8.44326C4.87851 8.44326 3.42056 6.96809 3.42056 5.03901ZM9.19626 15.3085C9.19626 12.9823 12.0561 9.8617 16.5981 9.8617C21.1402 9.8617 24 13.039 24 15.3085C24 16.1028 23.4953 16.4433 22.2617 16.4433H10.9907C9.70094 16.5 9.19626 16.1028 9.19626 15.3085ZM13.1215 4.35816C13.1215 2.20213 14.7477 0.5 16.6542 0.5C18.5607 0.5 20.1869 2.14539 20.1869 4.30142C20.1869 6.51418 18.5607 8.21631 16.6542 8.21631C14.7477 8.27305 13.1215 6.57092 13.1215 4.35816Z" fill="#6A6B79" />
                </svg>
                36 459
              </div>
              <v-btn-toggle
                v-model="text"
                tile
                group
              >
                <v-btn value="day">
                  Сутки
                </v-btn>

                <v-btn value="week">
                  Неделя
                </v-btn>

                <v-btn value="month">
                  Месяц
                </v-btn>

                <v-btn value="all">
                  ВСе время
                </v-btn>
              </v-btn-toggle>
            </div>
            <div class="main-body">
              <v-simple-table>
                <template #default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
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
            <p class="main-info">
              Время и границы суток определены в GMT (MSK −3:00)
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
    <div class="landing-review">
      <div class="landing-subtxt">
        О нас гворят
      </div>
      <div class="landing-ttl">
        What <span>motivates</span> users to use<br> Strike strategies to <span>earn</span><br> and <span>discover</span> new opportunities
      </div>
      <Button :text="`Смотерть видео отзывы`" />
      <div class="landing-review_item">
        <div class="landing-review_txt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div class="landing-review_name">
          Дмитрий Портнягин
        </div>
        <div class="landing-review_img">
          <img src="/review-1.png" alt="">
        </div>
      </div>
    </div>
    <div class="landing-ascent">
      <div class="landing-ascent_ttl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
      </div>
      <div class="d-flex align-center">
        <Button :text="`Начать сейчас`" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~~/components/common/Button'
import LandTtl from '~~/components/svg/LandTtl'
import LandSmile from '~~/components/svg/LandSmile'

export default {
  components: {
    Button,
    LandTtl,
    LandSmile
  },
  layout: 'landing',
  data () {
    return {
      text: 'all',
      isActive: false,
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159
        },
        {
          name: 'Ice cream sandwich',
          calories: 237
        },
        {
          name: 'Eclair',
          calories: 262
        },
        {
          name: 'Cupcake',
          calories: 305
        },
        {
          name: 'Gingerbread',
          calories: 356
        },
        {
          name: 'Jelly bean',
          calories: 375
        },
        {
          name: 'Lollipop',
          calories: 392
        },
        {
          name: 'Honeycomb',
          calories: 408
        },
        {
          name: 'Donut',
          calories: 452
        },
        {
          name: 'KitKat',
          calories: 518
        }
      ]
    }
  }
}
</script>
