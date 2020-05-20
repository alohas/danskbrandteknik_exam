import { compose, applyMiddleware, createStore } from "redux";
import { responsiveStoreEnhancer } from "redux-responsive";

import rootReducer from "./reducers";

export default (initialState) => {
  const middleware = [];

  const createReduxStore =
    window.__REDUX_DEVTOOLS_EXTENSION__ != null
      ? compose(
          applyMiddleware(...middleware),
          responsiveStoreEnhancer,
          window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      : compose(applyMiddleware(...middleware), responsiveStoreEnhancer);

  const store = createReduxStore(createStore)(rootReducer, initialState);

  return store;
};
