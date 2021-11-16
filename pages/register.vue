<template>
  <v-card class="login">
    <LogoSvg />
    <div v-if="refer" class="login-refer">
      <div class="login-ttl">
        Регистрация<br> по приглашению от:
      </div>
      <div class="profile-avatar">
        <v-avatar
          color="primary"
          size="90"
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
    </div>
    <div v-else class="login-ttl">
      {{ staticData.registration_title }}
    </div>
    <v-text-field
      label="Email"
      solo
      height="40px"
    />
    <v-text-field
      :label="staticData.password"
      solo
      height="40px"
    />
    <v-text-field
      :label="staticData.repeat_password"
      solo
      height="40px"
    />
    <v-checkbox
      v-model="checkbox"
      :label="staticData.reg_remember_me"
    />
    <Button :text="staticData.registration_button" />
    <div class="login-bottom">
      <span>{{ staticData.reg_have_account }}</span>
      <NuxtLink to="/login">
        {{ staticData.reg_sign_in }}
      </NuxtLink>
    </div>
  </v-card>
</template>

<script>
import LogoSvg from "~~/components/svg/LogoSvg";
import Button from "~~/components/common/Button";
import StaticService from "~/api/StaticService";

export default {
  components: {
    LogoSvg,
    Button
  },
  layout: "signup",
  async asyncData () {
    const staticData = await StaticService.get("/registration")
    return { staticData }
  },
  data () {
    return {
      refer: true,
      staticData: []
    };
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
