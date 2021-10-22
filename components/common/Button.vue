<template>
  <v-btn
    class="btn"
    color="#2d7bf6"
    x-large
    height="48px"
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Button'
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn {
    color: white;
    font-size: 14px;
    text-transform: none;
    border-radius: 6px;
    padding: 15px 20px;
    letter-spacing: 0;
  }
</style>
