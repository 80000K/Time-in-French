export default function (Vuex) {
  return new Vuex.Store({
    state: {
      time: new Date()
    },
    mutations: {
      updateTime (state) {
        state.time = new Date();
      }
    },
    actions: {
      tick ({ commit }) {
        setInterval(commit.bind(null, 'updateTime'), 1000);
      }
    }
  });
}
