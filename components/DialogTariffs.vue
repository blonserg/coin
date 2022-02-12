<template>
  <div>
    <button class="article-link" type="button" @click="dialogTariffs = !dialogTariffs, showTooltip = !showTooltip">
      Продлить тариф
    </button>
    <v-dialog v-model="dialogTariffs">
      <v-card class="dialog">
        <v-row>
          <v-col cols="12" md="4">
            <h2 class="dialog-tariffs_ttl">
              Учні, студенти й викладачі можуть заощадити понад 33%.
            </h2>
            <div class="dialog-tariffs_txt">
              Спеціальна ціна для першого року використання – див. умови.
            </div>
          </v-col>
          <v-col v-for="item in tariffs" :key="item.id" cols="12" md="4">
            <v-card class="dialog-tariffs">
              <div class="dialog-tariffs_inner">
                <div class="header-tariph mb-6 d-inline-block" :class="item.code">
                  {{ item.code }}
                </div>
                <h3>
                  {{ item.title }}
                </h3>
                <p>
                  {{ item.content }}
                </p>
              </div>
              <div
                class="
                  dialog-tariffs_bottom
                  d-flex
                  justify-space-between
                  align-center
                "
              >
                <div>
                  <div class="dialog-tariffs_date">
                    {{ item.month }} {{ item.month_text }}
                  </div>
                  <div class="dialog-tariffs_price">{{ item.price }} $</div>
                </div>
                <button
                  class="article-link"
                  type="button"
                  @click="postTransaction(item)"
                >
                  Обновить тариф
                </button>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-btn color="primary" text @click="dialogTariffs = false">
            <CloseButton />
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import HttpService from "~/services/HttpService";
import CloseButton from "~~/components/svg/CloseButton";

export default {
  components: {
    CloseButton
  },
  data () {
    return {
      dialogTariffs: false,
      tariffs: null,
      currencies: null,
      addr: null
    };
  },
  async fetch () {
    const response = await HttpService.get("/tariffs");
    if (response.status === 200) {
      this.tariffs = response.data;
    } else {
      let errorText;
      if (Array.isArray(response.errors)) {
        errorText = response.errors.join("; ")
      } else {
        errorText = "An error occurred"
      }
      this.alert = {
        text: errorText,
        active: true
      };
    }
  },
  fetchOnServer: false,
  methods: {
    async getCurrencies () {
      const response = await HttpService.get("/currency");
      if (response.status === 200) {
        this.currencies = response.data.currencies;
      } else {
      // TODO do we need to inform user?
      }
    },
    async postTransaction (item) {
      const bodyObject = {
        "tariff_id": item.id,
        "user_id": this.authUserId
      }
      const response = await HttpService.post("/transaction", bodyObject);
      if (response.status === 200) {
        window.location.href = response.data.addr;
      } else {
        alert("An error occurred") // TODO how to inform user?
      }
    }
  }
};
</script>
