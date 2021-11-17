<template>
  <v-card class="login">
    <LogoSvg />
    <div class="login-ttl">
      Зайдите в ваш аккаунт
    </div>
    <v-text-field
      label="Email"
      solo
      height="40px"
    />
    <div class="login-password">
      <v-text-field
        label="Password"
        solo
        height="40px"
      />
      <a href="" class="login-password_btn">Забыли пароль?</a>
    </div>
    <v-checkbox
      v-model="checkbox"
      :label="`Запомнить выбор`"
    />
    <Button :text="`Войти`" />
    <div class="login-bottom">
      <span>Нет аккаунта?</span>
      <NuxtLink to="/register">
        Зарегестрирйутесь
      </NuxtLink>
      {{ staticData }}
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
  async asyncData () {
    const staticData = await StaticService.get("/signin")
    return { staticData }
  },
  data () {
    return {
      staticData: []
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
