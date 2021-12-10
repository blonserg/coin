<template>
  <v-card class="login">
    <v-dialog v-model="alert.active">
      <Alert
        :text="alert.text"
        @close="() => { alert.active = false; }"
      />
    </v-dialog>
    <LogoSvg />
    <div class="login-ttl">Укажите новый пароль</div>
    <v-form v-model="valid">
      <div class="login-password">
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
      </div>
      <div v-if="errorStatus">
        <v-alert dense outlined type="error">
          Неверный логин или пароль
        </v-alert>
      </div>
      <Button :text="`Подвердить`" @click.native="send" />
    </v-form>
    <div class="login-bottom text-center">
      <NuxtLink to="/login">
        Отмена действия
      </NuxtLink>
    </div>
  </v-card>
</template>

<script>
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
      staticData: [],
      valid: true,
      user: {
        password: "",
        password_confirmation: ""
      },
      recoveryKey: "",
      errorStatus: false,
      nameRules: [
        v => !!v || "Обязательное поле"
      ],
      emailRules: [
        v => !!v || "Обязательное поле",
        v => /.+@.+/.test(v) || "E-mail не правильное"
      ],
      recoveryEmail: "",
      alert: {
        text: "",
        active: false
      }
    };
  },
  async fetch () {
    this.staticData = await StaticService.get("/registration");
  },
  mounted () {
    this.recoveryKey = this.$route.params.recoveryKey;
    this.recoveryEmail = this.$route.query.email;
  },
  fetchOnServer: false,
  methods: {
    async send () {
      const errors = await UserService.recoveryPassword(this.recoveryEmail, this.recoveryKey, this.user.password, this.user.password_confirmation);
      if (!errors) {
        this.$router.push("/main");
      } else {
        this.alert = {
          text: errors.error_text,
          active: true
        };
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
