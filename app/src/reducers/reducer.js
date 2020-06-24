import { CREATE_STORY, CREATE_STORY_THEN, UPDATE_STORY_THEN, DELETE_STORY_THEN, OPEN_MODAL, CLOSE_MODAL, GET_STORY_THEN, GET_STORIES, OPEN_CREATE_MODAL, CLOSE_CREATE_MODAL, DELETE_STORY } from "../actions"

const initialState= {
    stories: [],
    isFetchingData: false,
    modalState: false,
    storyid: null,
    createModalState: false,

}

export const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case CREATE_STORY: 
        case GET_STORIES:
        case DELETE_STORY:
            return {
                ...state,
                isFetchingData:true,
            }
            case GET_STORY_THEN:
                return{
                    ...state,
                    stories: action.payload
                    
                }
            case CREATE_STORY_THEN:
            return {
                ...state,
                stories: [action.payload, ...state.stories ]
            }
            case UPDATE_STORY_THEN:
                return {
                    //needs to be finished with data
                    ...state,
                    stories:[action.payload, ...state.stories],
                    isFetchingData:false
                }
            case DELETE_STORY_THEN:

                return{
                    ...state,
                    stories:[...state.stories],
                    isFetchingData:false
                }
            case OPEN_MODAL:
                console.log('open modal case happening', )
                return{
                    
                    ...state,
                    modalState: true,
                    storyid:action.payload
                }
                
                case CLOSE_MODAL:
                    
                    return{
                        ...state,
                        modalState: false
                    }
                case OPEN_CREATE_MODAL:
                    return{
                        ...state,
                        createModalState:true
                    }
                case CLOSE_CREATE_MODAL:
                    return{
                        ...state,
                        createModalState:false
                    }
            default:
                return state

    }
}

// look up aria