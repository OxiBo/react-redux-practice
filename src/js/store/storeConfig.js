import { createStore, applyMiddleware, compose  } from "redux";
import reduxThunk from 'redux-thunk'

import reducers from "../reducers";

export default () => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers, // redux dev tool extention -https://github.com/zalmoxisus/redux-devtools-extension#usage
    composeEnhancers(applyMiddleware(reduxThunk)));

  return store;
};
