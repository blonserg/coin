<template>
  <div>
    <header class="header-land mt-5 mb-5 d-flex align-center flex-md-row justify-space-between">
      <div class="d-block">
        <NuxtLink to="/">
          <LogoSvg />
        </NuxtLink>
      </div>
      <div class="header-menu d-none d-md-block">
        <nuxt-link :to="{ path: '/',hash:'#system'}">О команде</nuxt-link>
        <nuxt-link :to="{ path: '/',hash:'#system'}">Про систему</nuxt-link>
        <nuxt-link :to="{ path: '/',hash:'#statistic'}">Статистика</nuxt-link>
        <nuxt-link :to="{ path: '/',hash:'#speak'}">О нас говорят</nuxt-link>
      </div>
      <NuxtLink v-if="userLogin" to="/login">
        <v-btn
          class="btn d-none d-md-flex"
          color="#2d7bf6"
          x-large
          height="48px"
        >
          {{ userName }}
          <RegisterSvg class="ml-2" />
        </v-btn>
      </NuxtLink>
      <NuxtLink v-else to="/login">
        <v-btn
          class="btn d-none d-md-flex"
          color="#2d7bf6"
          x-large
          height="48px"
        >
          Регистрация
          <RegisterSvg class="ml-2" />
        </v-btn>
      </NuxtLink>
      <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer" />
      <v-navigation-drawer
        v-model="drawer"
        hide-overlay
        fixed
        class="header-land-nav"
      >
        <div class="header-land-head mt-5 mb-5 d-flex d-md-block align-center justify-space-between">
          <LogoSvg />
          <span class="sidebar-menu_close d-md-none" @click.stop="drawer = !drawer">
            <CloseMob />
          </span>
        </div>
        <div class="header-menu">
          <nuxt-link :to="{ path: '/',hash:'#system'}">О команде</nuxt-link>
          <nuxt-link :to="{ path: '/',hash:'#system'}">Про систему</nuxt-link>
          <nuxt-link :to="{ path: '/',hash:'#statistic'}">Статистика</nuxt-link>
          <nuxt-link :to="{ path: '/',hash:'#speak'}">О нас говорят</nuxt-link>
        </div>
        <div class="d-flex justify-center">
          <NuxtLink to="/register">
            <v-btn
              class="btn d-md-flex"
              color="#2d7bf6"
              x-large
              height="48px"
            >
              Регистрация
              <RegisterSvg class="ml-2" />
            </v-btn>
          </NuxtLink>
        </div>
      </v-navigation-drawer>
    </header>
  </div>
</template>

<script>
import HttpService from "~/services/HttpService";
import LogoSvg from "~~/components/svg/LogoSvg";
import RegisterSvg from "~~/components/svg/RegisterSvg";
import CloseMob from "~~/components/svg/CloseMob";

export default {
  components: {
    LogoSvg,
    RegisterSvg,
    CloseMob
  },
  data () {
    return {
      drawer: null,
      userLogin: null,
      userName: null
    };
  },
  async fetch () {
    const response = await HttpService.get("/main-page");
    if (response.status === 200 && response.data.user) {
      this.userLogin = response.data.user.api_token;
      this.userName = response.data.user.name;
    } else {
      // TODO do we need to inform user?
    }
  },
  methods: {
    copyText () {
      const textToCopy = this.$refs.textToCopy.$el.querySelector("input");
      textToCopy.select();
      document.execCommand("copy");
    }
  },
  fetchOnServer: false
};
</script>

<style lang="scss" scoped>
.v-badge__badge {
  background: #f75050;
}

.logo {
  width: 145px;
}

.btn {
  color: white;
  font-size: 14px;
  text-transform: none;
  border-radius: 6px;
  padding: 15px 20px;
  letter-spacing: 0;
  display: flex;
  align-items: center;
}

a {
  text-decoration: none;
}

.header-land-nav {
  @media screen and (max-width: 758px) {
    width: 100% !important;
    padding: 0 25px;
    background: #131418 !important;
  }

  @media screen and (min-width: 758px) {
    transform: translateX(-100%) !important;
  }
}

.header-menu {
  @media screen and (max-width: 758px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  a {
    @media screen and (max-width: 758px) {
      margin-bottom: 20px;
    }
  }
}
</style>
