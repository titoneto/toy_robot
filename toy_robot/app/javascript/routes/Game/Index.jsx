import React from "react";
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Robot from './components/Robot';
import Controls from "./components/Controls";
import { useRobotContext } from '../../context/RobotContext';

const useStyles = makeStyles((theme) => ({
  board: {
    width: '80vh',
    height: '80vh',
    display: 'flex',
    flexWrap: 'wrap',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px'
  },
  square: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Game = () => {
  const classes = useStyles();
  const { state } = useRobotContext();
  const { robot } = state;

  const rows = 5;
  const cols = 5;

  const renderSquares = () => {
    const squares = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const isLightSquare = (row + col) % 2 === 0;
        squares.push(
          <Box key={row + "-" + col} className={classes.square} style={{ height: `${100 / cols}%`, width: `${100 / rows}%`, backgroundColor: `${isLightSquare ? "#222" : "#999"}`, position: "relative" }} >
            {robot.x === col && robot.y === (rows-row-1) && <Robot facing={robot.facing} />}
            <div style={{ position: "absolute", top:10, left:20, color: "#fff" }}>{col + " - " + (rows-row-1)} </div>
          </Box>
        );
      }
    }
    return squares;
  };

  return (
    <Grid>
      <Controls />
      <Box className={classes.board}>
        {renderSquares()}
      </Box>
    </Grid>
  );
}

export default Game;