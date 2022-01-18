<template>
  <div class="seetoo">
    <div class="seetoo-ttl">
      {{ title }}
    </div>
    <div class="seetoo-list d-flex flex-column flex-md-row justify-space-between">
      <v-card v-for="promoItem in promo" :key="promoItem.id" class="seetoo-item item-2">
        <div class="seetoo-img">
          <img :src="promoItem.image" alt="">
        </div>
        <div class="seetoo-item_bottom d-md-flex justify-space-between">
          <div class="seetoo-item_ttl mb-2 mb-md-0">
            {{ promoItem.title }}
            <span class="seetoo-item_subttl">
              {{ promoItem.sub_title }}
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
                    <img :src="promoItem.image2" alt="">
                  </div>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-text class="dialog-text">
                    <h2>{{ promoItem.title }}</h2>
                    <div v-html="promoItem.content" />
                    <button class="article-link" type="button" @click="dialog = false, dialogReview = !dialogReview">
                      Смотреть отзывы
                    </button>
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
        <div class="seetoo-img">
          <img src="/review.png" alt="">
        </div>
        <div class="seetoo-item_bottom d-flex justify-space-between">
          <div class="seetoo-item_ttl">
            Отзывы победителей розыгрышей
          </div>
          <button
            type="button"
            @click="dialogReview = !dialogReview"
          >
            <PlayVideo />
          </button>
          <v-dialog
            v-model="dialogReview"
          >
            <v-card class="dialog dialog--review">
              <v-row>
                <v-col cols="12" md="5">
                  <v-card-text class="dialog-text">
                    <h2>
                      Видео отзывы победителей розыгрыша Strike Team
                    </h2>
                    <p>
                      Получи 500 баллов прямо сейчас! Запиши свой видео отзыв и отошли его нам в телеграм <span class="dialog-text_bot">@telegrambot</span>
                    </p>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="7">
                  <v-row>
                    <v-col v-for="dynamicReviewitem in reviews" :key="dynamicReviewitem.id" cols="12" md="6" class="dialog-review">
                      <div class="dialog-review_video" @click="dialogVideo = !dialogVideo, showVideo = dynamicReviewitem.id">
                        <img :src="dynamicReviewitem.image" alt="">
                        <button class="dialog-review_play" type="button">
                          <PlayVideo />
                        </button>
                      </div>
                      <v-dialog v-if="showVideo === dynamicReviewitem.id" v-model="dialogVideo">
                        <v-card class="dialog dialog--video">
                          <div class="dialog-review_video-wrap">
                            <iframe
                              width="100%"
                              height="100%"
                              :src="dynamicReviewitem.link"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            >
                            </iframe>
                            <v-btn
                              color="primary"
                              class="dialog-review_video-close"
                              text
                              @click="dialogVideo = !dialogVideo"
                            >
                              <CloseButton />
                            </v-btn>
                          </div>
                        </v-card>
                      </v-dialog>
                      <div class="dialog-review_name">
                        {{ dynamicReviewitem.title }}
                      </div>
                      <div class="dialog-review_date">
                        {{ $moment(dynamicReviewitem.date).format("DD MMM YYYY") }}
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-card-actions>
                <v-btn
                  color="primary"
                  text
                  @click="dialogReview = false"
                >
                  <CloseButton />
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import HttpService from "~/services/HttpService";
import CloseButton from "~~/components/svg/CloseButton";
import PlayVideo from "~~/components/svg/PlayVideo";

export default {
  components: {
    CloseButton,
    PlayVideo
  },
  props: {
    title: {
      type: String,
      default: "Вам будет интересно:"
    }
  },
  data () {
    return {
      dialog: false,
      dialogReview: false,
      dialogVideo: false,
      reviews: null,
      showVideo: null,
      promo: null
    };
  },
  async fetch () {
    let response = await HttpService.get("/promo");
    if (response.status === 200) {
      this.promo = response.data;
    } else {
      // TODO do we need to inform user?
    }

    response = await HttpService.get("/reviews");
    if (response.status === 200) {
      this.reviews = response.data;
    } else {
      // TODO do we need to inform user?
    }
  },
  fetchOnServer: false
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
