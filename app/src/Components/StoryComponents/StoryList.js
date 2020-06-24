import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import StoryCard from './StoryCard'
import StoryModal from './StoryModal'
import { handleGetStories } from '../../actions'

const StoryList = (props) => {

    useEffect(() => {
        props.handleGetStories()
    },[props.isFetchingData])
console.log(props.stories)
    return (
        <div>
            <div>
                {props.stories.map(story => {
                    return(
                    <>
                    {/* {console.log(props.stories)} */}
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
        modalState: state.modalState,
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, {handleGetStories})(StoryList)


