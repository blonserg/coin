<template>
  <div>
    <header class="header d-flex align-center">
      <div class="d-block d-md-none">
        <LogoSvg />
      </div>
      <div class="header-avatar d-none d-md-flex align-center">
        <div class="header-avatar_image">
          <img src="/avatar.png" alt="" />
        </div>
        <div class="header-avatar_txt">
          <span>{{ userProfileFirstName }}</span>
          <span>{{ userProfileLastName }}</span>
          <span class="header-avatar_subtxt">ID: {{ authUserId }}</span>
        </div>
      </div>
      <div class="header-rate d-none d-md-flex align-center">
        <div class="header-rate_txt">Тариф:</div>
        <div
          :class="authUserCode!=='Basic' ? 'premium' : ''"
          class="header-tariph"
          @click="showTooltip = !showTooltip"
        >
          <span v-if="authUserCode">{{ authUserCode }}</span>
          <span v-else>Standart</span>
        </div>
        <v-alert
          v-model="showTooltip"
          class="header-tooltip"
          transition="scale-transition"
        >
          Обновите тариф до <span>PREMIUM</span><br> и получите кучу новых возможностей и классных дополнений уже сейчас
          <button class="article-link" type="button" @click="dialogTariffs = !dialogTariffs, showTooltip = !showTooltip">
            Обновить тариф
          </button>
        </v-alert>
        <v-dialog
          v-model="dialogTariffs"
        >
          <v-card class="dialog">
            <v-row>
              <v-col cols="12" md="4">
                <h2 class="dialog-tariffs_ttl">
                  Учні, студенти й викладачі можуть заощадити понад 33%.
                </h2>
                <div class="dialog-tariffs_txt">
                  Спеціальна ціна для першого року використання – див. умови.
                </div>
              </v-col>
              <v-col v-for="item in tariffs" :key="item.id" cols="12" md="4">
                <v-card class="dialog-tariffs">
                  <div class="dialog-tariffs_inner">
                    <div
                      class="header-tariph mb-6 d-inline-block"
                      :class="item.code"
                    >
                      {{ item.code }}
                    </div>
                    <h3>
                      {{ item.title }}
                    </h3>
                    <p>
                      {{ item.content }}
                    </p>
                  </div>
                  <div class="dialog-tariffs_bottom d-flex justify-space-between align-center">
                    <div>
                      <div class="dialog-tariffs_date">
                        {{ item.month }} {{ item.month_text }}
                      </div>
                      <div class="dialog-tariffs_price">
                        {{ item.price }} $
                      </div>
                    </div>
                    <button class="article-link" type="button" @click="postTransaction(item)">
                      Обновить тариф
                    </button>
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <v-card-actions>
              <v-btn
                color="primary"
                text
                @click="dialogTariffs = false"
              >
                <CloseButton />
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <div class="header-balance d-none d-md-flex align-center">
        <div class="header-balance_txt">Баланс:</div>
        <div class="header-balance_info">
          <span v-if="authUserSum">{{ authUserSum }}</span>
          <span v-else>0</span>
          баллов
        </div>
      </div>
      <div class="header-refs d-none d-md-flex align-center">
        <v-text-field ref="textToCopy" :value="authUserRef" outlined readonly />
        <button
          color="primary"
          class="header-refs_btn d-flex align-center justify-center"
          @click="copyText"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.27842 8.9769L3.46623 6.78548C3.36079 7.41914 3.36079 8.0264 3.54531 8.66007L2.30643 9.90099C1.19934 11.0099 1.19934 12.5677 2.33279 13.7294C3.43987 14.8383 5.02142 14.8383 6.1285 13.7294L9.23888 10.5875C10.346 9.47855 10.346 7.89439 9.23888 6.75908C8.81714 6.33663 8.31631 6.07261 7.84185 5.9934C7.86821 5.91419 8 5.75578 8.10544 5.65017L8.94893 4.80528C9.39704 4.9901 9.8715 5.28053 10.2932 5.70297C11.9802 7.39274 11.9802 9.79538 10.2932 11.4851L7.05107 14.7327C5.36409 16.4224 2.99177 16.4224 1.27842 14.7327C-0.408563 13.0429 -0.408563 10.6667 1.27842 8.9769ZM5.75948 10.2706C4.07249 8.58086 4.07249 6.17822 5.75948 4.51485L8.97529 1.26733C10.6623 -0.422442 13.0346 -0.422442 14.7216 1.26733C16.4086 2.9571 16.4086 5.35974 14.7216 7.0231L12.5601 9.24092C12.6656 8.60726 12.6656 7.9736 12.4811 7.36634L13.7199 6.15181C14.827 5.0165 14.827 3.43234 13.6936 2.29703C12.5865 1.18812 11.0049 1.18812 9.89786 2.29703L6.78748 5.41254C5.6804 6.52145 5.6804 8.10561 6.78748 9.21452C7.20923 9.63696 7.71005 9.90099 8.18452 9.9802C8.15816 10.0858 8.02636 10.2178 7.92093 10.3234L7.07743 11.1683C6.62933 11.0099 6.18122 10.6931 5.75948 10.2706Z"
              fill="#6A6B79"
            />
          </svg>
        </button>
        <v-tooltip
          v-model="show"
          attach=".header-refs"
          bottom
          nudge-bottom="24"
        >
          <span>Скопировано в буфер</span>
        </v-tooltip>
      </div>
      <div :class="alert ? '_close' : ''" class="header-notifcatns">
        <v-badge
          :class="!(userNotifications && Object.values(userNotifications).length) ? '_disabled' : ''"
          transition="scale-transition"
          class="header-notifcatns_btn"
          overlap
          :content="(userNotifications && userNotifications.filter((item) => item.read == 0).length) || `0`"
          color="#F75050"
        >
          <v-btn
            fab
            small
            @click="alert = !alert"
          >
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
            >
              <path
                d="M0 18.0026C0 16.8044 1.0614 15.8177 2.09868 14.8544C2.99123 14.0322 3.13597 12.3641 3.32895 10.5787C3.54605 6.70225 4.82456 4.00051 7.69518 3.03728C8.10526 1.58069 9.35965 0.5 11 0.5C12.6404 0.5 13.8947 1.58069 14.3289 3.06078C17.1996 4.024 18.4539 6.72574 18.6711 10.6021C18.864 12.3876 19.0088 14.0322 19.9013 14.8779C20.9145 15.8177 22 16.8279 22 18.026C22 18.9423 21.3004 19.5531 20.1908 19.5531H15.3662C15.2939 21.6205 13.557 23.5 11 23.5C8.41886 23.5 6.68202 21.597 6.63377 19.5531H1.80921C0.699561 19.5531 0 18.9423 0 18.0026ZM19.2741 17.5327V17.4152C18.9605 17.0628 18.3333 16.452 17.7544 15.8177C16.9342 14.8779 16.6206 13.0455 16.4759 10.9076C16.2829 6.8667 14.9803 5.36313 13.1711 4.89326C12.8816 4.82278 12.7127 4.68182 12.6886 4.3764C12.6162 3.27222 11.989 2.54392 11 2.54392C10.011 2.54392 9.38377 3.29571 9.3114 4.3764C9.28728 4.68182 9.11842 4.82278 8.82895 4.89326C7.04386 5.36313 5.71711 6.84321 5.52412 10.9076C5.35526 13.0455 5.08991 14.8779 4.24561 15.8177C3.66667 16.452 3.01535 17.0628 2.70175 17.4152V17.5327H19.2741ZM13.2675 19.5531H8.75658C8.82895 20.9157 9.74561 21.8085 11 21.8085C12.2785 21.785 13.1952 20.8922 13.2675 19.5531Z"
                fill="#6A6B79"
              />
            </svg>
          </v-btn>
        </v-badge>
        <v-btn
          class="header-notifcatns_alert"
          fab
          small
          transition="scale-transition"
          @click="alert = !alert"
        >
          <AlertClose />
        </v-btn>
      </div>
      <div class="header-alert_list">
        <div
          v-for="item in userNotifications"
          :key="item.id"
        >
          <v-alert
            v-if="item.read == 0"
            :value="alert"
            transition="scale-transition"
            class="header-alert_item"
          >
            <div class="d-flex justify-space-between">
              <div class="header-alert_ttl">
                {{ item.title }}
              </div>
              <div class="header-alert_date">
                {{ $moment(item.date).format("DD MMM YYYY") }}
              </div>
            </div>
            <div class="header-alert_txt">
              {{ item.description }}
            </div>
            <div class="header-alert_close" @click="postOpenedNotification(item)">
              <CloseButton />
            </div>
          </v-alert>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import LogoSvg from "~~/components/svg/LogoSvg";
