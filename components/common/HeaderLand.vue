<template>
  <div>
    <header class="header-land d-flex align-center flex-md-row justify-space-between">
      <div class="d-block">
        <LogoSvg />
      </div>
      <div class="header-menu d-none d-md-block">
        <a href="">О команде</a>
        <a href="">О команде</a>
        <a href="">О команде</a>
        <a href="">О команде</a>
      </div>
      <NuxtLink to="/register">
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
    </header>
  </div>
</template>

<script>
import LogoSvg from "~~/components/svg/LogoSvg";
import RegisterSvg from "~~/components/svg/RegisterSvg";

export default {
  components: {
    LogoSvg,
    RegisterSvg
  },
  data () {
    return {
      value: "loremipsum"
    };
  },
  methods: {
    copyText () {
      const textToCopy = this.$refs.textToCopy.$el.querySelector("input");
      textToCopy.select();
      document.execCommand("copy");
    }
  }
};
</script>

<style lang="scss" scoped>
.v-badge__badge {
  background: #f75050;
}

.logo {
  width: 200px;
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
</style>
