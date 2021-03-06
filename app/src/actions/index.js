import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";


export const CREATE_STORY = "CREATE_STORY";
export const GET_STORIES = "GET_STORIES";
export const UPDATE_STORY = "UPDATE_STORY";
export const DELETE_STORY = "DELETE_STORY";

export const CREATE_STORY_THEN = "CREATE_STORY_THEN";
export const GET_STORY_THEN = "GET_STORY_THEN";
export const UPDATE_STORY_THEN = "UPDATE_STORY_THEN";
export const DELETE_STORY_THEN = "DELETE_STORY_THEN";

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const OPEN_CREATE_MODAL = "OPEN_CREATE_MODAL";
export const CLOSE_CREATE_MODAL = "CLOSE_CREATE_MODAL";


export const handleGetStories = () => (dispatch) => {
  dispatch({ type: GET_STORIES });
  axiosWithAuth()
    .get("/api/posts")
    .then((res) => {
      dispatch({ type: GET_STORY_THEN, payload: res.data });
      // console.log(res)
    });
};

//needs to be finished
export const makeStory = (newStory) => (dispatch) => {
    
  console.log("action dispatching");
  dispatch({ type: CREATE_STORY });
  axiosWithAuth()
    .post("/api/posts", newStory)
    .then((res) => {
      console.log(res);
      dispatch({ type: CREATE_STORY_THEN, payload:newStory});
      
    })
    .catch((err) => console.log(err));
};

//needs to be finished
export const handleUpdateStory = (id, updatedStory) => (dispatch) => {
  // dispatch({type: UPDATE_STORY})
  axiosWithAuth()
    .put(`/api/posts/${id}`, updatedStory)
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATE_STORY_THEN, payload:updatedStory });
    })
    .catch((err) => console.log(err));
};

export const handleDeleteStory = (id) => (dispatch) => {
  // dispatch({type: UPDATE_STORY})
  axiosWithAuth()
    .delete(`/api/posts/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: DELETE_STORY_THEN, });
    })
    .catch((err) => console.log(err));
};

export const openModal = (id) => (dispatch) => {
  console.log("openModal happening", { id });
  dispatch({ type: OPEN_MODAL, payload: id });
};

export const closeModal = () => (dispatch) => {
  dispatch({ type: CLOSE_MODAL });
};

export const openCreateModal = () => (dispatch) => {
dispatch({type: OPEN_CREATE_MODAL})
}
export const closeCreateModal = () => (dispatch) => {
    dispatch({type: CLOSE_CREATE_MODAL})
    }