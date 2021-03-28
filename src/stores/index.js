export default function (Vuex) {
  return new Vuex.Store({
    state: {
      time: new Date(),
      userTime: undefined,
      live: true,
      interval: undefined
    },
    mutations: {
      updateTime (state) {
        if (!state.userTime) {
          state.time = new Date();
        }
      }
    },
    actions: {
      tick ({ commit, state }) {
        if (!state.interval) {
          state.interval = setInterval(commit.bind(null, 'updateTime'), 1000);
        }

        if (state.live && state.userTime) {
          state.live = false;
          clearInterval(state.interval);
        }
      }
    }
  });
}
