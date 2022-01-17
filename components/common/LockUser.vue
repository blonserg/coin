<template>
  <div>
    <v-dialog
      v-model="dialogLock"
      content-class="dialog-shrink"
      max-width="280"
      persistent
    >
      <v-card class="dialog dialog--acess">
        <StopSvg />
        <p>
          Купите тариф чтобы воспользоватсья полным функиционалом
        </p>
        <NuxtLink to="/main">
          <button class="article-link" type="button" @click="dialogLock = false">
            Продолжить
          </button>
        </NuxtLink>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import HttpService from "~/services/HttpService";
import StopSvg from "~~/components/svg/StopSvg";

export default {
  components: {
    StopSvg
  },
  data () {
    return {
      lockInfoUser: null,
      dialogLock: null
    }
  },
  async fetch () {
    const response = await HttpService.get("/auth-user-info");
    if (response.status === 405) {
      this.lockInfoUser = true;
      this.dialogLock = true;
    } else {
      this.lockInfoUser = false;
    }
  },
  fetchOnServer: false
};
</script>
