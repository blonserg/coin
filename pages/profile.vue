<template>
  <div>
    <v-row v-if="$fetchState.pending">
      <v-col md="4">
        Loading...
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col md="4">
        <v-card class="profile-info">
          <div class="profile-avatar">
            <v-avatar
              color="primary"
              size="120"
            >
              <span class="profile-avatar_txt">
                ВБ
              </span>
            </v-avatar>
          </div>
          <div class="profile-name">
            Владислав Борин
            <span class="profile-name_nick">
              @usernameplace
            </span>
          </div>
          <v-divider />
          <div class="profile-tariph">
            <div class="profile-tariph_txt">
              Тариф:
            </div>
            <div class="header-tariph premium">
              PREMIUM
            </div>
          </div>
          <div class="profile-tariph_date">
            до 24.09.2022
          </div>
          <a href="" class="article-link">
            Продлить тариф
          </a>
          <v-divider class="mt-15" />
          <div class="profile-referal">
            <div class="profile-referal_ttl">
              {{ staticData.my_profile_ref_link }}
            </div>
            <div class="header-refs d-flex align-center">
              <v-text-field ref="textToCopy" outlined readonly />
              <button color="primary" class="header-refs_btn d-flex align-center justify-center" @click="copyText">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.27842 8.9769L3.46623 6.78548C3.36079 7.41914 3.36079 8.0264 3.54531 8.66007L2.30643 9.90099C1.19934 11.0099 1.19934 12.5677 2.33279 13.7294C3.43987 14.8383 5.02142 14.8383 6.1285 13.7294L9.23888 10.5875C10.346 9.47855 10.346 7.89439 9.23888 6.75908C8.81714 6.33663 8.31631 6.07261 7.84185 5.9934C7.86821 5.91419 8 5.75578 8.10544 5.65017L8.94893 4.80528C9.39704 4.9901 9.8715 5.28053 10.2932 5.70297C11.9802 7.39274 11.9802 9.79538 10.2932 11.4851L7.05107 14.7327C5.36409 16.4224 2.99177 16.4224 1.27842 14.7327C-0.408563 13.0429 -0.408563 10.6667 1.27842 8.9769ZM5.75948 10.2706C4.07249 8.58086 4.07249 6.17822 5.75948 4.51485L8.97529 1.26733C10.6623 -0.422442 13.0346 -0.422442 14.7216 1.26733C16.4086 2.9571 16.4086 5.35974 14.7216 7.0231L12.5601 9.24092C12.6656 8.60726 12.6656 7.9736 12.4811 7.36634L13.7199 6.15181C14.827 5.0165 14.827 3.43234 13.6936 2.29703C12.5865 1.18812 11.0049 1.18812 9.89786 2.29703L6.78748 5.41254C5.6804 6.52145 5.6804 8.10561 6.78748 9.21452C7.20923 9.63696 7.71005 9.90099 8.18452 9.9802C8.15816 10.0858 8.02636 10.2178 7.92093 10.3234L7.07743 11.1683C6.62933 11.0099 6.18122 10.6931 5.75948 10.2706Z" fill="#6A6B79" />
                </svg>
              </button>
            </div>
            <div class="profile-referal_txt">
              {{ staticData.my_profile_desc }}
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <v-btn
              class="btn btn--logout"
              color="#2d7bf6"
              x-large
              height="48px"
              @click.native="logoutUser"
            >
              Log out
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col class="profile-form" md="8">
        <div class="profile-ttl">
          {{ staticData.my_profile_main_info }}
        </div>
        <v-row>
          <v-col md="6" class="mb-10">
            <span class="label">{{ staticData.my_profile_name }}</span>
            <v-text-field
              v-model="userProfile.profile.first_name"
              label="Solo"
              solo
            />
          </v-col>
          <v-col md="6" class="mb-10">
            <span class="label">{{ staticData.my_profile_last_name }}</span>
            <v-text-field
              v-model="userProfile.profile.last_name"
              label="Solo"
              solo
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" class="mb-10">
            <span class="label">{{ staticData.my_profile_telegram }}</span>
            <v-text-field
              v-model="userProfile.profile.telegram"
              label="Solo"
              solo
            />
          </v-col>
          <v-col md="6" class="mb-10">
            <span class="label">{{ staticData.my_profile_instagram }}</span>
            <v-text-field
              v-model="userProfile.profile.instagram"
              label="Solo"
              solo
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" class="mb-15">
            <span class="label">{{ staticData.my_profile_country }}</span>
            <v-select
              v-model="userProfile.profile.country"
              :items="countries"
              label="Country"
              solo
            />
          </v-col>
          <v-col md="6" class="mb-15">
            <span class="label">{{ staticData.my_profile_city }}</span>
            <v-select
              v-model="userProfile.profile.city"
              :items="cities"
              label="City"
              solo
            />
          </v-col>
        </v-row>
        <div class="profile-ttl">
          {{ staticData.my_profile_ref_project_links }}
        </div>
        <div class="profile-refitem d-flex align-center justify-space-between">
          <div class="d-flex align-center">
            <div class="profile-refitem_img">
              <svg width="50" height="50" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="84" height="84" rx="17" fill="#FAF8F6" />
                <path d="M17 41.9012C17 28.2648 28.3095 17 42 17C55.6905 17 67 28.2648 67 41.9012C67 55.5376 55.6905 66.8024 42 66.8024C28.3095 66.8024 17 55.5376 17 41.9012ZM62.0397 41.9012C62.0397 30.834 53.1111 21.9407 42 21.9407C30.8889 21.9407 21.9603 30.834 21.9603 41.9012C21.9603 52.9684 30.8889 61.8617 42 61.8617C53.1111 61.8617 62.0397 52.9684 62.0397 41.9012ZM39.619 50.3992V34.5889H34.2619C33.0714 34.5889 32.2778 33.7984 32.2778 32.6126C32.2778 31.4269 33.0714 30.6364 34.2619 30.6364H49.7381C50.9286 30.6364 51.7222 31.4269 51.7222 32.6126C51.7222 33.7984 50.9286 34.5889 49.7381 34.5889H44.381V50.2016C44.381 51.7826 43.5873 52.9684 42 52.9684C40.4127 52.9684 39.619 51.9802 39.619 50.3992Z" fill="#010101" />
              </svg>
            </div>
            <div class="profile-refitem_name">
              Torexo Project
            </div>
          </div>
          <div class="header-refs d-flex align-center">
            <v-text-field ref="textToCopy" outlined readonly />
            <button color="primary" class="header-refs_btn d-flex align-center justify-center" @click="copyText">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.27842 8.9769L3.46623 6.78548C3.36079 7.41914 3.36079 8.0264 3.54531 8.66007L2.30643 9.90099C1.19934 11.0099 1.19934 12.5677 2.33279 13.7294C3.43987 14.8383 5.02142 14.8383 6.1285 13.7294L9.23888 10.5875C10.346 9.47855 10.346 7.89439 9.23888 6.75908C8.81714 6.33663 8.31631 6.07261 7.84185 5.9934C7.86821 5.91419 8 5.75578 8.10544 5.65017L8.94893 4.80528C9.39704 4.9901 9.8715 5.28053 10.2932 5.70297C11.9802 7.39274 11.9802 9.79538 10.2932 11.4851L7.05107 14.7327C5.36409 16.4224 2.99177 16.4224 1.27842 14.7327C-0.408563 13.0429 -0.408563 10.6667 1.27842 8.9769ZM5.75948 10.2706C4.07249 8.58086 4.07249 6.17822 5.75948 4.51485L8.97529 1.26733C10.6623 -0.422442 13.0346 -0.422442 14.7216 1.26733C16.4086 2.9571 16.4086 5.35974 14.7216 7.0231L12.5601 9.24092C12.6656 8.60726 12.6656 7.9736 12.4811 7.36634L13.7199 6.15181C14.827 5.0165 14.827 3.43234 13.6936 2.29703C12.5865 1.18812 11.0049 1.18812 9.89786 2.29703L6.78748 5.41254C5.6804 6.52145 5.6804 8.10561 6.78748 9.21452C7.20923 9.63696 7.71005 9.90099 8.18452 9.9802C8.15816 10.0858 8.02636 10.2178 7.92093 10.3234L7.07743 11.1683C6.62933 11.0099 6.18122 10.6931 5.75948 10.2706Z" fill="#6A6B79" />
              </svg>
            </button>
          </div>
        </div>
        <v-btn
          class="btn d-none d-md-flex"
          color="#2d7bf6"
          x-large
          height="48px"
          @click.native="changeUserProfile"
        >
          Save
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import StaticService from "~/services/StaticService";
import UserService from "~/services/UserService";
import HttpService from "~/services/HttpService";

