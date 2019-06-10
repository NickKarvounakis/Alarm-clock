import React from 'react'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';




import { red } from '@material-ui/core/colors';



import Modal from '@material-ui/core/Modal';

import Cards from './SongsPopup'




function getModalStyle() {
  const top = 50
  const left = 50
  return {
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}





const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  paper:{
    position: 'absolute',
   width: 400,
   backgroundColor: theme.palette.background.paper,
   boxShadow: theme.shadows[5],
   padding: theme.spacing(4),
   outline: 'none',
  }
}))


function Song_cards(props){
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
//   function handleExpandClick() {
//   setExpanded(!expanded);
//
// }



  const [open, setOpen] = React.useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
  <React.Fragment>
    <Box>
    <Grid container direction="column"  justify="flex-start" alignItems="flex-start" >
      <Grid item >
        <Typography gutterBottom>Select one of our own default songs!</Typography>
      </Grid >
      <Grid container direction="row" >
          <Grid item>
            <Button variant="contained" color="secondary" onClick={handleOpen}>Open Sounds</Button>
          </Grid>
          <Grid item >
              Default sound:{props.song_name}
          </Grid>
      </Grid>
    </Grid>
    </Box>

    <Modal    aria-labelledby="simple-modal-title"  aria-describedby="simple-modal-description"  open={open}  onClose={handleClose} >
    <div style={modalStyle} className={classes.paper}>
      <Cards />
    </div>
      </Modal>
  </React.Fragment>
)
}


const mapStateToProps = (state) => {
  console.log('state: ',state)
  return{
    song_name:state.song_name
  }
}

export default connect(mapStateToProps)(Song_cards)