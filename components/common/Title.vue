<template>
  <div class="ttl d-flex flex-column flex-md-row justify-space-between align-md-center">
    <h1>{{ title }}</h1>
    <div class="ttl-group d-flex mb-5 mb-md-0 justify-space-between">
      <div class="filter d-flex align-center">
        <v-select
          v-model="selectedSortType"
          :items="sortItems"
          :menu-props="{ left: true }"
          :label="sort"
          @input="onSelectSortType(selectedSortType)"
        />
      </div>
      <div v-if="categories" class="filter d-flex align-center">
        <v-select
          v-model="selectedCategories"
          :items="categories"
          :menu-props="{ left: true }"
          :label="filtr"
          multiple
          @input="onSelectCategories(selectedCategories)"
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
    },
    categories: {
      type: Array,
      default: null
    },
    onSelectSortType: {
      type: Function,
      default: null
    },
    onSelectCategories: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
      sortItems: [
        {
          text: "Latest",
          value: "latest"
        },
        {
          text: "Oldest",
          value: "oldest"
        }
      ],
      selectedSortType: "latest",
      selectedCategories: []
    };
  }
};
</script>
