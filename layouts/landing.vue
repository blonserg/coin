<template>
  <v-app>
    <v-main>
      <v-container>
        <Header />
        <Nuxt />
        <Footer />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '~~/components/common/Header'
import Footer from '~~/components/common/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
