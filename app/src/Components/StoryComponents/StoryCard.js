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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export const StoryCard = ({story, openModal}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="story-image"
          height="200"
          image={story.image}
          title="story-image"
          onClick={() => { 
            openModal()}}
        />
    
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {story.title}
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}

const mapStateToProps = state => {
    return{

    }
    
}

export default connect(mapStateToProps, {openModal})(StoryCard)