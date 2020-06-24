import React from 'react'
import StoryList from '../StoryComponents/StoryList'
import StoryModal  from '../StoryComponents/StoryModal'
import { connect } from 'react-redux'
import { CreateStoryModal } from '../StoryComponents/CreateStoryModal'

export const Dashboard = () => {

    return(
        <div>
            <CreateStoryModal/>
            <StoryList/>
            <StoryModal/>
        </div>
    )
}


export default Dashboard