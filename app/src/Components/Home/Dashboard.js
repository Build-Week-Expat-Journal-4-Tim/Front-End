import React from 'react'
import StoryList from '../StoryComponents/StoryList'
import StoryModal  from '../StoryComponents/StoryModal'
import { connect } from 'react-redux'
import  CreateStoryModal  from '../StoryComponents/CreateStoryModal'
import { openCreateModal } from '../../actions'
import { useHistory } from 'react-router'

export const Dashboard = ({openCreateModal}) => {
const history = useHistory()
    const handleLogout = () => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('userId')
        history.push('/login')
    }

    return(
        <div>
            <CreateStoryModal/>
            <button onClick={() => openCreateModal()}>Create Story</button>
            <button onClick={handleLogout}>Logout</button>
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