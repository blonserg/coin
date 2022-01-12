<template>
  <div class="mycomand">
    <h1 class="ttl">
      {{ staticData.title_my_team }}
    </h1>
    <v-row class="mb-12">
      <v-col md="4">
        <v-card class="mycomand-main">
          <div class="mycomand-main_ttl">
            {{ staticData.team_qty_partners }}
          </div>
          <div class="mycomand-main_txt">
            {{ staticData.team_considered_users }}
          </div>
          <div class="mycomand-main_count">
            <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.833008 11.9858C0.833008 9.95745 2.88908 7.56028 6.20684 7.56028C7.60871 7.56028 8.68348 7.97518 9.5246 8.57447C7.93581 9.81915 7.09469 12.0319 7.84235 13H2.04796C1.20684 13 0.833008 12.6312 0.833008 11.9858ZM3.68348 3.68794C3.68348 2.16667 4.8517 0.968085 6.25357 0.968085C7.65544 0.968085 8.77693 2.16667 8.77693 3.68794C8.77693 5.25532 7.60871 6.4539 6.25357 6.4539C4.89843 6.4539 3.68348 5.25532 3.68348 3.68794ZM8.49656 12.0319C8.49656 10.1418 10.8797 7.60638 14.6648 7.60638C18.4498 7.60638 20.833 10.1879 20.833 12.0319C20.833 12.6773 20.4124 12.9539 19.3844 12.9539H9.99189C8.91712 13 8.49656 12.6773 8.49656 12.0319ZM11.7676 3.13475C11.7676 1.38298 13.1227 0 14.7115 0C16.3003 0 17.6554 1.33688 17.6554 3.08865C17.6554 4.88652 16.3003 6.2695 14.7115 6.2695C13.1227 6.3156 11.7676 4.93262 11.7676 3.13475Z" fill="#2D7BF6" />
            </svg>
            {{ userTeam }}
          </div>
          <v-divider />
          <div class="mycomand-main_ttl">
            {{ staticData.team_personal_invitations }}
          </div>
          <div class="mycomand-main_txt">
            {{ staticData.team_personal_invitations_considered_users }}
          </div>
          <div class="mycomand-main_count">
            <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.833008 11.9858C0.833008 9.95745 2.88908 7.56028 6.20684 7.56028C7.60871 7.56028 8.68348 7.97518 9.5246 8.57447C7.93581 9.81915 7.09469 12.0319 7.84235 13H2.04796C1.20684 13 0.833008 12.6312 0.833008 11.9858ZM3.68348 3.68794C3.68348 2.16667 4.8517 0.968085 6.25357 0.968085C7.65544 0.968085 8.77693 2.16667 8.77693 3.68794C8.77693 5.25532 7.60871 6.4539 6.25357 6.4539C4.89843 6.4539 3.68348 5.25532 3.68348 3.68794ZM8.49656 12.0319C8.49656 10.1418 10.8797 7.60638 14.6648 7.60638C18.4498 7.60638 20.833 10.1879 20.833 12.0319C20.833 12.6773 20.4124 12.9539 19.3844 12.9539H9.99189C8.91712 13 8.49656 12.6773 8.49656 12.0319ZM11.7676 3.13475C11.7676 1.38298 13.1227 0 14.7115 0C16.3003 0 17.6554 1.33688 17.6554 3.08865C17.6554 4.88652 16.3003 6.2695 14.7115 6.2695C13.1227 6.3156 11.7676 4.93262 11.7676 3.13475Z" fill="#2D7BF6" />
            </svg>
            {{ userFirstReferal }}
          </div>
          <v-divider />
          <div class="mycomand-main_ttl">
            {{ staticData.team_paid_partners }}
          </div>
          <div class="mycomand-main_txt">
            {{ staticData.team_paid_partners_considered_users }}
          </div>
          <div class="mycomand-main_count">
            <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.833008 11.9858C0.833008 9.95745 2.88908 7.56028 6.20684 7.56028C7.60871 7.56028 8.68348 7.97518 9.5246 8.57447C7.93581 9.81915 7.09469 12.0319 7.84235 13H2.04796C1.20684 13 0.833008 12.6312 0.833008 11.9858ZM3.68348 3.68794C3.68348 2.16667 4.8517 0.968085 6.25357 0.968085C7.65544 0.968085 8.77693 2.16667 8.77693 3.68794C8.77693 5.25532 7.60871 6.4539 6.25357 6.4539C4.89843 6.4539 3.68348 5.25532 3.68348 3.68794ZM8.49656 12.0319C8.49656 10.1418 10.8797 7.60638 14.6648 7.60638C18.4498 7.60638 20.833 10.1879 20.833 12.0319C20.833 12.6773 20.4124 12.9539 19.3844 12.9539H9.99189C8.91712 13 8.49656 12.6773 8.49656 12.0319ZM11.7676 3.13475C11.7676 1.38298 13.1227 0 14.7115 0C16.3003 0 17.6554 1.33688 17.6554 3.08865C17.6554 4.88652 16.3003 6.2695 14.7115 6.2695C13.1227 6.3156 11.7676 4.93262 11.7676 3.13475Z" fill="#2D7BF6" />
            </svg>
            {{ userPaidReferal }}
          </div>
        </v-card>
      </v-col>
      <v-col md="8">
        <div class="mycomand-ttl">
          {{ staticData.team_superior_partners }}
        </div>
        <div class="d-flex flex-column flex-md-row align-md-center mb-8 mb-md-15">
          <div v-for="(item, i) in userPartners" :key="i" class="d-flex align-center mb-4 mb-md-0 mr-4">
            <div class="mycomand-avatar">
              <v-avatar
                color="#7049E0"
                size="50"
              >
                <span class="mycomand-avatar_txt">
                  {{ item.name.charAt(0) }}
                </span>
              </v-avatar>
            </div>
            <div class="mycomand-name">
              {{ item.name }}
              <span class="mycomand-name_nick">
                {{ item.telegram }}
              </span>
            </div>
          </div>
        </div>
        <div class="mycomand-ttl">
          {{ staticData.team_projects }}
        </div>
        <div class="table">
          <div class="table-head">
            <v-row class="flex-nowrap flex-md-wrap">
              <v-col class="text-center col-4 col-md-1">
                #-
              </v-col>
              <v-col class="text-left col-4 col-md-2">
                {{ staticData.team_project }}
              </v-col>
              <v-col class="text-center col-4 col-md-2">
                {{ staticData.team_my_participation }}
              </v-col>
              <v-col class="text-right col-4 col-md-3">
                {{ staticData.team_first_line }}
              </v-col>
              <v-col class="text-right col-4 col-md-4">
                {{ staticData.team_partnership_in_structure }}
              </v-col>
            </v-row>
          </div>
          <div class="table-body">
            <v-row
              v-for="item in userProjects"
              :key="item.name"
              class="flex-nowrap flex-md-wrap"
            >
              <v-col class="text-center col-4 col-md-1">
                {{ item.id }}
              </v-col>
              <v-col class="text-left col-4 col-md-2">
                {{ item.project }}
              </v-col>
              <v-col class="text-center col-4 col-md-2">
                <MyComandActive v-if="item.active == 1" />
                <MyComandPassive v-else />
              </v-col>
              <v-col class="text-right col-4 col-md-3">
                {{ item.first_line_referrals }}
              </v-col>
              <v-col class="text-right col-4 col-md-4">
                {{ item.all_referrals }}
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>

    <div v-if="userRefnet && Object.values(userRefnet).length">
      <Title
        class="ttl--small mb-9"
        :title="`Сетка реферальных партнеров`"
        :on-select-sort-type="onSortTypeChange"
        :sort-items="sortItems"
      />
      <div class="table mb-16">
        <div class="table-head">
          <v-row>
            <v-col class="text-center col-1">
              #-
            </v-col>
            <v-col class="text-left col-2">
              {{ staticData.team_ref_partners_ref }}
            </v-col>
            <v-col class="text-center col-2">
              {{ staticData.team_net_partners_ref_first_line }}
            </v-col>
            <v-col class="text-right col-3">
              {{ staticData.team_net_partners_ref_all_partners }}
            </v-col>
            <v-col class="text-right col-4">
              {{ staticData.team_net_partners_ref_finished_courses }}
            </v-col>
          </v-row>
        </div>
        <div class="table-body">
          <v-row
            v-for="item in userRefnet"
            :key="item.name"
          >
            <v-col class="text-center col-1">
              {{ item.id }}
            </v-col>
            <v-col class="text-left col-2">
              {{ item.project }}
            </v-col>
            <v-col class="text-center col-2">
              {{ item.active }}
            </v-col>
            <v-col class="text-right col-3">
              {{ item.first_line_referrals }}
            </v-col>
            <v-col class="text-right col-4">
              {{ item.all_referrals }}
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "~~/components/common/Title";
import StaticService from "~/services/StaticService";
import HttpService from "~/services/HttpService";
import MyComandActive from "~~/components/svg/MyComandActive";
import MyComandPassive from "~~/components/svg/MyComandPassive";

