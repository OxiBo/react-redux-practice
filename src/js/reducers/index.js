import { combineReducers } from "redux";
import moment from "moment";
import { reducer as formReducer } from "redux-form";
import { FETCH_CLIENTS, SIGN_IN, LOG_IN, LOG_OUT, FETCH_POSTS, FETCH_POST, CREATE_NEW_POST } from "../actions/types";

const addDefaultState = { sum: 0, addedNum: null };

const addReducer = (state = addDefaultState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        sum: state.sum + action.payload,
        addedNum: action.payload
      };
    default:
      return state;
  }
};

const multDefaultState = {
  res: 1,
  by: 1
};

const multReducer = (state = multDefaultState, action) => {
  switch (action.type) {
    case "MULT":
      return {
        res: state.res * state.by,
        by: state.by
      };
    case "DIVIDE":
      return {
        res: state.res / state.by,
        by: state.by
      };
    case "SET":
      return {
        res: state.res,
        by: action.payload
      };
    case "RESET":
      return multDefaultState;
    default:
      return state;
  }
};

const dateDefaultState = {
  date: moment().format("YYYY-MM-DD")
};
const dateReducer = (state = dateDefaultState, action) => {
  switch (action.type) {
    case "SET_DATE":
      return {
        date: action.date
      };
    default:
      return state;
  }
};

const calcDefaultState = {
  formula: "",
  res: null
};

const calcReducer = (state = calcDefaultState, action) => {
  switch (action.type) {
    case "MULTIPLY":
      return {
        ...state,
        res: eval(state.formula)
      };

    case "SET_NUM":
      return {
        ...state,
        formula: state.formula.concat(action.num)
      };

    case "RESET":
      return {
        ...state,
        res: null,

        formula: ""
      };
    default:
      return state;
  }
};

const clientReducerDefaultState = [];
const clientsReducer = (state = clientReducerDefaultState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return [...state, action.payload];
    case FETCH_CLIENTS:
      return [...action.payload];
    default:
      return state;
  }
};

const authReducerDefaultState = {
  isLoggedIn: null,
  currentUserId: null,
  currentUserLogin: ""
};

const authReducer = (state = authReducerDefaultState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        currentUserId: action.currentUserId,
        currentUserLogin: action.currentUserLogin
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        currentUserId: null
      };
    default:
      return state;
  }
};


const postsReducerDefaultState = [];

const postsReducer = (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case CREATE_NEW_POST:
      return [...state, action.payload];
    case FETCH_POSTS:
      return [...action.payload];
      case FETCH_POST:
        return [...state, action.payload]
    default:
      return state;
  }
};


export default combineReducers({
  add: addReducer,
  mult: multReducer,
  date: dateReducer,
  multiply: calcReducer,
  form: formReducer,
  clients: clientsReducer,
  auth: authReducer,
  posts: postsReducer
});
