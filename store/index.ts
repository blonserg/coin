import { ActionTree, GetterTree, MutationTree } from "vuex";
import UserModel from "~/models/UserModel";

export const state = () => ({
  desserts: [
    {
      name: "Frozen Yogurt test",
      calories: 159
    },
    {
      name: "Ice cream sandwich",
      calories: 237
    },
    {
      name: "Eclair",
      calories: 262
    },
    {
      name: "Cupcake",
      calories: 305
    },
    {
      name: "Gingerbread",
      calories: 356
    },
    {
      name: "Jelly bean",
      calories: 375
    },
    {
      name: "Lollipop",
      calories: 392
    },
    {
      name: "Honeycomb",
      calories: 408
    },
    {
      name: "Donut",
      calories: 452
    },
    {
      name: "KitKat",
      calories: 518
    }
  ],
  news: [
    {
      title: "Cложность майнинга биткоина снова выросла",
      views: "830",
      date: "14 авг"
    },
    {
      title: "Cложность майнинга биткоина снова выросла",
      views: "830",
      date: "14 авг"
    }
  ],
  user: null as UserModel | null
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {

}

export const mutations: MutationTree<RootState> = {
  setUser (stateParam, user: UserModel) {
    localStorage.setItem("user", JSON.stringify(user));
    stateParam.user = user;
  }
};

export const actions: ActionTree<RootState, RootState> = {
  getUser ({ state, commit }) {
    if (state.user) {
      return state.user;
    } else {
      const userFromStorageJSON = localStorage.getItem("user");
      if (userFromStorageJSON) {
        const userFromStorage: UserModel = JSON.parse(userFromStorageJSON);
        commit("setUser", userFromStorage);
        return userFromStorage;
      } else {
        return null;
      }
    }
  }
}
