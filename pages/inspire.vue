<template>
  <div>
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
      <Button :text="`Пополнить баланс`" />
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    const token = window.localStorage.getItem("userToken");
    if (!token) {
      this.$router.push("login");
    }
  }
}
</script>
