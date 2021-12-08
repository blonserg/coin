<template>
  <v-app class="landing-page">
    <v-main>
      <v-container>
        <HeaderLand />
        <Nuxt />
        <FooterLand />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HeaderLand from "~~/components/common/HeaderLand";
import FooterLand from "~~/components/common/FooterLand";

export default {
  components: {
    HeaderLand,
    FooterLand
  }
};
</script>

<style lang="scss" scoped>
  .v-main__wrap {
    @media screen and (max-width: 758px) {
      padding: 0 25px;
    }
  }
</style>
