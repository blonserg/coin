<template>
  <v-card class="login">
    <LogoSvg />
    <div class="login-ttl">Укажите новый пароль</div>
    <v-form v-model="valid">
      <div class="login-password">
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
      </div>
      <div v-if="errorStatus">
        <v-alert dense outlined type="error">
          Неверный логин или пароль
        </v-alert>
      </div>
      <Button :text="`Подвердить`" />
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
      errorStatus: false,
      nameRules: [
        v => !!v || "Обязательное поле"
      ],
      emailRules: [
        v => !!v || "Обязательное поле",
        v => /.+@.+/.test(v) || "E-mail не правильное"
      ]
    };
  },
  async fetch () {
    this.staticData = await StaticService.get("/registration");
  },
  fetchOnServer: false,
  methods: {}
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
