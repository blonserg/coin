<template>
  <div class="housework">
    <h1 class="ttl mb-7">Домашние здания</h1>
    <div class="table mb-16">
      <div class="table-head">
        <v-row>
          <v-col class="text-left col-3"> Партнеры</v-col>
          <v-col class="text-left col-2"> Дата и время </v-col>
          <v-col class="text-left col-2"> Категория </v-col>
          <v-col class="text-left col-2"> Курс </v-col>
          <v-col class="text-left col-2"> Урок </v-col>
          <v-col class="text-left col-1"> ДЗ </v-col>
        </v-row>
      </div>
      <div>
        <v-row>
          <v-col class="col-3">
            <div class="housework-radio">
              <label v-for="n in 3" :key="n" class="housework-radio_item">
                <input type="radio" name="group1" />
                <div class="d-flex align-center mb-4 mb-md-0 housework-radio_inner">
                  <div class="mycomand-avatar">
                    <v-avatar color="#7049E0" size="35">
                      <span class="mycomand-avatar_txt">
                        ДП
                      </span>
                    </v-avatar>
                  </div>
                  <div class="mycomand-name">
                    Дмитрий Портнягин
                    <span class="mycomand-name_nick">
                      @cryptoscammer
                    </span>
                  </div>
                </div>
              </label>
            </div>
          </v-col>
          <v-col class="col-9">
            <div class="housework-body">
              <div class="housework-wrapper" style="display:none;">
                <div class="housework-body_text">
                  Выберите партнера слева, чтобы отобразить информацию по домашним заданиям
                </div>
              </div>
              <div class="d-flex justify-space-between align-center mb-7">
                <div class="housework-text">
                  10.02.22 / 14:00
                </div>
                <div class="housework-text">
                  Криптовалюта
                </div>
                <div class="housework-text">
                  Трейдинг введение
                </div>
                <div class="housework-text">
                  Трейдинг введение
                </div>
                <button class="article-link" type="button">
                  смотреть
                </button>
              </div>
              <div class="d-flex justify-space-between align-center mb-7">
                <div class="housework-text">
                  10.02.22 / 14:00
                </div>
                <div class="housework-text">
                  Криптовалюта
                </div>
                <div class="housework-text">
                  Трейдинг введение
                </div>
                <div class="housework-text">
                  Трейдинг введение
                </div>
                <button class="article-link" type="button">
                  смотреть
                </button>
              </div>
              <div class="d-flex justify-space-between align-center mb-7">
                <div class="housework-text">
                  10.02.22 / 14:00
                </div>
                <div class="housework-text">
                  Криптовалюта
                </div>
                <div class="housework-text">
                  Трейдинг введение
                </div>
                <div class="housework-text">
                  Трейдинг введение
                </div>
                <button class="article-link" type="button">
                  смотреть
                </button>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
