<template>
  <div class="ttl d-flex flex-column flex-md-row justify-space-between align-md-center">
    <h1>{{ title }}</h1>
    <div class="ttl-group d-flex mb-5 mb-md-0 justify-space-between">
      <div class="filter d-flex align-center">
        <v-select
          v-model="select"
          :items="items"
          :menu-props="{ left: true }"
          :label="sort"
        />
      </div>
      <div class="filter d-flex align-center">
        <v-select
          v-model="select"
          :items="items"
          :menu-props="{ left: true }"
          :label="filtr"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Заголовок"
    },
    sort: {
      type: String,
      default: "Сортировать"
    },
    filtr: {
      type: String,
      default: "Фильтр категорий"
    }
  },
  data () {
    return {
      select: ["Foo"],
      items: ["Foo", "Bar", "Fizz", "Buzz"]
    };
  }
};
</script>
