import React, { useEffect } from "react";
import { connect } from "react-redux";
import StoryCard from "./StoryCard";
import { handleGetStories } from "../../actions";

const StoryList = (props) => {
  useEffect(() => {
    props.handleGetStories();
  }, [props.isFetchingData]);

  const checkId = window.localStorage.getItem("userId");

  return (
    <div className="storyListContainer">
      <div className="stories">
        {props.stories
          .slice(0)
          .reverse()
          .map((story) => {
            if (story.user_id == checkId) {
              return (
                <>
                  <StoryCard story={story} />
                </>
              );
            }
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    stories: state.stories,
    modalState: state.modalState,
    isFetchingData: state.isFetchingData,
  };
};

export default connect(mapStateToProps, { handleGetStories })(StoryList);
