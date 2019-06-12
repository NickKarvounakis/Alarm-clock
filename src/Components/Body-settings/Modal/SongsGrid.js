import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import tileData from '../tileData.js';
import Button from '@material-ui/core/Button';
import constants from '../../../store/constants'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'

import testCreator from '../Actions/action-creator'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


function Cards(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={'180'} className={classes.gridList} cols={2}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">
            Sound HUB
            <div>
            <Typography variant="h6">Annoyingness ranges from 1-10</Typography>
            <Typography  className='not-loud'>0-4:Mild(Not loud at all)</Typography>
            <Typography  className='loud'>5-8:Loud(it's decently loud :)</Typography>
            <Typography  className='extremely-loud'>8-10:Extremely Loud </Typography>
            </div>
          </ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.loudness}>

              <img src={tile.img} alt={tile.title} />
              <button className="btn">CLICK ME</button>
            <GridListTileBar
              title={tile.title}
              subtitle={<span>Annoyingness:<span className={tile.loud_class}>{tile.loudness}</span></span>}
              actionIcon={
                <div>
                <Grid container direction="column">
                  <Grid item>
                    <Button style={{maxWidth: '60px', maxHeight: '25px', minWidth: '30px', minHeight: '10px'}}  variant="contained" color="secondary" className={classes.button} onClick={() => props.song_picker(tile)}>
                           <Typography style={{fontSize:'0.7rem'}}>CHOOSE</Typography>
                    </Button>
                  </Grid>
                  <Grid item >
                    <Button style={{maxWidth: '60px', maxHeight: '25px', minWidth: '30px', minHeight: '10px'}}  variant="contained" color="primary" className={classes.button} onClick={() => props.song_picker(tile)}>
                           <Typography style={{fontSize:'0.7rem'}}>TRY</Typography>
                    </Button>
                  </Grid>
                </Grid>
                </div>
              }
              actionPosition={'right'}
            />

          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}


const mapStateToProps = (state) => {
  console.log('state: ',state)
  return{
    song_name:state.song_name
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
      song_picker:(name) => {
        dispatch(testCreator(name))
    }
  }
}


export default  connect(mapStateToProps,mapDispatchToProps)(Cards)
