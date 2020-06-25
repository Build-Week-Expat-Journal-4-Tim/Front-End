import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import { handleUpdateStory, closeCreateModal, closeModal } from "../../actions";
import Button from "@material-ui/core/Button";

import closeArrow from "../../imgs/closeArrow.svg";

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
    backgroundColor: "#f5f6fa",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 8,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    width: "5rem",
    height: "3rem",
    margin: "3.5rem",
    fontSize: "0.8rem",
  },
}));

const StoryModalForm = ({
  handleUpdateStory,
  createModalState,
  closeCreateModal,
  editStory,
  setEditStory,
  story,
  closeModal,
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const initialValues = {
    description: story.description,
    image: story.image,
    location: story.location,
    title: story.title,
  };
  const [newStory, setNewStory] = useState(initialValues);

  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewStory({ ...newStory, [name]: value });
  };

  const handleGoBack = (e) => {
    setEditStory(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = window.localStorage.getItem("userId");
    console.log(id);
    const theStory = {
      description: newStory.description,
      image: newStory.image,
      location: newStory.location,
      title: newStory.title,
      user_id: id,
    };
    console.log("making a new story");
    handleUpdateStory(story.id, theStory);
    setNewStory(initialValues);
    setEditStory(false);
  };

  return (
    <div className="bigStoryModalFormDiv">
      <Modal
        // key={story.id}
        open={editStory}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        onClose={() => {
          setEditStory(false);
          closeModal();
        }}
      >
        <div style={modalStyle} className={classes.paper}>
          <div className="storyModalFormText">
            <img
              className="closeArrow"
              src={closeArrow}
              onClick={handleGoBack}
            />
            {/* <h1>EDIT STORY FORM</h1> */}
            <form>
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChanges}
                value={newStory.title}
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                onChange={handleChanges}
                value={newStory.location}
              />

              <textarea
                type="text"
                name="description"
                placeholder="Share your story"
                onChange={handleChanges}
                value={newStory.description}
                rows={30}
                cols={5}
              />

              <input
                type="text"
                name="image"
                placeholder="image URL"
                onChange={handleChanges}
                value={newStory.image}
              />

              <Button
                type="submit"
                className={classes.submit}
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    createModalState: state.createModalState,
  };
};

export default connect(mapStateToProps, {
  closeModal,
  handleUpdateStory,
  closeCreateModal,
})(StoryModalForm);
