<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
    width="260px"
    class="sidebar"
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <div class="sidebar-balance">
      <div class="sidebar-balance_ttl">
        Ваши баллы:
      </div>
      <div class="sidebar-balance_count">
        479
      </div>
      <div class="sidebar-balance_txt">
        Вы можете использовать их для доступа к закрытым материалам
      </div>
      <Button :text="`Пополнить баланс`" :block="block" />
    </div>
    <v-switch
      inset
      :value="darkMode"
      :label="`Темный режим`"
      @change="toggleDarkMode"
    />
  </v-navigation-drawer>
</template>

<script>
import Button from '~~/components/common/Button'

export default {
  components: {
    Button
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Главная',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Инвестиии',
          to: '/inspire'
        },
        {
          icon: 'mdi-apps',
          title: 'Резервый фонд',
          to: '/inspire'
        },
        {
          icon: 'mdi-apps',
          title: 'CRM',
          to: '/inspire'
        },
        {
          icon: 'm,di-apps',
          title: 'Биржа услуг',
          to: '/inspire'
        },
        {
          icon: 'mdi-apps',
          title: 'Моя команда',
          to: '/inspire'
        },
        {
          icon: 'mdi-apps',
          title: 'Лояльность',
          to: '/inspire'
        },
        {
          icon: 'mdi-apps',
          title: 'FAQ',
          to: '/inspire'
        },
        {
          icon: 'mdi-apps',
          title: 'Новости',
          to: '/inspire'
        },
        {
          icon: 'mdi-apps',
          title: 'Группы Telegram',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      darkMode: false
    }
  },
  computed: {
    switchLabel () {
      return this.darkMode ? 'light' : 'dark'
    }
  },
  methods: {
    toggleDarkMode () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.darkMode = !this.darkMode
    }
  }
}
</script>

<style lang="scss" scoped>
.theme--dark.v-icon {
  color: #6a6b79;
}

.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #6a6b79;
}

.theme--dark.v-navigation-drawer {
  background: #131418 !important;
}
</style>