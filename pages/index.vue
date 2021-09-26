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
        />
        <div class="events-info">
          <div class="events-ttl">
            Как инвестировать в криптовалюту
          </div>
          <div class="events-info_bottom d-flex justify-space-between align-center">
            <div class="events-name">
              <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 9.97586C0 8.45862 1.96296 6.37241 5 6.37241C8.03704 6.37241 10 8.45862 10 9.97586C10 10.6207 9.62963 11 8.51852 11H1.48148C0.37037 11 0 10.6207 0 9.97586ZM2.59259 2.65517C2.59259 1.21379 3.66667 0 5 0C6.33333 0 7.40741 1.21379 7.40741 2.65517C7.40741 4.17241 6.33333 5.34828 5 5.34828C3.66667 5.34828 2.59259 4.17241 2.59259 2.65517Z" fill="#808190" />
              </svg>
              Дмитрий Портнягин
            </div>
            <div class="events-time">
              12:00
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <Seetoo />
    <Title />
    <News v-bind="news" />
    <v-btn class="btn btn-seetoo" block>
      Смотреть еще
    </v-btn>
    <h2 class="main-ttl">
      Общее количество пользователей
    </h2>
    <span class="main-subttl">
      Учитываются все пользователи, зарегистрировавшиеся на Strike Team
    </span>
    <div class="main-table">
      <div class="main-table_head d-flex justify-space-between">
        <div class="main-table_people">
          <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 15.2518C0 12.7553 2.46729 9.80496 6.4486 9.80496C8.13084 9.80496 9.42056 10.3156 10.4299 11.0532C8.52337 12.5851 7.51402 15.3085 8.41121 16.5H1.45794C0.448598 16.5 0 16.0461 0 15.2518ZM3.42056 5.03901C3.42056 3.16667 4.82243 1.69149 6.50467 1.69149C8.18692 1.69149 9.53271 3.16667 9.53271 5.03901C9.53271 6.96809 8.13084 8.44326 6.50467 8.44326C4.87851 8.44326 3.42056 6.96809 3.42056 5.03901ZM9.19626 15.3085C9.19626 12.9823 12.0561 9.8617 16.5981 9.8617C21.1402 9.8617 24 13.039 24 15.3085C24 16.1028 23.4953 16.4433 22.2617 16.4433H10.9907C9.70094 16.5 9.19626 16.1028 9.19626 15.3085ZM13.1215 4.35816C13.1215 2.20213 14.7477 0.5 16.6542 0.5C18.5607 0.5 20.1869 2.14539 20.1869 4.30142C20.1869 6.51418 18.5607 8.21631 16.6542 8.21631C14.7477 8.27305 13.1215 6.57092 13.1215 4.35816Z" fill="#6A6B79" />
          </svg>
          36 459
        </div>
        <v-btn-toggle
          v-model="text"
          tile
          group
        >
          <v-btn value="day">
            Сутки
          </v-btn>

          <v-btn value="week">
            Неделя
          </v-btn>

          <v-btn value="month">
            Месяц
          </v-btn>

          <v-btn value="all">
            ВСе время
          </v-btn>
        </v-btn-toggle>
      </div>
      <div class="main-body">
        <v-container>
          <v-row>
            <v-col md="6">
              <v-simple-table>
                <template #default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Calories
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in desserts"
                      :key="item.name"
                    >
                      <td>{{ item.name }}</td>
                      <td>{{ item.calories }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
            <v-col md="6">
              <v-simple-table>
                <template #default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Calories
                      </th>
                    </tr>
                  </thead>
                  <v-spacer />
                  <tbody>
                    <tr
                      v-for="item in desserts"
                      :key="item.name"
                    >
                      <td>{{ item.name }}</td>
                      <td>{{ item.calories }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <p class="main-info">
        Время и границы суток определены в GMT (MSK −3:00)
      </p>
    </div>
  </div>
</template>

<script>
import Title from '~~/components/common/Title'
import News from '~~/components/common/News'
import Seetoo from '~~/components/Seetoo'

export default {
  components: {
    Title,
    News,
    Seetoo
  },
  data () {
    return {
      text: 'all',
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159
        },
        {
          name: 'Ice cream sandwich',
          calories: 237
        },
        {
          name: 'Eclair',
          calories: 262
        },
        {
          name: 'Cupcake',
          calories: 305
        },
        {
          name: 'Gingerbread',
          calories: 356
        },
        {
          name: 'Jelly bean',
          calories: 375
        },
        {
          name: 'Lollipop',
          calories: 392
        },
        {
          name: 'Honeycomb',
          calories: 408
        },
        {
          name: 'Donut',
          calories: 452
        },
        {
          name: 'KitKat',
          calories: 518
        }
      ],
      news: [
        {
          title: 'Cложность майнинга биткоина снова выросла',
          views: 830,
          date: '14 авг'
        },
        {
          title: 'Cложность майнинга биткоина снова выросла',
          views: 830,
          date: '14 авг'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .theme--dark.v-card {
    background: #23262e;
  }

  .theme--light.v-btn.v-btn--has-bg {
    background: #1e1f26;
  }

  .main {
    &-ttl {
      font-weight: 600;
      font-size: 24px;
      line-height: 31px;
      color: white;
    }

    &-subttl {
      font-size: 16px;
      line-height: 21px;
      color: #808190;
      margin-bottom: 30px;
      display: inline-block;
    }

    &-table {
      &_people {
        font-weight: 500;
        font-size: 36px;
        line-height: 47px;
      }

      &_head {
        margin-bottom: 20px;
      }

      .v-btn-toggle {
        .v-btn {
          font-size: 13px;
          line-height: 17px;
          color: #6a6b79;
          height: 30px;
          letter-spacing: 0;
          text-transform: none;
          border: 1px solid #272a33;
          border-radius: 4px !important;
          width: 89px;
        }

        .v-btn--active {
          background: #2d7bf6 !important;
          border-color: #2d7bf6;
          color: #fff;
        }
      }
    }

    &-info {
      margin-top: 30px;
      text-align: right;
      font-size: 13px;
      line-height: 17px;
      color: #6a6b79;
    }
  }

  .theme--dark.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
    height: 30px;
    background: #1e1f26;
    border-radius: 6px;
    border-bottom: 0;
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

  .theme--dark.v-data-table {
    background: inherit;
  }

  .v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default {
    height: 30px;
  }

  .v-application--is-ltr .v-btn-toggle > .v-btn.v-btn:not(:first-child) {
    border-left-width: 1px;
  }

  .v-sheet.v-card:not(.v-sheet--outlined) {
    border-radius: 15px;
  }
</style>
