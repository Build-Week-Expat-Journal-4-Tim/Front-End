import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import StoryCard from './StoryCard'
import StoryModal from './StoryModal'
import { handleGetStories } from '../../actions'

const StoryList = (props) => {

    useEffect(() => {
        props.handleGetStories()
    },[])

    return (
        <div>
            <div>
                {props.stories.map(story => {
                    return(
                    <>
                  
                    <StoryCard story={story}/>
                
                    </>
                    )
                    
                })}
                
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        stories: state.stories,
        modalState: state.modalState
    }
}

export default connect(mapStateToProps, {handleGetStories})(StoryList)


