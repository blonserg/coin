export default {
  getUser (store: any) {
    if (store.state.user) {
      return store.state.user;
    } else {
      const userFromStorageJSON = localStorage.getItem("user");
      if (userFromStorageJSON) {
        const userFromStorage = JSON.parse(userFromStorageJSON);
        store.commit("setUser", userFromStorage);
        return userFromStorage;
      } else {
        return null;
      }
    }
  },
  logoutUser (store: any) {
    localStorage.removeItem("user");
    store.commit("setUser", null);
  }
}
