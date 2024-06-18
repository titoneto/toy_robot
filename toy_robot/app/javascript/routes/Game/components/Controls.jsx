import React, { useState } from "react";
import { Button, Grid, TextField, Select, MenuItem, FormControl } from '@material-ui/core';
import { useRobotContext } from '../../../context/RobotContext';

const Controls = () => {
    const { moveRobot, leftRobot, rightRobot, placeRobot } = useRobotContext();
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [facing, setFacing] = useState('NORTH');

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item>
                <Button variant="contained" color="primary" onClick={moveRobot}>
                    Move Robot
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" onClick={leftRobot}>
                    Left
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" onClick={rightRobot}>
                    Right
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" onClick={() => placeRobot(x, y, facing)}>
                    Place Robot
                </Button>
                <TextField
                    placeholder="X:"
                    variant="outlined"
                    type="number"
                    size="small"
                    value={x}
                    onInput={e => setX(Number(e.target.value))}
                    inputProps={{ min: 0, max: 4 }}
                />
                <TextField
                    placeholder="Y:"
                    variant="outlined"
                    type="number"
                    size="small"
                    value={y}
                    onInput={e => setY(Number(e.target.value))}
                    inputProps={{ min: 0, max: 4 }} />
                <FormControl variant="outlined" size="small">
                    <Select
                        value={facing}
                        onChange={e => {
                            setFacing(e.target.value);
                        }}
                    >
                        <MenuItem value={'NORTH'}>NORTH</MenuItem>
                        <MenuItem value={'SOUTH'}>SOUTH</MenuItem>
                        <MenuItem value={'EAST'}>EAST</MenuItem>
                        <MenuItem value={'WEST'}>WEST</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default Controls;