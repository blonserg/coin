<template>
  <div>
    <div class="ttl">
      Стратегии
    </div>
    <div class="subttl">
      С анализом данных появляются новые возможности. Мы поможем вам торговать и инвестировать, даже если вы только начинаете
    </div>
    <div class="strategy-wrap">
      <div class="strategy">
        <v-card transition="fade-transition" class="strategy-item  basic">
          <div class="strategy-ttl">
            Basic
          </div>
          <p class="strategy-txt">
            Инвестиция
          </p>
          <div class="strategy-count">
            $100-$500
          </div>
          <p class="strategy-txt">
            Самая высокая точность и максимальное количество данных
          </p>
          <div class="strategy-info">
            <div class="strategy-info_item d-flex justify-space-between">
              <span class="strategy-info_lt">
                Деверсификация
              </span>
              <span class="strategy-info_rt">
                1 проект
              </span>
            </div>
            <div class="strategy-info_item d-flex justify-space-between">
              <span class="strategy-info_lt">
                Доходность (год)
              </span>
              <span class="strategy-info_rt">
                ±150%
              </span>
            </div>
            <div class="strategy-info_item d-flex justify-space-between">
              <span class="strategy-info_lt">
                Риск
              </span>
              <span class="strategy-info_rt">
                Повышенный
              </span>
            </div>
          </div>
          <div class="strategy-btn">
            <a class="btn" href="">Смотреть стратегию</a>
          </div>
        </v-card>
        <v-card class="strategy-item individual">
          <div class="strategy-ttl">
            Individual
          </div>
          <p class="strategy-txt">
            Инвестиция
          </p>
          <div class="strategy-count">
            $500-$1000
          </div>
          <p class="strategy-txt">
            Внутридневной технический анализ для дневных трейдеров
          </p>
          <div class="strategy-info">
            <div class="strategy-info_item d-flex justify-space-between">
              <span class="strategy-info_lt">
                Деверсификация
              </span>
              <span class="strategy-info_rt">
                2 проекта
              </span>
            </div>
            <div class="strategy-info_item d-flex justify-space-between">
              <span class="strategy-info_lt">
                Доходность (год)
              </span>
              <span class="strategy-info_rt">
                ±200%
              </span>
            </div>
            <div class="strategy-info_item d-flex justify-space-between">
              <span class="strategy-info_lt">
                Риск
              </span>
              <span class="strategy-info_rt">
                Умеренный
              </span>
            </div>
          </div>
          <div class="strategy-btn">
            <a class="btn" href="">Смотреть стратегию</a>
          </div>
        </v-card>
        <v-card class="strategy-item professional">
          <div class="strategy-ttl">
            Professional
          </div>
          <p class="strategy-subttl">
            Инвестиция
          </p>
          <div class="strategy-count">
            $1000-$1500
          </div>
          <p class="strategy-txt">
            Ничто не будет отвлекать от трейдинга и инвестирования. Больше графиков
          </p>
          <div class="strategy-info">
            <div class="strategy-info_item d-flex justify-space-between">
              <span class="strategy-info_lt">
                Деверсификация
              </span>
              <span class="strategy-info_rt">
                3 проекта
              </span>
            </div>
            <div class="strategy-info_item d-flex justify-space-between">
              <span class="strategy-info_lt">
                Доходность (год)
              </span>
              <span class="strategy-info_rt">
                ±250%
              </span>
            </div>
            <div class="strategy-info_item d-flex justify-space-between">
              <span class="strategy-info_lt">
                Риск
              </span>
              <span class="strategy-info_rt">
                Пониженный
              </span>
            </div>
          </div>
          <div class="strategy-btn">
            <a class="btn" href="">Смотреть стратегию</a>
          </div>
        </v-card>
        <v-card class="strategy-item professional-more">
          <div class="strategy-ttl">
            Professional +
          </div>
          <p class="strategy-subttl">
            Инвестиция
          </p>
          <div class="strategy-count">
            $1500-$2000
          </div>
          <p class="strategy-txt">
            Ничто не будет отвлекать от трейдинга и инвестирования технический анализ
          </p>
          <div class="strategy-info">
            <div class="strategy-info_item d-flex justify-space-between">
              <span class="strategy-info_lt">
                Деверсификация
              </span>
              <span class="strategy-info_rt">
                4 проекта
              </span>
            </div>
            <div class="strategy-info_item d-flex justify-space-between">
              <span class="strategy-info_lt">
                Доходность (год)
              </span>
              <span class="strategy-info_rt">
                ±300%
              </span>
            </div>
            <div class="strategy-info_item d-flex justify-space-between">
              <span class="strategy-info_lt">
                Риск
              </span>
              <span class="strategy-info_rt">
                Минимальный
              </span>
            </div>
          </div>
          <div class="strategy-btn">
            <a class="btn" href="">Смотреть стратегию</a>
          </div>
        </v-card>
      </div>
    </div>
    <div class="ttl">
      Инвестиционный портфель
    </div>
    <div class="subttl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua.
    </div>
    <div class="strategy-invest">
      <v-row>
        <v-col v-for="(item, i) in invests" :key="i" md="4">
          <v-card transition="fade-transition" class="strategy-item_invest">
            <div class="strategy-head d-flex align-center">
              <div class="strategy-head_img">
                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="84" height="84" rx="17" fill="#FAF8F6" />
                  <path d="M17 41.9012C17 28.2648 28.3095 17 42 17C55.6905 17 67 28.2648 67 41.9012C67 55.5376 55.6905 66.8024 42 66.8024C28.3095 66.8024 17 55.5376 17 41.9012ZM62.0397 41.9012C62.0397 30.834 53.1111 21.9407 42 21.9407C30.8889 21.9407 21.9603 30.834 21.9603 41.9012C21.9603 52.9684 30.8889 61.8617 42 61.8617C53.1111 61.8617 62.0397 52.9684 62.0397 41.9012ZM39.619 50.3992V34.5889H34.2619C33.0714 34.5889 32.2778 33.7984 32.2778 32.6126C32.2778 31.4269 33.0714 30.6364 34.2619 30.6364H49.7381C50.9286 30.6364 51.7222 31.4269 51.7222 32.6126C51.7222 33.7984 50.9286 34.5889 49.7381 34.5889H44.381V50.2016C44.381 51.7826 43.5873 52.9684 42 52.9684C40.4127 52.9684 39.619 51.9802 39.619 50.3992Z" fill="#010101" />
                </svg>
              </div>
              <div class="strategy-head_rt">
                <div class="strategy-name">
                  {{ item.title }}
                </div>
                <a class="strategy-link" href="">
                  Смотреть проект
                </a>
              </div>
            </div>
            <p class="strategy-txt">
              Torexo - Это безупречный опыт торговли в один клик на более чем 3000 всемирно известных рынках, а также широкий выбор форекс пар и криптовалют.
            </p>
            <div class="strategy-info">
              <div class="strategy-info_item d-flex justify-space-between">
                <span class="strategy-info_lt">
                  Инвестиции от
                </span>
                <span class="strategy-info_rt">
                  $50
                </span>
              </div>
              <div class="strategy-info_item d-flex justify-space-between">
                <span class="strategy-info_lt">
                  Доходность (год)
                </span>
                <span class="strategy-info_rt">
                  25-30%
                </span>
              </div>
              <div class="strategy-info_item d-flex justify-space-between">
                <span class="strategy-info_lt">
                  Сроки (мес)
                </span>
                <span class="strategy-info_rt">
                  3
                </span>
              </div>
              <div class="strategy-info_item d-flex justify-space-between">
                <span class="strategy-info_lt">
                  Риск
                </span>
                <span class="strategy-info_rt">
                  Повышенный
                </span>
              </div>
            </div>
            <div class="strategy-bottom">
              <div class="strategy-bottom_info">
                <span>Участников:</span>
                <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 9.97586C0 8.45862 1.96296 6.37241 5 6.37241C8.03704 6.37241 10 8.45862 10 9.97586C10 10.6207 9.62963 11 8.51852 11H1.48148C0.37037 11 0 10.6207 0 9.97586ZM2.59259 2.65517C2.59259 1.21379 3.66667 0 5 0C6.33333 0 7.40741 1.21379 7.40741 2.65517C7.40741 4.17241 6.33333 5.34828 5 5.34828C3.66667 5.34828 2.59259 4.17241 2.59259 2.65517Z" fill="#808190" />
                </svg>
                <span>2340</span>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      invests: [
        {
          title: 'Torexo Project'
        },
        {
          title: 'Torexo Project'
        },
        {
          title: 'Torexo Project'
        },
        {
          title: 'Torexo Project'
        },
        {
          title: 'Torexo Project'
        },
        {
          title: 'Torexo Project'
        },
        {
          title: 'Torexo Project'
        },
        {
          ititle: 'Torexo Project'
        },
        {
          title: 'Torexo Project'
        },
        {
          title: 'Torexo Project'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v-application p {
  margin-bottom: 0;
}
</style>