export default {
  components: {
    Title,
    MyComandActive,
    MyComandPassive
  },
  data () {
    return {
      sells: [
        {
          clicks: 360,
          reg: 159,
          sell: 130
        }
      ],
      userTeam: null,
      userFirstReferal: null,
      userPaidReferal: null,
      userProjects: null,
      userPartners: null,
      userRefnet: null,
      staticData: [],
      selectedSortType: null,
      sortItems: [
        {
          text: "Самие активние",
          value: "1"
        },
        {
          text: "Mенее активны",
          value: "2"
        }
      ]
    };
  },
  async fetch () {
    await this.getUserTeam();
    this.staticData = await StaticService.get("/my_team");
  },
  fetchOnServer: false,
  mounted () {
    const token = window.localStorage.getItem("userToken");
    if (!token) {
      this.$router.push("login");
    }
  },
  methods: {
    async getUserTeam () {
      const params = {};
      if (this.selectedSortType !== null) {
        params.sort = this.selectedSortType;
      }
      let response = await HttpService.get("/user-team", params);
      if (response.status === 200) {
        this.userTeam = response.data.team.all_referrals;
        this.userFirstReferal = response.data.team.first_line_referrals;
        this.userPaidReferal = response.data.team.paid_referrals;
        this.userProjects = response.data.projects;
        this.userPartners = response.data.partners;
        if (!(response.data.referrals_net.length === 0)) {
          this.userRefnet = response.data.referrals_net;
        } else {
          // TODO do we need to inform user?
        }
      } else {
      // TODO do we need to inform user?
      }

      response = await HttpService.get("/my_team");
      if (response.status === 200) {
        this.myTeam = response.data;
      } else {
      // TODO do we need to inform user?
      }
    },
    onSortTypeChange (sortType) {
      this.selectedSortType = sortType;
      this.getUserTeam();
    }
  }
};
</script>

<style lang="scss" scoped>
.mycomand {
  &-main {
    background: #23262e;
    border: 1px solid #272a33;
    box-sizing: border-box;
    border-radius: 15px;
    padding: 30px;

    .theme--light & {
      background: #fff;
      border: 1px solid #fff;
    }

    .v-divider {
      margin: 25px 0;
    }
  }

  .v-data-table > .v-data-table__wrapper > table > thead > tr > th {
    height: 30px;
    background: #1e1f26;
    border-bottom: 0;

    .theme--light & {
      background: #fff;
    }
  }

  .v-data-table > .v-data-table__wrapper > table > thead > tr > th:first-child {
    border-radius: 6px 0 0 6px;
  }

  .v-data-table > .v-data-table__wrapper > table > thead > tr > th:last-child {
    border-radius: 0 6px 6px 0;
  }

  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
    height: 30px;
    font-size: 14px;
    line-height: 18px;
    color: #adafc2;
    background: none;
  }

  .v-data-table .v-data-table__wrapper table thead::after {
    content: "@";
    display: block;
    line-height: 17px;
    text-indent: -99999px;
  }

  .v-data-table {
    background: inherit;
  }
}
</style>
