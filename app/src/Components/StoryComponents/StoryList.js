import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import StoryCard from './StoryCard'

const StoryList = (props) => {


    return (
        <div>
            <div>
                {props.stories.map(story => (
                    <StoryCard story={story}/>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        stories: state.stories
    }
}

export default connect(mapStateToProps, {})(StoryList)