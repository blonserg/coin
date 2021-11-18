<template>
  <v-app>
    <Sidebar />
    <v-main class="base">
      <v-container>
        <Header />
        <Nuxt class="main" />
        <Footer />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "~~/components/common/Sidebar";
import Header from "~~/components/common/Header";
import Footer from "~~/components/common/Footer";

export default {
  components: {
    Sidebar,
    Header,
    Footer
  }
};
</script>
