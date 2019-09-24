import history from "../../history";

import {
  FETCH_CLIENTS,
  SIGN_IN,
  LOG_IN,
  LOG_OUT,
  FETCH_POSTS,
  FETCH_POST,
  CREATE_NEW_POST,
  EDIT_POST,
  DELETE_POST
} from "./types";
import clients from "../../apis/clientsApi";

export const add = () => {
  return {
    type: "ADD",
    payload: 1
  };
};

export const mult = num => {
  return {
    type: "MULT",
    payload: num
  };
};

export const divide = num => {
  return {
    type: "DIVIDE",
    payload: num
  };
};

export const set = num => {
  return {
    type: "SET",
    payload: num
  };
};

export const reset = () => {
  return {
    type: "RESET",
    payload: 0
  };
};

export const setDate = date => {
  return {
    type: "SET_DATE",
    date
  };
};

export const signIn = formValues => async dispatch => {
  const response = await clients.post("/clients", { ...formValues });
  dispatch({ type: SIGN_IN, payload: response.data });
  dispatch(logIn(formValues.userId));
  history.push("/");
};

export const logIn = userId => async (dispatch, getState) => {
  const currentUserLogin = await getState().clients.find(
    client => client.userId === userId
  ).login;
  dispatch({
    type: LOG_IN,
    currentUserId: userId,
    currentUserLogin: currentUserLogin
  });

  history.push("/");
};

export const logOut = () => async dispatch => {
  dispatch({
    type: LOG_OUT
  });
  history.push("/");
};

export const fetchClients = () => async dispatch => {
  const response = await clients.get("/clients");

  dispatch({ type: FETCH_CLIENTS, payload: response.data });
};

export const createNewPost = formValues => async dispatch => {
  const response = await clients.post("/posts", { ...formValues });
  dispatch({ type: CREATE_NEW_POST, payload: response.data });
  history.push("/posts");
};

export const fetchPost = (id) => async dispatch => {
    const response = await clients.get(`/posts/${id}`);
  
    dispatch({ type: FETCH_POST, payload: response.data });
  };
  


export const fetchPosts = () => async dispatch => {
    const response = await clients.get("/posts");
  // console.log(response.data)
    dispatch({ type: FETCH_POSTS, payload: response.data });
  };
  

export const editPost = (id, formValues) => async dispatch => {
  const response = await clients.patch(`/posts/${id}`, {id: id,...formValues });
 
  dispatch({ type: EDIT_POST, payload: { ...response.data, id: id }});
 
  history.push("/posts")
}


export const deletePost = (id) => async dispatch => {
  await clients.delete(`/posts/${id}`);

  dispatch({ type: DELETE_POST, payload: id });
};