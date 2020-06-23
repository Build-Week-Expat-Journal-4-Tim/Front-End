import { CREATE_STORY, CREATE_STORY_THEN, UPDATE_STORY_THEN, DELETE_STORY_THEN, OPEN_MODAL, CLOSE_MODAL } from "../actions"

const initialState= {
    stories: [{
        id:1,
        title: 'some title',
        storyText: 'some text',
        location: 'USA',
        image: 'https://picsum.photos/200'
    },
    {
        id:2,
        title: 'some title2',
        storyText: 'some text',
        location: 'USA',
        image: 'https://picsum.photos/200'
    },
    {
        id:3,
        title: 'some title3',
        storyText: 'some text',
        location: 'USA',
        image: 'https://picsum.photos/200'
    }],
    isFetchingData: false,
    openModal: false

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
            case OPEN_MODAL:
               
                return{
                    ...state,
                    openModal: true
                }
                case CLOSE_MODAL:
                    
                    return{
                        ...state,
                        openModal: false
                    }
            default:
                return state

    }
}

// look up aria