// let composeEnhancers = compose;

// if (__DEV__) {
//   composeEnhancers =
//     (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// }
// const storeConfig = () => {
//   return createStore(reducers, composeEnhancers);
// };

// export default storeConfig;

// export type AppState = ReturnType<typeof storeConfig>;

import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import userReducer from './reducers/user';

const reducers = combineReducers({
  user: userReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type StoreState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
export type GetState = () => StoreState;

export default store;