export default {
  data: () => ({
    cities: ["Sambir", "Lviv", "Kyiv"],
    countries: ["Ukraine", "France"],
    staticData: [],
    userProfile: null,
    tariffs: null,
    userChats: null,
    userSecuritySettings: null
  }),
  async fetch () {
    this.staticData = await StaticService.get("/my_profile")

    let response = await HttpService.get("/user-profile");
    if (response.status === 200) {
      this.userProfile = response.data;
    } else {
      // TODO
    }

    response = await HttpService.get("/tariffs");
    if (response.status === 200) {
      this.tariffs = response.data;
    } else {
      // TODO
    }

    response = await HttpService.get("/user-chats");
    if (response.status === 200) {
      this.userChats = response.data;
    } else {
      // TODO
    }

    response = await HttpService.get("/user-security-settings");
    if (response.status === 200) {
      this.userSecuritySettings = response.data;
    } else {
      // TODO
    }
  },
  fetchOnServer: false,
  methods: {
    async logoutUser () {
      const errors = await UserService.logout();
      if (!errors) {
        this.$router.push("landing");
      } else {
        // TODO: process errors
      }
    },
    async changeUserProfile () {
      const response = await HttpService.post("/user-profile", this.userProfile);
      if (response.status === 200) {
        this.userProfile = response.data.profile;
      } else {
      // TODO
      }
    },
    copyText () {
      // TODO
    }
  }
};
</script>

<style lang="scss" scoped>
.profile-info {
  .profile-avatar {
    .v-avatar {
      background: #18191f !important;
    }
  }
}

.btn--logout {
  border: 1px solid #313440;
  border-radius: 6px;
  background-color: #23262e;

  .v-btn__content {
    color: #808190;
  }
}
</style>
