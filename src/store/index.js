import { compose, createStore } from 'redux';
import { combineReducers } from 'redux';

// Redux
const defaultState = {
  title: 'The den is dark'
};

// Reducers - lazy just put it here
const app = (state = defaultState, action) => {
  switch (action.type) {
    case 'ENTER_THE_DRAGON':
      return {
        ...state,
        title: action.title
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app
});

// Dont worry about exposing redux-dev tools this whole repo is dev anyway
const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
