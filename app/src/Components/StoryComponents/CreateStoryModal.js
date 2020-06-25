import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import { makeStory, closeCreateModal, closeModal } from "../../actions";
import Button from "@material-ui/core/Button";

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

const CreateStoryModal = ({
  makeStory,
  createModalState,
  closeCreateModal,
  closeModal,
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const initialValues = {
    description: "",
    image: "",
    location: "",
    title: "",
  };
  const [newStory, setNewStory] = useState(initialValues);

  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewStory({ ...newStory, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user_id = window.localStorage.getItem("userId");
    console.log(user_id);
    const theStory = {
      description: newStory.description,
      image: newStory.image,
      location: newStory.location,
      title: newStory.title,
      user_id: user_id,
    };
    console.log({ theStory });
    makeStory(theStory);
    setNewStory(initialValues);
    closeCreateModal();
  };

  return (
    <div className="bigStoryModalCreateFormDiv">
      <Modal
        // key={story.id}
        open={createModalState}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        onClose={() => closeCreateModal()}
      >
        <div style={modalStyle} className={classes.paper}>
          <div className="storyModalCreateFormText">
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
  makeStory,
  closeCreateModal,
  closeModal,
})(CreateStoryModal);
