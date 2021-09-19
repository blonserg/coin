<template>
  <v-app>
    <Sidebar />
    <v-main>
      <v-container>
        <Header />
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from '~~/components/common/Sidebar'
import Header from '~~/components/common/Header'

export default {
  components: {
    Sidebar,
    Header
  }
}
</script>
