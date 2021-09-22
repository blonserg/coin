<template>
  <div>
    <Title />
    <div class="events-list">
      <v-card class="events-item d-flex justify-space-between align-center">
        <div class="events-date">
          <span class="events-date_month">
            Авг
          </span>
          <span class="events-date_day">
            26
          </span>
        </div>
        <v-divider
          vertical
        ></v-divider>
        <div class="events-info">
          <div class="events-ttl">
            Как инвестировать в криптовалюту
          </div>
          <div class="events-info_bottom d-flex justify-space-between align-center">
            <div class="events-name">
              Дмитрий Портнягин
            </div>
            <div class="events-time">
              12:00
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <div class="seetoo">
      <div class="seetoo-ttl">
        Вам будет интересно:
      </div>
    </div>
    <Title />
    <News />
    <v-btn block>
      Смотреть еще
    </v-btn>
  </div>
</template>

<script>
import Title from '~~/components/common/Title'
import News from '~~/components/common/News'

export default {
  components: {
    Title,
    News
  }
}
</script>

<style lang="scss" scoped>
  .theme--dark.v-card {
    background: #23262e;
  }
</style>
