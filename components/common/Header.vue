<template>
  <div>
    <header class="header d-flex align-center">
      <div class="header-avatar d-flex align-center">
        <div class="header-avatar_image">
          <img src="/avatar.png" alt="">
        </div>
        <div class="header-avatar_txt">
          Влад Борин
          <span class="header-avatar_subtxt">Lorem ipsum</span>
        </div>
      </div>
      <div class="header-rate d-flex align-center">
        <div class="header-rate_txt">
          Тариф:
        </div>
        <v-chip class="ma-2" label outlined>
          PREMIUM
        </v-chip>
      </div>
      <div class="header-balance d-flex align-center">
        <div class="header-balance_txt">
          Баланс:
        </div>
        <v-chip class="ma-2" label outlined>
          497 баллов
        </v-chip>
      </div>
      <div class="header-refs d-flex align-center">
        <v-text-field ref="textToCopy" v-model="value" outlined readonly />
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="primary"
          @click="copyText"
        >
          <v-icon dark>
            mdi-minus
          </v-icon>
        </v-btn>
      </div>
      <div class="header-notifcatns">
        <v-badge />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 'loremipsum'
    }
  },
  methods: {
    copyText () {
      const textToCopy = this.$refs.textToCopy.$el.querySelector('input')
      textToCopy.select()
      document.execCommand('copy')
    }
  }
}
</script>
