<template>
  <v-card class="login">
    <NuxtLink to="/">
      <LogoSvg />
    </NuxtLink>
    <div class="login-ttl">
      {{ staticData.sign_in }}
    </div>
    <v-form v-model="valid">
      <v-text-field
        v-model="user.email"
        label="Email"
        solo
        height="40px"
        :rules="nameRules"
        required
      />
      <div class="login-password">
        <v-text-field
          v-model="user.password"
          :label="staticData.sign_in_password"
          solo
          type="password"
          height="40px"
          :rules="nameRules"
          required
        />
        <!-- <NuxtLink to="/recovery">
          <span class="login-password_btn">{{ staticData.sign_in_forgot_password }}</span>
        </NuxtLink> -->
        <span class="login-password_btn" @click="forgotPassword">{{ staticData.sign_in_forgot_password }}</span>
      </div>
      <v-checkbox
        v-model="checkbox"
        :label="staticData.sign_in_remember_me"
      />
      <div v-if="errorStatus">
        <v-alert
          dense
          outlined
          type="error"
        >
          Неверный логин или пароль
        </v-alert>
      </div>
      <Button :text="staticData.sign_in_button" @click.native="login" />
    </v-form>
    <div class="login-bottom">
      <span class="mr-2">{{ staticData.sign_in_dont_have_account }}</span>
      <NuxtLink to="/register">
        {{ staticData.sign_in_register }}
      </NuxtLink>
    </div>
  </v-card>
</template>

<script>
import LogoSvg from "~~/components/svg/LogoSvg";
import Button from "~~/components/common/Button";
import StaticService from "~/services/StaticService";
import UserService from "~/services/UserService";
import HttpService from "~/services/HttpService";

export default {
  components: {
    LogoSvg,
    Button
  },
  layout: "signup",
  data () {
    return {
      staticData: [],
      valid: true,
      user: {
        email: "",
        password: ""
      },
      checkbox: false,
      errorStatus: false,
      errorList: "",
      nameRules: [
        v => !!v || "Обязательное поле"
      ],
      dialog: false
    }
  },
  async fetch () {
    this.staticData = await StaticService.get("/signin");
  },
  fetchOnServer: false,
  mounted () {
    const token = window.localStorage.getItem("userToken");
    if (token) {
      this.$router.push("main");
    }
  },
  methods: {
    async login () {
      const loginUserData = {
        ...this.user
      };
      const errors = await UserService.login(loginUserData);
      if (!errors) {
        this.$router.push("main");
      } else {
        // TODO: process errors
        this.errorStatus = true
        // this.errorList = errors.original.data.error_text;
      }
    },
    async forgotPassword () {
      const path = "/forgot-password?email=" + this.user.email;
      const response = await HttpService.post(path);
      if (response.status === 200) {
        // TODO inform user, that email was send
        alert("email was send");
      } else {
      // TODO
        alert(response.errors.error_text);
      }
    },
    async forgotPasswordReset () {
      const path = "/delete-reset-password?email=" + this.user.email;
      const response = await HttpService.post(path);
      if (response.status === 200) {
        // TODO inform user, that email was send
        this.forgotPassword();
      } else {
      // TODO
        alert(response.errors.error_text);
      }
    }
  }
};
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
    margin-bottom: 65px;
  }
</style>
