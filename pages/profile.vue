<template>
  <div>
    <div v-if="$fetchState.pending">
      <div class="loader d-flex justify-center align-center">
        <Loader />
      </div>
    </div>
    <v-row v-else>
      <v-dialog v-model="alert.active">
        <Alert
          :text="alert.text"
          @close="() => { alert.active = false; }"
        />
      </v-dialog>
      <v-col md="4">
        <v-card class="profile-info">
          <div class="profile-avatar">
            <v-avatar
              color="primary"
              size="120"
            >
              <span v-if="!url" class="profile-avatar_txt">
                <span v-if="userProfile.profile.first_name">{{ userProfile.profile.first_name.charAt(0) }}</span>
                <span v-if="userProfile.profile.last_name">{{ userProfile.profile.last_name.charAt(0) }}</span>
              </span>
              <img v-if="url && Object.values(url).length" :src="url" alt="">
              <div class="profile-avatar_edit">
                <v-file-input
                  v-if="!showEdit"
                  v-model="image"
                  hide-input
                  prepend-icon="mdi-pencil"
                  @change="preview_image"
                >
                </v-file-input>
                <div v-if="showEdit">
                  <v-btn
                    icon
                    @click="clearInput"
                  >
                    <v-icon>
                      mdi-close-thick
                    </v-icon>
                  </v-btn>
                </div>
              </div>
              <div class="profile-avatar_save">
                <v-btn
                  v-if="showEdit"
                  icon
                >
                  <v-icon>
                    mdi-content-save-outline
                  </v-icon>
                </v-btn>
              </div>
            </v-avatar>
          </div>
          <div class="profile-name">
            <span>{{ userProfile.profile.first_name }}</span>
            <span>{{ userProfile.profile.last_name }}</span>
            <span class="profile-name_nick">
              ID: {{ userProfile.profile.user_id }}
            </span>
          </div>
          <v-divider />
          <div v-if="userProfile.tariff.code" class="profile-tariph">
            <div class="profile-tariph_txt">
              {{ staticData.tariff }}:
            </div>
            <div class="header-tariph premium">
              {{ userProfile.tariff.code }}
            </div>
          </div>
          <div class="profile-tariph_date">
            <span v-if="userProfile.tariff.code">до {{ $moment(userProfile.tariff.end_date).format("DD MMM YYYY") }}</span>
          </div>
          <DialogTariffs />
          <v-divider class="mt-15" />
          <div class="profile-referal">
            <div class="profile-referal_ttl">
              {{ staticData.my_profile_ref_link }}
            </div>
            <div id="profileref" class="header-refs d-none d-md-flex align-center">
              <v-text-field ref="textToCopySidebar" :value="authUserRef" outlined readonly />
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
                attach="#profileref"
                bottom
                nudge-bottom="24"
              >
                <span>{{ staticData.copied }}</span>
              </v-tooltip>
            </div>
            <div class="profile-referal_txt">
              {{ staticData.my_profile_desc }}
            </div>
          </div>
          <v-dialog
            v-model="dialog"
          >
            <template #activator="{ on, attrs }">
              <div class="d-flex justify-center mt-16">
                <v-btn
                  v-bind="attrs"
                  class="btn btn--settings"
                  color="#2d7bf6"
                  x-large
                  height="48px"
                  v-on="on"
                >
                  {{ staticData.my_profile_account_settings }}
                  <LockSvg class="ml-2" />
                </v-btn>
              </div>
            </template>

            <v-card class="dialog">
              <v-card-text class="dialog-text">
                <div class="dialog-text-inner">
                  <h2 class="text-center">{{ staticDataAccountSettings.account_settings_title }}</h2>
                  <span class="label d-block">Email</span>
                  <v-text-field
                    :label="userProfile.profile.email"
                    solo
                    disabled
                  />
                  <v-btn
                    class="btn--change"
                    plain
                    @click="dialog1 = !dialog1"
                  >
                    {{ staticDataAccountSettings.account_settings_change }}
                  </v-btn>
                  <span class="label d-block">
                    {{ staticDataAccountSettings.account_settings_your_password }}
                  </span>
                  <v-text-field
                    solo
                    :value="123456"
                    type="password"
                    disabled
                  />
                  <v-btn
                    class="btn--change"
                    plain
                    @click="dialog2 = !dialog2"
                  >
                    {{ staticDataAccountSettings.account_settings_change }}
                  </v-btn>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
                >
                  <CloseButton />
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog
            v-model="dialog2"
          >
            <v-card class="dialog">
              <v-card-text class="dialog-text">
                <div class="dialog-text-inner">
                  <h2>{{ staticDataChangePassword.change_password_title }}</h2>
                  <span class="label">
                    {{ staticDataChangePassword.change_password_current_password }}
                  </span>
                  <v-text-field
                    v-model="oldPassword"
                    :label="staticDataChangePassword.change_password_enter_current_password"
                    type="password"
                    solo
                  />
                  <span class="label">
                    {{ staticDataChangePassword.change_password_new_password }}
                  </span>
                  <v-text-field
                    v-model="newPassword"
                    :label="staticDataChangePassword.change_password_enter_new_password"
                    type="password"
                    solo
                  />
                  <v-btn
                    class="btn--cancel"
                    plain
                    @click="dialog2 = false"
                  >
                    {{ staticDataChangePassword.change_password_cancel }}
                  </v-btn>
                  <v-btn
                    class="btn"
                    color="#2d7bf6"
                    height="48px"
                    x-large
                    @click.native="changeUserPassword"
                  >
                    {{ staticDataChangePassword.change_password_save }}
                  </v-btn>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  color="primary"
                  text
                  @click="dialog2 = false"
                >
                  <CloseButton />
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog
            v-model="dialog1"
          >
            <v-card class="dialog">
              <v-card-text class="dialog-text">
                <div class="dialog-text-inner">
                  <h2>{{ staticDataChangeEmail.change_email_title }}</h2>
                  <span class="label">
                    {{ staticDataChangeEmail.change_email_new_email }}
                  </span>
                  <v-text-field
                    v-model="newEmail"
                    :label="staticDataChangeEmail.change_email_enter_new_email"
                    solo
                  />
                  <span class="label">
                    {{ staticDataChangeEmail.change_email_password }}
                  </span>
                  <v-text-field
                    v-model="oldPassword"
                    :label="staticDataChangeEmail.change_email_enter_password"
                    type="password"
                    solo
                  />
                  <v-btn
                    class="btn--cancel"
                    plain
                    @click="dialog1 = false"
                  >
                    {{ staticDataChangeEmail.change_email_cancel }}
                  </v-btn>
                  <v-btn
                    class="btn"
                    color="#2d7bf6"
                    height="48px"
                    x-large
                    @click.native="changeUserEmail"
                  >
                    {{ staticDataChangeEmail.change_email_save }}
                  </v-btn>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  color="primary"
                  text
                  @click="dialog1 = false"
                >
                  <CloseButton />
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <div class="d-flex justify-center mt-8">
            <v-btn
              class="btn btn--logout"
              x-large
              height="48px"
              @click.native="logoutUser"
            >
              {{ staticData.my_profile_sign_out }}
              <LogoutSvg class="ml-2" />
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col class="profile-form" md="8">
        <div class="d-flex align-center mb-10">
          <div class="profile-ttl">
            {{ staticData.my_profile_main_info }}
          </div>
          <div class="profile-edit">
            <v-btn
              v-if="editUser"
              class="btn--edit"
              plain
              @click.native="editUserProfile"
            >
              {{ staticData.my_profile_edit }}
              <PencilSvg class="ml-2" />
            </v-btn>
            <v-btn
              v-else
              class="btn--edit"
              plain
              @click.native="changeUserProfile"
            >
              {{ staticData.save }}
              <PencilSvg class="ml-2" />
            </v-btn>
          </div>
        </div>
        <v-row>
          <v-col md="6" class="mb-2 mb-md-10">
            <span class="label">{{ staticData.my_profile_name }}</span>
            <v-text-field
              v-model="userProfile.profile.first_name"
              :label="userProfile.profile.first_name || `Не заполнено`"
              solo
              :disabled="editUser"
            />
          </v-col>
          <v-col md="6" class="mb-2 mb-md-10">
            <span class="label">{{ staticData.my_profile_last_name }}</span>
            <v-text-field
              v-model="userProfile.profile.last_name"
              :label="userProfile.profile.last_name || `Не заполнено`"
              solo
              :disabled="editUser"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" class="mb-2 mb-md-10">
            <span class="label">{{ staticData.my_profile_telegram }}</span>
            <v-text-field
              v-model="userProfile.profile.telegram"
              :label="userProfile.profile.telegram || `@`"
              solo
              :disabled="editUser"
            />
          </v-col>
          <v-col md="6" class="mb-2 mb-md-10">
            <span class="label">{{ staticData.my_profile_instagram }}</span>
            <v-text-field
              v-model="userProfile.profile.instagram"
              :label="userProfile.profile.instagram || `@`"
              solo
              :disabled="editUser"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" class="mb-15">
            <span class="label">{{ staticData.my_profile_country }}</span>
            <v-select
              v-model="selectedCountry"
              :items="countries"
              :label="userProfileCountry.title_ru"
              solo
              :disabled="editUser"
              @change="getCitiesByCountryId"
            >
              <template #item="{item}">
                {{ item.title_ru }}
              </template>
              <template #selection="{item}">
                {{ item.title_ru }}
              </template>
            </v-select>
          </v-col>
          <v-col md="6" class="mb-15">
            <span class="label">{{ staticData.my_profile_city }}</span>
            <v-select
              v-model="selectedCity"
              :items="cities"
              label="City"
              solo
              :disabled="editUser"
              no-data-text="No data available, wait and try again"
              @change="addCityToProfile"
            >
              <template #item="{item}">
                {{ item.title_ru }}
              </template>
              <template #selection="{item}">
                {{ item.title_ru }}
              </template>
            </v-select>
          </v-col>
        </v-row>
        <div class="d-flex align-center mb-10">
          <div class="profile-ttl">
            {{ staticData.my_profile_ref_project_links }}
          </div>
          <div class="profile-edit">
            <v-btn
              class="btn--edit"
              plain
              @click.native="editUserLink"
            >
              {{ staticData.my_profile_edit }}
              <PencilSvg class="ml-2" />
            </v-btn>
          </div>
        </div>
        <div v-for="item in userProfileProjects" :key="item.id" class="profile-refitem d-flex align-center justify-space-between">
          <div class="d-flex align-center">
            <div class="profile-refitem_img"></div>
            <div class="profile-refitem_name">
              {{ item.title }}
            </div>
          </div>
          <div class="header-refs header-refs--mycom d-flex">
            <v-form v-model="valid">
              <v-text-field
                v-model="item.link"
                :disabled="editLink"
                outlined
                :label="item.link || `https://`"
                solo
                :rules="linkRules"
              />
            </v-form>
            <button v-clipboard:copy="item.link" color="primary" class="header-refs_btn d-flex align-center justify-center" @click="showTooltip = item.id, showAlert()">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.27842 8.9769L3.46623 6.78548C3.36079 7.41914 3.36079 8.0264 3.54531 8.66007L2.30643 9.90099C1.19934 11.0099 1.19934 12.5677 2.33279 13.7294C3.43987 14.8383 5.02142 14.8383 6.1285 13.7294L9.23888 10.5875C10.346 9.47855 10.346 7.89439 9.23888 6.75908C8.81714 6.33663 8.31631 6.07261 7.84185 5.9934C7.86821 5.91419 8 5.75578 8.10544 5.65017L8.94893 4.80528C9.39704 4.9901 9.8715 5.28053 10.2932 5.70297C11.9802 7.39274 11.9802 9.79538 10.2932 11.4851L7.05107 14.7327C5.36409 16.4224 2.99177 16.4224 1.27842 14.7327C-0.408563 13.0429 -0.408563 10.6667 1.27842 8.9769ZM5.75948 10.2706C4.07249 8.58086 4.07249 6.17822 5.75948 4.51485L8.97529 1.26733C10.6623 -0.422442 13.0346 -0.422442 14.7216 1.26733C16.4086 2.9571 16.4086 5.35974 14.7216 7.0231L12.5601 9.24092C12.6656 8.60726 12.6656 7.9736 12.4811 7.36634L13.7199 6.15181C14.827 5.0165 14.827 3.43234 13.6936 2.29703C12.5865 1.18812 11.0049 1.18812 9.89786 2.29703L6.78748 5.41254C5.6804 6.52145 5.6804 8.10561 6.78748 9.21452C7.20923 9.63696 7.71005 9.90099 8.18452 9.9802C8.15816 10.0858 8.02636 10.2178 7.92093 10.3234L7.07743 11.1683C6.62933 11.0099 6.18122 10.6931 5.75948 10.2706Z" fill="#6A6B79" />
              </svg>
            </button>
            <v-alert
              v-show="showTooltip === item.id"
              class="profile-refitem_alert"
              transition="scale-transition"
            >
              <span>{{ staticData.copied }}</span>
            </v-alert>
          </div>
        </div>
        <div class="d-flex justify-center mt-7">
          <div v-if="valid">
            <button v-if="!editLink" :disabled="!valid" class="article-link" type="button" @click="postUserProjectLinks()">
              Сохранить
            </button>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-dialog
      v-model="dialogProfile"
      content-class="dialog-shrink"
      max-width="280"
    >
      <v-card class="dialog dialog--acess">
        <v-card-text>
          <div class="dialog-text-inner">
            <ChangeSvg class="mt-6 mb-7" />
            <p class="dialog-text_change">
              Новые настройки профиля успешно сохранены
            </p>
          </div>
          <button class="article-link mt-3" type="button" @click="dialogProfile = false">
            Продолжить
          </button>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="dialogProfile = false"
          >
            <CloseButton />
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import StaticService from "~/services/StaticService";
import UserService from "~/services/UserService";
import HttpService from "~/services/HttpService";
import LogoutSvg from "~~/components/svg/LogoutSvg";
import PencilSvg from "~~/components/svg/PencilSvg";
import ChangeSvg from "~~/components/svg/ChangeSvg";
import LockSvg from "~~/components/svg/LockSvg";
import CloseButton from "~~/components/svg/CloseButton";
import Alert from "~~/components/common/Alert";
import Const from "~~/const/Const";
import Loader from "~~/components/common/Loader.vue";
import DialogTariffs from "~~/components/DialogTariffs";

