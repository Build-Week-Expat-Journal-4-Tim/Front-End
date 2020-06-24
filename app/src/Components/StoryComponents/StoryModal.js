import React, {useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux'
import { closeModal } from '../../actions'
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    height:400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const  StoryModal = ({modalState, closeModal, stories,storyid}) => {

  console.log(stories)
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

return(
    <div>
        {stories.map(story => {
            if(story.id === storyid){
                return(
            
                        <Modal
        // key={story.id}
        open={modalState}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        onClose={() => closeModal()}
      >
        <div style={modalStyle} className={classes.paper}>
        <h2>{console.log(modalState)}</h2>
      <h2 id="simple-modal-title">{story.title}</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      {/* <StoryModal /> */}
    </div>
      </Modal>

                )
            }
        })}
    </div>
)
 


}

const mapStateToProps = state => {
    return{
        modalState: state.modalState,
        stories: state.stories,
        storyid: state.storyid
    }
    
}

export default connect(mapStateToProps, {closeModal})(StoryModal)
