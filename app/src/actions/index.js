import axiosWithAuth  from '../utils/axiosWithAuth'

export const CREATE_STORY = 'CREATE_STORY'
export const GET_STORIES = 'GET_STORIES'
export const UPDATE_STORY = 'UPDATE_STORY'
export const DELETE_STORY = 'DELETE_STORY'

export const CREATE_STORY_THEN = 'CREATE_STORY_THEN'
export const UPDATE_STORY_THEN = 'UPDATE_STORY_THEN'
export const DELETE_STORY_THEN = 'DELETE_STORY_THEN'
export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

//needs to be finished
export const handleCreateStory = (newStory) => dispatch => {
    dispatch({type: CREATE_STORY})
    axiosWithAuth()
        .post('url', newStory)
            .then(res => {
                console.log(res)
                dispatch({type:CREATE_STORY_THEN, payload: newStory})
            })
            .catch(err => console.log(err))
}

//needs to be finished
export const handleUpdateStory = (id) => dispatch => {
    // dispatch({type: UPDATE_STORY})
    axiosWithAuth()
        .put(`url/api/${id}`)
            .then(res => {
                console.log(res)
                dispatch({type:UPDATE_STORY_THEN, payload:res })
            })
            .catch(err => console.log(err))
}

export const handleDeleteStory = (id) => dispatch => {
    // dispatch({type: UPDATE_STORY})
    axiosWithAuth()
        .delete(`url/api/${id}`)
            .then(res => {
                console.log(res)
                dispatch({type:DELETE_STORY_THEN, payload:res })
            })
            .catch(err => console.log(err))
}

export const openModal = () => dispatch => {
       dispatch({type: OPEN_MODAL})
   
}

export const closeModal = () => dispatch => {
    dispatch({type: CLOSE_MODAL})
}