<template>
  <div>
    <header class="header-land d-flex align-center justify-space-between">
      <div class="d-block">
        <LogoSvg />
      </div>
      <div class="header-menu">
        <a href="">О команде</a>
        <a href="">О команде</a>
        <a href="">О команде</a>
        <a href="">О команде</a>
      </div>
      <Button :text="`Регистрация`" />
    </header>
  </div>
</template>

<script>
import LogoSvg from '~~/components/svg/LogoSvg'
import Button from '~~/components/common/Button'

export default {
  components: {
    LogoSvg,
    Button
  },
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

<style lang="scss" scoped>
.v-badge__badge {
  background: #f75050;
}

.logo {
  width: 200px;
}
</style>
