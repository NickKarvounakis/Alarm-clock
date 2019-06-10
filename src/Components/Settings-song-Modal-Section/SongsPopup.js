import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

import tileData from './tileData.js';
import Button from '@material-ui/core/Button';
import constants from '../../store/constants'

import { connect } from 'react-redux'

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
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Sound HUB</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.id}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <Button size="small" variant="contained" color="secondary" className={classes.button} onClick={() => props.song_picker(tile.mp3_name)}>
                       CHOOSE
                </Button>
              }
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
        console.log(name)
        dispatch({type:constants.SONG_SET,value:name})
    }
  }
}


export default  connect(mapStateToProps,mapDispatchToProps)(Cards)
