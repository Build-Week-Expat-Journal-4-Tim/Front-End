import { CREATE_STORY, CREATE_STORY_THEN, UPDATE_STORY_THEN, DELETE_STORY_THEN } from "../actions"

const initialState= {
    stories: [],
    isFetchingData: false,

}

export const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case CREATE_STORY: 
            return {
                ...state,
                isFetchingData:true,
            }
            case CREATE_STORY_THEN:
            return {
                ...state,
                stories: [action.payload, ...state.stories]
            }
            case UPDATE_STORY_THEN:
                return {
                    //needs to be finished with data
                    ...state,
                    stories:[]
                }
            case DELETE_STORY_THEN:
                return{
                    ...state,
                    stories:[]
                }
            default:
                return state

    }
}