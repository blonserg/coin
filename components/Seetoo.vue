<template>
  <div class="seetoo">
    <div class="seetoo-ttl">
      {{ title }}
    </div>
    <div class="seetoo-list d-flex flex-column flex-md-row justify-space-between">
      <v-card class="seetoo-item item-2">
        <img src="" alt="">
        <div class="seetoo-item_bottom d-md-flex justify-space-between">
          <div class="seetoo-item_ttl mb-2 mb-md-0">
            Выиграй iPhone 12 Pro Max
            <span class="seetoo-item_subttl">
              Читай условия розыгрыша в описании
            </span>
          </div>
          <v-dialog
            v-model="dialog"
          >
            <template #activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                class="btn"
                color="#2d7bf6"
                x-large
                height="48px"
                v-on="on"
              >
                Подробнее
              </v-btn>
            </template>

            <v-card class="dialog">
              <v-row>
                <v-col cols="12" md="4">
                  <div class="dialog-image">
                    <img src="/article.png" alt="">
                  </div>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-text class="dialog-text">
                    <h2>Выиграй iPhone 12 Pro Max</h2>
                    <strong>
                      Условия розыгрыша
                    </strong>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <div class="dialog-text_bottom">
                      <p>
                        Посмотри отзывы счастливых победителей прошлых розыгрышей
                      </p>
                      <a class="article-link" href="">Смотреть отзывы</a>
                    </div>
                  </v-card-text>
                </v-col>
              </v-row>
              <v-card-actions>
                <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
                >
                  <CloseButton />
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-card>
      <v-card class="seetoo-item item-1">
        <img src="" alt="">
        <div class="seetoo-item_bottom d-flex justify-space-between">
          <div class="seetoo-item_ttl">
            Отзывы победителей розыгрышей
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import CloseButton from "~~/components/svg/CloseButton";

export default {
  components: {
    CloseButton
  },
  props: {
    title: {
      type: String,
      default: "Вам будет интересно:"
    }
  },
  data () {
    return {
      dialog: false
    };
  }
};
</script>

<style lang="scss" scoped>
  .theme--dark.v-card {
    background: #2b2e38;
    border: 1px solid #272a33;
    border-radius: 15px;
  }

  .btn {
    color: white;
    font-size: 14px;
    text-transform: none;
    border-radius: 6px;
    padding: 15px 20px;
    letter-spacing: 0;
  }
</style>
