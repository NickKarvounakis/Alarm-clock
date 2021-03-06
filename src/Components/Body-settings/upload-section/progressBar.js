import React from 'react';
import { connect } from 'react-redux'

//JS File Import
import CustomizedSnackbars from './snackbar'

// Material UI Imports
import { makeStyles,withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  button:{
    backgroundImage: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)!important',
    borderRadius: 3,
    border: 0,
    color: 'white',
  },
  label:{
    textTransform: 'capitalize',
  },
});

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundImage: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)!important',
  },
  barColorPrimary: {
    backgroundColor: '#00A480',
  },
})(LinearProgress);

const LinearDeterminate = props =>  {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <ColorLinearProgress  value={props.progress} variant="determinate"/>
      <CustomizedSnackbars progress={props.progress} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    progress:state.upload_progress
  }
}


export default connect(mapStateToProps)(LinearDeterminate)
