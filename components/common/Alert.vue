<template>
  <div class="alert-div">
    <div class="bg"></div>
    <v-card class="content">
      <v-card-text class="alert-text">
        {{ text }}
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          text
          @click.native="onCloseButtonClick"
        >
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

export default {
  components: {

  },
  props: {
    text: {
      type: String,
      default: "Текст"
    }
  },
  data () {
    return {
    };
  },
  methods: {
    onCloseButtonClick () {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
  .alert-div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
    }
    .content {
      width: 400px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
</style>
