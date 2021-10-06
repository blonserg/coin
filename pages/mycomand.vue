<template>
  <div class="mycomand">
    <h1 class="ttl">
      Моя команда
    </h1>
    <v-row>
      <v-col md="4">
        <v-card class="mycomand-main">
          <div class="mycomand-main_ttl">
            Общее количество партнеров
          </div>
          <div class="mycomand-main_txt">
            Учитываются все пользователи в вашей сетке партнеров
          </div>
          <div class="mycomand-main-count">
            <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.833008 11.9858C0.833008 9.95745 2.88908 7.56028 6.20684 7.56028C7.60871 7.56028 8.68348 7.97518 9.5246 8.57447C7.93581 9.81915 7.09469 12.0319 7.84235 13H2.04796C1.20684 13 0.833008 12.6312 0.833008 11.9858ZM3.68348 3.68794C3.68348 2.16667 4.8517 0.968085 6.25357 0.968085C7.65544 0.968085 8.77693 2.16667 8.77693 3.68794C8.77693 5.25532 7.60871 6.4539 6.25357 6.4539C4.89843 6.4539 3.68348 5.25532 3.68348 3.68794ZM8.49656 12.0319C8.49656 10.1418 10.8797 7.60638 14.6648 7.60638C18.4498 7.60638 20.833 10.1879 20.833 12.0319C20.833 12.6773 20.4124 12.9539 19.3844 12.9539H9.99189C8.91712 13 8.49656 12.6773 8.49656 12.0319ZM11.7676 3.13475C11.7676 1.38298 13.1227 0 14.7115 0C16.3003 0 17.6554 1.33688 17.6554 3.08865C17.6554 4.88652 16.3003 6.2695 14.7115 6.2695C13.1227 6.3156 11.7676 4.93262 11.7676 3.13475Z" fill="#2D7BF6" />
            </svg>
            21 738
          </div>
          <v-divider />
          <div class="mycomand-main_ttl">
            Личные приглашения
          </div>
          <div class="mycomand-main_txt">
            Учитываются все пользователи зарегистрировавшиеся по вашему приглашению
          </div>
          <div class="mycomand-main-count">
            <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.833008 11.9858C0.833008 9.95745 2.88908 7.56028 6.20684 7.56028C7.60871 7.56028 8.68348 7.97518 9.5246 8.57447C7.93581 9.81915 7.09469 12.0319 7.84235 13H2.04796C1.20684 13 0.833008 12.6312 0.833008 11.9858ZM3.68348 3.68794C3.68348 2.16667 4.8517 0.968085 6.25357 0.968085C7.65544 0.968085 8.77693 2.16667 8.77693 3.68794C8.77693 5.25532 7.60871 6.4539 6.25357 6.4539C4.89843 6.4539 3.68348 5.25532 3.68348 3.68794ZM8.49656 12.0319C8.49656 10.1418 10.8797 7.60638 14.6648 7.60638C18.4498 7.60638 20.833 10.1879 20.833 12.0319C20.833 12.6773 20.4124 12.9539 19.3844 12.9539H9.99189C8.91712 13 8.49656 12.6773 8.49656 12.0319ZM11.7676 3.13475C11.7676 1.38298 13.1227 0 14.7115 0C16.3003 0 17.6554 1.33688 17.6554 3.08865C17.6554 4.88652 16.3003 6.2695 14.7115 6.2695C13.1227 6.3156 11.7676 4.93262 11.7676 3.13475Z" fill="#2D7BF6" />
            </svg>
            897
          </div>
          <v-divider />
          <div class="mycomand-main_ttl">
            Количество оплаченых партнеров
          </div>
          <div class="mycomand-main_txt">
            Учитываются все оплаченные пользователи зарегистрировавшиеся по вашему приглашению
          </div>
          <div class="mycomand-main-count">
            <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.833008 11.9858C0.833008 9.95745 2.88908 7.56028 6.20684 7.56028C7.60871 7.56028 8.68348 7.97518 9.5246 8.57447C7.93581 9.81915 7.09469 12.0319 7.84235 13H2.04796C1.20684 13 0.833008 12.6312 0.833008 11.9858ZM3.68348 3.68794C3.68348 2.16667 4.8517 0.968085 6.25357 0.968085C7.65544 0.968085 8.77693 2.16667 8.77693 3.68794C8.77693 5.25532 7.60871 6.4539 6.25357 6.4539C4.89843 6.4539 3.68348 5.25532 3.68348 3.68794ZM8.49656 12.0319C8.49656 10.1418 10.8797 7.60638 14.6648 7.60638C18.4498 7.60638 20.833 10.1879 20.833 12.0319C20.833 12.6773 20.4124 12.9539 19.3844 12.9539H9.99189C8.91712 13 8.49656 12.6773 8.49656 12.0319ZM11.7676 3.13475C11.7676 1.38298 13.1227 0 14.7115 0C16.3003 0 17.6554 1.33688 17.6554 3.08865C17.6554 4.88652 16.3003 6.2695 14.7115 6.2695C13.1227 6.3156 11.7676 4.93262 11.7676 3.13475Z" fill="#2D7BF6" />
            </svg>
            214
          </div>
        </v-card>
      </v-col>
      <v-col md="8">
        <div class="mycomand-ttl">
          Вышестоящие партнеры
        </div>
        <div class="d-flex align-center">
          <div class="d-flex align-center">
            <div class="mycomand-avatar">
              <v-avatar
                color="primary"
                size="50"
              >
                <span class="mycomand-avatar_txt">
                  ВБ
                </span>
              </v-avatar>
            </div>
            <div class="mycomand-name">
              Владислав Борин
              <span class="mycomand-name_nick">
                @usernameplace
              </span>
            </div>
          </div>
          <div class="d-flex align-center">
            <div class="mycomand-avatar">
              <v-avatar
                color="primary"
                size="50"
              >
                <span class="mycomand-avatar_txt">
                  ВБ
                </span>
              </v-avatar>
            </div>
            <div class="mycomand-name">
              Владислав Борин
              <span class="mycomand-name_nick">
                @usernameplace
              </span>
            </div>
          </div>
        </div>
        <div class="mycomand-ttl">
          Проекты
        </div>
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
    </v-row>
    <Title :title="`Сетка реферальных партнеров`" />
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
            <td>{{ item.calories }}</td>
            <td>{{ item.calories }}</td>
            <td>{{ item.calories }}</td>
            <td>{{ item.calories }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="mycomand-ttl">
      Воронка продаж
    </div>
    <v-row>
      <v-col md="6">
        <v-card class="mycomand-sell">
          <div class="mycomand-sell_ttl">
            Категория генерации 1
          </div>
          <v-simple-table>
            <template #default>
              <thead>
                <tr>
                  <th class="text-left">
                    Клики
                  </th>
                  <th class="text-left">
                    Регистрации
                  </th>
                  <th class="text-left">
                    Продажи
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in sells"
                  :key="item.name"
                >
                  <td>{{ item.clicks }}</td>
                  <td>{{ item.reg }}</td>
                  <td>{{ item.sell }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card class="mycomand-sell">
          <div class="mycomand-sell_ttl">
            Категория генерации 1
          </div>
          <v-simple-table>
            <template #default>
              <thead>
                <tr>
                  <th class="text-left">
                    Клики
                  </th>
                  <th class="text-left">
                    Регистрации
                  </th>
                  <th class="text-left">
                    Продажи
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in sells"
                  :key="item.name"
                >
                  <td>{{ item.clicks }}</td>
                  <td>{{ item.reg }}</td>
                  <td>{{ item.sell }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Title from '~~/components/common/Title'

export default {
  components: {
    Title
  },
  data () {
    return {
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
      sells: [
        {
          clicks: 360,
          reg: 159,
          sell: 130
        }
      ]
    }
  }
}
</script>
