<template>
  <v-card class="login">
    <v-dialog v-model="alert.active">
      <Alert
        :text="alert.text"
        @close="() => { alert.active = false; }"
      />
    </v-dialog>
    <LogoSvg />
    <div v-if="refferer.referer_id" class="login-refer">
      <div class="login-ttl">
        Регистрация<br> по приглашению от:
      </div>
      <div class="profile-avatar">
        <v-avatar
          color="primary"
          size="90"
        >
          <span class="profile-avatar_txt">
            <span v-if="refferer.firstName">{{ refferer.firstName.charAt(0) }}</span>
            <span v-if="refferer.lastName">{{ refferer.lastName.charAt(0) }}</span>
          </span>
        </v-avatar>
      </div>
      <div class="profile-name">
        {{ refferer.firstName }} {{ refferer.lastName }}
        <span v-if="refferer.telegram" class="profile-name_nick">
          {{ refferer.telegram }}
        </span>
      </div>
    </div>
    <div v-else class="login-ttl">
      {{ staticData.registration_title }}
    </div>
    <v-form v-model="valid">
      <v-text-field
        v-model="user.name"
        label="Name"
        solo
        height="40px"
        :rules="nameRules"
        required
      />
      <v-text-field
        v-model="user.email"
        label="Email"
        solo
        height="40px"
        :rules="emailRules"
        required
      />
      <v-text-field
        v-model="user.password"
        :label="staticData.password"
        solo
        height="40px"
        :rules="nameRules"
        required
        type="password"
      />
      <v-text-field
        v-model="user.password_confirmation"
        :label="staticData.repeat_password"
        solo
        height="40px"
        :rules="nameRules"
        required
        type="password"
      />
      <v-checkbox
        v-model="checkbox"
        :label="staticData.reg_remember_me"
      />
      <div v-if="valid">
        <Button :disabled="!valid" :text="staticData.registration_button" @click.native="registration" />
      </div>
      <div v-if="errorStatus">
        <v-alert
          dense
          outlined
          type="error"
        >
          {{ errorList }}
        </v-alert>
      </div>
    </v-form>
    <div class="login-bottom">
      <span class="mr-2">{{ staticData.reg_have_account }}</span>
      <NuxtLink to="/login">
        {{ staticData.reg_sign_in }}
      </NuxtLink>
    </div>
  </v-card>
</template>

<script>
import HttpService from "~/services/HttpService";
import LogoSvg from "~~/components/svg/LogoSvg";
import Button from "~~/components/common/Button";
import StaticService from "~/services/StaticService";
import UserService from "~/services/UserService";
import Alert from "~~/components/common/Alert";

export default {
  components: {
    LogoSvg,
    Button,
    Alert
  },
  layout: "signup",
  data () {
    return {
      valid: true,
      staticData: [],
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        ip: ""
      },
      checkbox: false,
      errorStatus: false,
      errorList: "",
      nameRules: [
        v => !!v || "Обязательное поле"
      ],
      emailRules: [
        v => !!v || "Обязательное поле",
        v => /.+@.+/.test(v) || "E-mail не правильное"
      ],
      refferer: { // TODO get from refferal link
        referer_id: null,
        link: "http://test",
        firstName: null,
        lastName: null,
        telegram: null
      },
      alert: {
        text: "",
        active: false
      }
    };
  },
  async fetch () {
    let response = await UserService.getMyIp();
    this.user.ip = response;
    let staticData;
    if (this.refferer.referer_id) {
      staticData = await StaticService.get("/ref_registration");
    } else {
      staticData = await StaticService.get("/registration")
    }
    this.staticData = staticData;

    if (this.$route.query.referer_id) {
      this.refferer.referer_id = this.$route.query.referer_id;
    }

    if (this.refferer.referer_id) {
      const params = {
        "referer_id": this.refferer.referer_id
      }
      response = await HttpService.get("/referer-data", params);
      if (response.status === 200) {
        this.refferer.firstName = response.data.profile.first_name;
        this.refferer.lastName = response.data.profile.last_name;
        this.refferer.telegram = response.data.profile.telegram;
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
        }
      }
    }
  },
  fetchOnServer: false,
  mounted () {
    const token = window.localStorage.getItem("userToken");
    if (token) {
      this.$router.push("main");
    }
  },
  methods: {
    async registration () {
      const registrationUserData = {
        ...this.user
      };
      if (this.refferer.referer_id) {
        registrationUserData.referer_id = this.refferer.referer_id
      }
      const registrationResponse = await UserService.registration(registrationUserData);
      if (registrationResponse.status === 200) {
        if (this.refferer.referer_id) {
          const params = {
            "user_id": registrationResponse.data.user.user_id,
            "referral_id": this.refferer.referer_id,
            "link": this.refferer.link
          }
          const response = await HttpService.post("/register/test", undefined, params);
          if (response.status === 200) {
            // TODO do not inform user?
          } else {
            // TODO do not inform user?
          }
        }
        this.$router.push("main");
      } else {
        this.errorStatus = true
        this.errorList = registrationResponse.errors.error_text;
      }
    },
    async getRefferData () {
      const params = {
        "referer_id ": this.refferer.referer_id
      }
      response = await HttpService.get("/referer-data", undefined, params);
      if (response.status === 200) {
        this.refferer.firstName = response.data.profile.first_name;
        this.refferer.lastName = response.data.profile.last_name;
        this.refferer.telegram = response.data.profile.telegram;
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
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .login.v-card {
    background: #18191f;
    border: 1px solid #1d1f26;
    border-radius: 15px;
    width: 366px;
    margin: 80px auto 80px;
    padding: 30px;
  }

  .login-ttl {
    font-weight: 600;
    font-size: 24px;
    line-height: 31px;
    color: #e2e7f0;
    text-align: center;
    margin-bottom: 40px;
  }

  .theme--dark.v-application {
    background: #161617;
  }

  .btn {
    width: 100%;
  }

  .login-bottom {
    margin-top: 60px;
  }

  .v-alert {
    margin-top: 10px;
  }
</style>
