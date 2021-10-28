<template>
  <v-app>
    <v-main>
      <v-container>
        <HeaderLand />
        <Nuxt />
        <Footer />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HeaderLand from '~~/components/common/HeaderLand'
import Footer from '~~/components/common/Footer'

export default {
  components: {
    HeaderLand,
    Footer
  }
}
</script>