export default {
  components: {
    LogoutSvg,
    PencilSvg,
    LockSvg,
    CloseButton,
    Alert,
    Loader,
    ChangeSvg,
    DialogTariffs
  },
  data: () => ({
    cities: [],
    countries: null,
    selectedCountry: null,
    selectedCity: null,
    selectedCountryCode: "Pl", // TODO get from dropdown
    countryData: null, // TODO use
    selectedCountryName: "Poland", // TODO get from dropdown
    staticData: [],
    staticDataAccountSettings: [],
    staticDataChangeEmail: [],
    staticDataChangePassword: [],
    userProfile: null,
    userSecuritySettings: null,
    userProfileProjects: null,
    userProfileCountry: null,
    editUser: true,
    editLink: true,
    url: null,
    image: null,
    show: false,
    showTooltip: null,
    showEdit: false,
    authUserRef: null,
    oldPassword: null,
    newPassword: null,
    newEmail: null,
    dialog: false,
    dialog1: false,
    dialog2: false,
    dialogProfile: false,
    alert: {
      text: "",
      active: false
    },
    linkRules: [
      (v) => {
        if (v) {
          return /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(v) || "Ссылка должна быть в формате http://st.cubic.pw/test"
        } else {
          return true
        }
      }
    ],
    valid: false

  }),
  async fetch () {
    this.staticData = await StaticService.get("/my_profile");
    this.staticDataAccountSettings = await StaticService.get("/account_settings");
    this.staticDataChangeEmail = await StaticService.get("/change_email");
    this.staticDataChangePassword = await StaticService.get("/change_password");

    let response = await HttpService.get("/user-profile");
    if (response.status === 200) {
      this.userProfile = response.data;
      this.authUserRef = Const.siteUrl + "/register?" + response.data.profile.referral_link;
      this.userProfileProjects = response.data.projects_links;
      this.userProfileCountry = response.data.profile.country;
      // this.userProfileCountry = JSON.parse(this.userProfileCountry);
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

    response = await HttpService.get("/user-security-settings");
    if (response.status === 200) {
      this.userSecuritySettings = response.data;
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

    response = await HttpService.get("/countries");
    if (response.status === 200) {
      this.countries = response.data;
      if (!this.selectedCountry) {
        const index = this.countries.findIndex(x => x.id === Number(this.userProfile.profile.country));
        this.selectedCountry = this.countries[index];
      }
      if (!this.selectedCity) {
        await this.getCitiesByCountryId();
        index = this.cities.findIndex(x => x.id === Number(this.userProfile.profile.city));
        this.selectedCity = this.cities[index];
      }
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
  },
  fetchOnServer: false,
  mounted () {
    const token = window.localStorage.getItem("userToken");
    if (!token) {
      this.$router.push("login");
    }
  },
  methods: {
    async logoutUser () {
      const errors = await UserService.logout();
      if (!errors) {
        this.$router.push("/");
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
    },
    async changeUserProfile () {
      const response = await HttpService.post("/user-profile", this.userProfile.profile);
      if (response.status === 200) {
        this.userProfile = response.data;
        this.editUser = true;
        this.dialogProfile = true;
        // this.alert = {
        //   text: this.staticData.profile_changed,
        //   active: true
        // };
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
    },
    editUserProfile () {
      this.editUser = false
    },
    editUserLink () {
      this.editLink = false
    },
    copyText () {
      const textToCopySidebar = this.$refs.textToCopySidebar.$el.querySelector("input");
      textToCopySidebar.select();
      document.execCommand("copy");
      this.show = true;
      setTimeout(() => (this.show = false), 2000);
    },
    showAlert () {
      setTimeout(() => (this.showTooltip = null), 2000);
    },
    async changeUserPassword () {
      const errors = await UserService.changePassword(this.oldPassword, this.newPassword);
      if (!errors) {
        this.alert = {
          text: this.staticData.password_changed,
          active: true
        };
        this.oldPassword = this.newPassword;
        this.newPassword = null;
      } else {
        this.alert = {
          text: errors.error_text,
          active: true
        };
      }
    },
    async changeUserEmail () {
      const errors = await UserService.changeEmail(this.newEmail, this.oldPassword);
      if (!errors) {
        this.alert = {
          text: "Email is changed",
          active: true
        };
        this.userProfile.profile.email = this.newEmail;
      } else {
        this.alert = {
          text: errors.error_text,
          active: true
        };
      }
    },
    async getCountryByCode () {
      const params = {
        "code": this.selectedCountryCode
      }
      const response = await HttpService.get("/country", params);
      if (response.status === 200) {
        this.countryData = response.data; // TODO use
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
    },
    async getCountryByName () {
      const params = {
        "name": this.selectedCountryName
      }
      const response = await HttpService.get("/country-by-name", params);
      if (response.status === 200) {
        this.countryData = response.data; // TODO use
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
    },
    async getCitiesByCountryId () {
      this.cities = [];
      const params = {
        "country_id": this.selectedCountry.id
      }
      const response = await HttpService.get("/cities", params);
      if (response.status === 200) {
        this.cities = response.data;
        this.userProfile.profile.country = this.selectedCountry.id;
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
    },
    addCityToProfile () {
      this.userProfile.profile.city = this.selectedCity.id;
    },
    preview_image () {
      if (this.image !== 0) {
        this.url = URL.createObjectURL(this.image);
        this.showEdit = true;
      }
    },
    clearInput () {
      this.url = null;
      this.showEdit = false;
      this.image = 0;
    },
    async postUserProjectLinks () {
      const projects = this.userProfileProjects;
      const projectParams = {};
      Object.keys(projects).forEach((key) => {
        const projectParamsKey = "projects_links[" + projects[key].id + "]";
        projectParams[projectParamsKey] = projects[key].link;
      });
      const params = {
        ...this.userProfile.profile,
        ...projectParams
      };
      const response = await HttpService.post("/user-profile", undefined, params);
      if (response.status === 200) {
        this.userProfile = response.data;
        this.alert = {
          text: this.staticData.profile_changed,
          active: true
        };
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
.header-refs {
  position: relative;
}
</style>
