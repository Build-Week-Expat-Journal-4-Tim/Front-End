import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { openModal } from '../../actions'
import { StoryModal } from './StoryModal';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export const StoryCard = ({story, openModal,modalState}) => {
  const classes = useStyles();
// console.log(story)

  return (
      <div>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="story-image"
            height="200"
            image={story.image}
            title="story-image"
            onClick={() => { 
              openModal(story.id)}}
          />

      
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {story.title}
            </Typography>
          </CardContent>
        </CardActionArea>
       
      </Card>
    </div>
  
  );
}


const mapStateToProps = state => {
    return{
        modalState: state.modalState,
    }
    
}

export default connect(mapStateToProps, {openModal})(StoryCard)