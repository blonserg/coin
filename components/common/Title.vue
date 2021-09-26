<template>
  <div class="title d-flex justify-space-between align-center">
    <h1>{{ title }}</h1>
    <div class="title-group d-flex justify-space-between">
      <div class="filter d-flex align-center">
        <span class="filter-txt">Сортировать</span>
        <v-select v-model="select" :items="items" />
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
