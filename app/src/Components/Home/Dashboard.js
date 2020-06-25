import React from 'react'
import StoryList from '../StoryComponents/StoryList'
import StoryModal  from '../StoryComponents/StoryModal'
import { connect } from 'react-redux'
import  CreateStoryModal  from '../StoryComponents/CreateStoryModal'
import { openCreateModal } from '../../actions'
import { useHistory } from 'react-router'

export const Dashboard = ({openCreateModal}) => {
    const welcomeMessage = window.localStorage.getItem('welcomeMessage')
const history = useHistory()
    const handleLogout = () => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('userId')
        window.localStorage.removeItem('welcomeMessage')
        history.push('/login')
    }
console.log(welcomeMessage)
    return(
        <div>
            <div className='dashboardText'>
            <h1>Dashboard</h1>
            <h2>{welcomeMessage}</h2>
            </div>
            <div className='dashboardDiv'>
            <button onClick={() => openCreateModal()}>Create Story</button>
            <button onClick={handleLogout}>Logout</button>
            </div>
           
            <CreateStoryModal/>
            
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