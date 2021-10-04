<template>
  <v-card class="login">
    <LogoSvg />
    <div class="login-ttl">
      Зайдите в ваш аккаунт
    </div>
    <v-text-field
      label="Email"
      solo
    />
    <v-text-field
      label="Password"
      solo
    />
    <v-checkbox
      v-model="checkbox"
      :label="`Запомнить выбор`"
    />
    <Button :text="`Войти`" :block="block" />
    <div class="login-bottom">
      <span>Нет аккаунта?</span>
      <a href="">Зарегестрирйутесь</a>
    </div>
  </v-card>
</template>

<script>
import LogoSvg from '~~/components/svg/LogoSvg'
import Button from '~~/components/common/Button'

export default {
  components: {
    LogoSvg,
    Button
  },
  layout: 'signup'
}
</script>

<style lang="scss" scoped>
  .login.v-card {
    background: #18191f;
    border: 1px solid #1d1f26;
    border-radius: 15px;
    width: 344px;
    margin: 80px auto 0;
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
</style>
