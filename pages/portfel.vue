<template>
  <div class="article-invest">
    <NuxtLink class="link d-block mb-6" to="/invests">
      <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.2 5.0248C0.05 4.8748 0 4.7248 0 4.5248C0 4.3248 0.05 4.1748 0.2 4.0248L3.9 0.374805C4.05 0.224805 4.2 0.174805 4.35 0.174805C4.75 0.174805 5 0.474805 5 0.824805C5 0.974805 4.95 1.1748 4.8 1.2748L1.55 4.5248L4.8 7.7248C4.95 7.8748 5 8.0248 5 8.1748C5 8.52481 4.7 8.8248 4.35 8.8248C4.15 8.8248 4 8.7748 3.9 8.6248L0.2 5.0248Z" fill="#2D7BF6" />
      </svg>
      {{ staticData.project_list_title }}
    </NuxtLink>
    <div class="article-invest_img mb-12">
      <img src="/invest.png" alt="">
    </div>
    <div class="article-head d-flex align-center mb-16">
      <div class="article-head_img">
        <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="84" height="84" rx="17" fill="#FAF8F6" />
          <path d="M17 41.9012C17 28.2648 28.3095 17 42 17C55.6905 17 67 28.2648 67 41.9012C67 55.5376 55.6905 66.8024 42 66.8024C28.3095 66.8024 17 55.5376 17 41.9012ZM62.0397 41.9012C62.0397 30.834 53.1111 21.9407 42 21.9407C30.8889 21.9407 21.9603 30.834 21.9603 41.9012C21.9603 52.9684 30.8889 61.8617 42 61.8617C53.1111 61.8617 62.0397 52.9684 62.0397 41.9012ZM39.619 50.3992V34.5889H34.2619C33.0714 34.5889 32.2778 33.7984 32.2778 32.6126C32.2778 31.4269 33.0714 30.6364 34.2619 30.6364H49.7381C50.9286 30.6364 51.7222 31.4269 51.7222 32.6126C51.7222 33.7984 50.9286 34.5889 49.7381 34.5889H44.381V50.2016C44.381 51.7826 43.5873 52.9684 42 52.9684C40.4127 52.9684 39.619 51.9802 39.619 50.3992Z" fill="#010101" />
        </svg>
      </div>
      <div class="d-flex align-center justify-space-between" style="width: 100%;">
        <div>
          <div class="article-name article-name--invest">
            Torexo
          </div>
        </div>
        <Button :text="staticData.project_reg_button" />
      </div>
    </div>
    <div>
      <div class="article-invest_ttl">
        {{ staticData.project_information }}
      </div>
      <v-divider class="mb-12" />
      <v-row>
        <v-col md="8">
          <div class="article-invest_txt">
            Идентифицируйте аккаунт, пополните его и совершите 1 операцию (все в течение 30 дней) и получите бонус $50. Вывод бонуса возможен после совершения операций объемом не менее $500 000
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="4">
          <div class="article-invest_ttl">
            {{ staticData.project_traded_instruments }}
          </div>
          <div class="article-invest_txt">
            Валюты   CFD
          </div>
          <div class="article-invest_ttl">
            {{ staticData.project_investments_from }}
          </div>
          <div class="article-invest_txt">
            $50
          </div>
          <div class="article-invest_ttl">
            {{ staticData.project_profit_a_year }}
          </div>
          <div class="article-invest_txt">
            25-30%
          </div>
          <div class="article-invest_ttl">
            {{ staticData.project_deadlines }}
          </div>
          <div class="article-invest_txt">
            3 месяца
          </div>
          <div class="article-invest_ttl">
            {{ staticData.project_start }}
          </div>
          <div class="article-invest_txt">
            Август 2021
          </div>
        </v-col>
        <v-col md="4">
          <div class="article-invest_ttl">
            {{ staticData.project_about_project }}
          </div>
          <div class="article-invest_txt">
            {{ staticData.project_list_paragraph }}
          </div>
          <div class="article-invest_ttl">
            {{ staticData.project_benefits }}
          </div>
          <div class="article-invest_txt">
            <ul>
              <li>
                Быстрое исполнение ордеров;
              </li>
              <li>
                Высокие стандарты безопасности и конфиденциальности данных;
              </li>
              <li>
                Регулярные обновления и мгновенные ценовые алерты;
              </li>
              <li>
                Лучшие на рынке спреды:
              </li>
              <li>
                AAPL - 0.12
              </li>
              <li>
                BTCUSD - 34
              </li>
              <li>
                EURUSD - 0.00006
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Button from "~~/components/common/Button";
import StaticService from "~/services/StaticService";

export default {
  components: {
    Button
  },
  data () {
    return {
      staticData: []
    };
  },
  async fetch () {
    this.staticData = await StaticService.get("/project")
  }
};
</script>