import AlertClose from "~~/components/svg/AlertClose";
import HttpService from "~/services/HttpService";
import CloseButton from "~~/components/svg/CloseButton";
import Const from "~~/const/Const";

export default {
  components: {
    LogoSvg,
    AlertClose,
    CloseButton
  },
  data () {
    return {
      userNotifications: null,
      show: false,
      authUserInfo: null,
      authUserRef: null,
      alert: false,
      authUserId: null,
      authUserCode: null,
      authUserSum: null,
      showTooltip: false,
      dialogTariffs: false,
      userProfileFirstName: null,
      userProfileLastName: null,
      currencies: null,
      tariffs: null
    };
  },
  async fetch () {
    let response = await HttpService.get("/user-notifications");
    if (response.status === 200) {
      this.userNotifications = response.data;
    } else {
      // TODO do we need to inform user?
    }

    response = await HttpService.get("/auth-user-info");
    if (response.status === 200) {
      this.authUserInfo = response.data;
      this.authUserRef = Const.siteUrl + "/register?" + response.data.user.referral_link;
      this.authUserCode = response.data.tariff.code;
    } else {
      // TODO do we need to inform user?
    }

    response = await HttpService.get("/user-profile");
    if (response.status === 200) {
      this.userProfileFirstName = response.data.profile.first_name;
      this.userProfileLastName = response.data.profile.last_name;
      this.authUserId = response.data.profile.user_id;
      this.authUserSum = response.data.scores;
    } else {
      // TODO do we need to inform user?
    }

    response = await HttpService.get("/tariffs");
    if (response.status === 200) {
      this.tariffs = response.data;
    } else {
      let errorText;
      if (Array.isArray(response.errors)) {
        errorText = response.errors.join("; ")
      } else {
        errorText = "An error occurred"
      }
      this.alert = {
        text: errorText,
        active: true
      };
    }

    await this.getCurrencies();// TODO move from fetch to button
  },
  fetchOnServer: false,
  methods: {
    copyText () {
      const textToCopy = this.$refs.textToCopy.$el.querySelector("input");
      textToCopy.select();
      document.execCommand("copy");
      this.show = true;
      setTimeout(() => (this.show = false), 2000);
    },
    async getCurrencies () {
      const response = await HttpService.get("/currency");
      if (response.status === 200) {
        this.currencies = response.data.currencies;
      } else {
      // TODO do we need to inform user?
      }
    },
    async postTransaction (item) {
      const bodyObject = {
        "tariff_id": item.id,
        "user_id": this.authUserId
      }
      const response = await HttpService.post("/transaction", bodyObject);
      if (response.status === 200) {
        window.location.href = response.data.addr;
      } else {
        alert("An error occurred") // TODO how to inform user?
      }
    },
    async postOpenedNotification (item) {
      const notificationKey = "notifications[0]";
      const params = {};
      params[notificationKey] = item.id;
      const response = await HttpService.post("/user-notifications/id", undefined, params);
      if (response.status === 200) {
        item.read = 1;
        const index = this.userNotifications.findIndex(x => x.id === item.id);
        if (index !== -1) {
          this.userNotifications[index] = item;
        }
      } else {
      // TODO do we need to inform user?
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-badge__badge {
  background: #f75050;
}

.logo {
  width: 120px;
}
</style>
