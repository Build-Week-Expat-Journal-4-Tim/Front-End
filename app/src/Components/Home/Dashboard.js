import React from 'react'
import StoryList from '../StoryComponents/StoryList'
import StoryModal  from '../StoryComponents/StoryModal'
import { connect } from 'react-redux'
import  CreateStoryModal  from '../StoryComponents/CreateStoryModal'
import { openCreateModal } from '../../actions'

export const Dashboard = ({openCreateModal}) => {

    return(
        <div>
            <CreateStoryModal/>
            <button onClick={() => openCreateModal()}>Create Story</button>
            <StoryList/>
            <StoryModal/>
        </div>
    )
}

const mapStateToProps = state => {
    return{

    }
}


export default connect(mapStateToProps, {openCreateModal})(Dashboard)