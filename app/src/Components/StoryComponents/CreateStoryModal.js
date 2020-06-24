import React, {useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const useStyles = makeStyles((theme) => ({
  paper: {
    display:'flex',
    justifyContent:'center',
    alignSelf:'center',
    position: 'absolute',
    width: '80%',
    height:'80%',
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const  CreateStoryModal = () => {

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

return(
    <div>
    <Modal className='createModalStory'
    // key={story.id}
    open={false}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    // onClose={}
  >
    <div style={modalStyle} className={classes.paper}>
    <form>
        <input
        type='text'
        name='title'
        placeholder='Title'/>

        <input
        type='text'
        name='location'
        placeholder='Location'/>

        <textarea
        type='text'
        name='storyBody'
        placeholder='Share your story'
        />

        <input
        type='text'
        name='image'
        placeholder='image URL'/>
    </form>
</div>
  </Modal>
  </div>
    )
}

export default (CreateStoryModal)
