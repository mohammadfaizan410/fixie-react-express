import { createStore, action } from 'easy-peasy';

export const store = createStore({
  userStore: {},
  
    setUserStore: action((state, payload) => {
      state.userStore = payload;
    }),
  });