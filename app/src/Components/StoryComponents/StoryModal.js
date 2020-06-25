import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import { closeModal, handleDeleteStory } from "../../actions";
import StoryModalForm from "./StoryModalForm";
function rand() {
  return Math.round(Math.random());
}

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
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    width: "80%",
    height: "80%",
    margin: "0 auto",
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: '#f5f6fa',
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxHeight:'calc(100vh - 210px)',
    overflowY:'auto'
  },
}));

export const StoryModal = ({
  modalState,
  closeModal,
  stories,
  storyid,
  handleDeleteStory,
}) => {
  const [editStory, setEditStory] = useState(false);

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const handleDelete = (id, e) => {
    // e.preventDefault()
    handleDeleteStory(id);
  };

 

  return (
    <div>
      {stories.map((story) => {
        if (story.id === storyid) {
         
          return (
            
            <Modal
            className='modalDiv'
              // key={story.id}
              open={modalState}
              // open={true}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              onClose={() => {
                setEditStory(false);
                closeModal();
              }}
            >
              <div style={modalStyle} className={classes.paper}>
                <div className="storyModalDiv">
                  
                  <h1 id="simple-modal-title">{story.title}</h1>
                  <p id="simple-modal-description">{story.description}</p>
                  <div></div>
                  <img src={story.image} />
                  <div className='storyModalButtons'>
                    <button onClick={() => setEditStory(true)}>
                      Edit Form
                    </button>
                    <button onClick={() => handleDelete(story.id)}>
          
                      Delete Post
                    </button>
                  </div>
                  {editStory && (
                    <StoryModalForm
                      editStory={editStory}
                      setEditStory={setEditStory}
                      story={story}
                    />
                  )}
                </div>
              </div>
            </Modal>
          );
        }
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modalState: state.modalState,
    stories: state.stories,
    storyid: state.storyid,
  };
};

export default connect(mapStateToProps, { closeModal, handleDeleteStory })(
  StoryModal
);
