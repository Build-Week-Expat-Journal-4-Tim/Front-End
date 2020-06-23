import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import StoryCard from './StoryCard'
import StoryModal from './StoryModal'

const StoryList = (props) => {


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

export default connect(mapStateToProps, {})(StoryList)


