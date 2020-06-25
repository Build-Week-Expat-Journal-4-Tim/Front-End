import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import { makeStory,closeCreateModal,closeModal } from "../../actions";
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
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

 const CreateStoryModal = ({ makeStory, createModalState,closeCreateModal,closeModal }) => {
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

  function rand() {
    let num = Math.round(Math.random())
    let newNum = num + 1
    return newNum
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const user_id = window.localStorage.getItem("userId")
    console.log(user_id)
    const theStory = {
      description: newStory.description,
      image: newStory.image,
      location: newStory.location,
      title: newStory.title,
      user_id: user_id,
    };
    console.log({theStory});
   makeStory(theStory);
   setNewStory(initialValues)
   closeCreateModal()
  };

  return (
    <div>
      <Modal
        className="createModalStory"
        // key={story.id}
        open={createModalState}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        onClose={() => closeCreateModal()}
      >
        <div style={modalStyle} className={classes.paper}>
          <form>
            <button onClick={handleSubmit}>Click me</button>
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
            />

            <input
              type="text"
              name="image"
              placeholder="image URL"
              onChange={handleChanges}
              value={newStory.image}
            />


          </form>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    createModalState: state.createModalState
  };
};

export default connect(mapStateToProps, { makeStory, closeCreateModal, closeModal })(CreateStoryModal);
