<template>
  <div class="seetoo">
    <div class="seetoo-ttl">Вам будет интересно:</div>
    <div class="seetoo-list d-flex justify-space-between">
      <v-card class="seetoo-item item-2">
        <img src="" alt="">
        <div class="seetoo-item_bottom d-flex justify-space-between">
          <div class="seetoo-item_ttl">
            Выиграй iPhone 12 Pro Max
            <span class="seetoo-item_subttl">
              Читай условия розыгрыша в описании
            </span>
          </div>
          <Button :text="`Подробнее`" />
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
import Button from '~~/components/common/Button'

export default {
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
.theme--dark.v-card {
  background: #2b2e38;
  border: 1px solid #272a33;
  border-radius: 15px;
}
</style>
