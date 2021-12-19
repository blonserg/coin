<template>
  <div>
    <v-app-bar-nav-icon class="sidebar-menu d-md-none" @click.stop="drawer = !drawer" />
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      hide-overlay
      fixed
      app
      class="sidebar"
      width="260px"
    >
      <div class="sidebar-head d-flex d-md-block align-center">
        <LogoSvg />
        <span class="sidebar-menu_close d-md-none" @click.stop="drawer = !drawer">
          <CloseMob />
        </span>
      </div>
      <div class="d-flex flex-column d-md-none">
        <div class="header-avatar d-flex align-center">
          <div class="header-avatar_image">
            <img src="/avatar.png" alt="">
          </div>
          <div class="header-avatar_txt">
            Влад Борин
            <span class="header-avatar_subtxt">Lorem ipsum</span>
          </div>
        </div>
        <div class="header-rate d-none d-md-flex align-center">
          <div class="header-rate_txt">
            Тариф:
          </div>
          <div class="header-tariph premium">
            PREMIUM
          </div>
        </div>
      </div>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <component :is="item.icon"></component>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="sidebar-footer">
        <v-divider />
      </div>
      <v-list>
        <v-list-item
          :to="`/profile`"
          router
          exact
        >
          <v-list-item-action>
            <span><MenuProfile /></span>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="`Мой профиль`" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="sidebar-footer">
        <v-divider />
        <v-switch
          v-model="switch1"
          inset
          color="accent"
          :value="darkMode"
          :label="`Темный режим`"
          @change="toggleDarkMode"
        />
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import LogoSvg from "~~/components/svg/LogoSvg";
import CloseMob from "~~/components/svg/CloseMob";
import HttpService from "~/services/HttpService";
import MenuProfile from "~~/components/svg/MenuProfile";
import MenuCommand from "~~/components/svg/MenuCommand";
import MenuInvest from "~~/components/svg/MenuInvest";
import MenuMain from "~~/components/svg/MenuMain";
import MenuNews from "~~/components/svg/MenuNews";
import MenuStock from "~~/components/svg/MenuStock";
import MenuTelegram from "~~/components/svg/MenuTelegram";

export default {
  components: {
    LogoSvg,
    CloseMob,
    MenuProfile,
    MenuCommand,
    MenuInvest,
    MenuMain,
    MenuNews,
    MenuStock,
    MenuTelegram
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      switch1: true,
      items: [
        {
          icon: "MenuMain",
          title: "Главная",
          to: "/main"
        },
        {
          icon: "MenuInvest",
          title: "Инвестиции",
          to: "/invests"
        },
        {
          icon: "MenuStock",
          title: "Биржа услуг",
          to: "/stock"
        },
        {
          icon: "MenuCommand",
          title: "Моя команда",
          to: "/mycomand"
        },
        {
          icon: "MenuNews",
          title: "Новости",
          to: "/news"
        },
        {
          icon: "MenuTelegram",
          title: "Группы Telegram",
          to: "/telegrams"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
      darkMode: true,
      authUserInfo: null
    };
  },
  async fetch () {
    const response = await HttpService.get("/auth-user-info");
    if (response.status === 200) {
      this.authUserInfo = response.data;
    } else {
      // TODO do we need to inform user?
    }
  },
  fetchOnServer: false,
  computed: {
    switchLabel () {
      return this.darkMode ? "light" : "dark";
    }
  },
  methods: {
    toggleDarkMode () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.darkMode = !this.darkMode;
    }
  }
};
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

.logo {
  padding: 20px 0;
  margin: 10px 0;
}

.v-list-item__title {
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.02em;
}

.v-application--is-ltr .v-list-item__action:first-child {
  margin-right: 20px;
}

.theme--dark.v-list-item--active::before {
  opacity: 0;
}

.v-list-item--active {
  background: #2d7bf6;
  color: white;
  border-radius: 8px;
}

.v-divider {
  margin: 40px 0;
}

.v-input--switch--inset .v-input--switch__track {
  opacity: 1;
}

.sidebar {
  @media screen and (max-width: 758px) {
    width: 100% !important;
  }
}

.sidebar-menu {
  position: absolute;
  right: 20px;
  z-index: 1;
  top: 15px;
}

.v-navigation-drawer__content {
  .logo {
    @media screen and (max-width: 758px) {
      width: 200px;
    }
  }
}
</style>
