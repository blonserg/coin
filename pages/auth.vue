<template>
  <v-card class="login">
    <LogoSvg />
    <div class="login-ttl">
      {{ staticData.two_factor_sent_code }}
    </div>
    <v-form class="login-auth">
      <v-row>
        <v-col cols="3">
          <input inputmode="numeric" minlength="1" maxlength="1" size="8">
        </v-col>
      </v-row>
    </v-form>
    <Button :text="staticData.two_factor_continue_button" />
    {{ staticData }}
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
      staticData: []
    };
  },
  async fetch () {
    this.staticData = await StaticService.get("/two_factor");
  },
  fetchOnServer: false,
  mounted () {
    const token = window.localStorage.getItem("userToken");
    if (!token) {
      this.$router.push("login");
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
