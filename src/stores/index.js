export default function (Vuex) {
  return new Vuex.Store({
    state: {
      time: new Date()
    },
    mutations: {
      tick (state) {
        state.time = new Date();
      }
    }
  });
}
