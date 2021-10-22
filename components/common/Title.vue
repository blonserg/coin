<template>
  <div class="ttl d-flex flex-column flex-md-row justify-space-between align-center">
    <h1>{{ title }}</h1>
    <div class="ttl-group d-flex justify-space-between">
      <div class="filter d-flex align-center">
        <v-select
          v-model="select"
          :items="items"
          :menu-props="{ left: true }"
          label="Сортировать"
        />
      </div>
      <div class="filter d-flex align-center">
        <span class="filter-txt">Фильтр категорий</span>
        <v-select v-model="select" :items="items" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Заголовок'
    }
  },
  data () {
    return {
      select: ['Foo'],
      items: ['Foo', 'Bar', 'Fizz', 'Buzz']
    }
  }
}
</script>
