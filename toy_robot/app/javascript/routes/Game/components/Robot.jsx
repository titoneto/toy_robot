import React from "react";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    robot: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
    },
    robotUp: {
        borderWidth: '0 10px 17.3px 10px',
        borderColor: 'transparent transparent #007bff transparent',
    },
    robotDown: {
        borderWidth: '17.3px 10px 0 10px',
        borderColor: '#007bff transparent transparent transparent',
    },
    robotLeft: {
        borderWidth: '10px 17.3px 10px 0',
        borderColor: 'transparent #007bff transparent transparent',
    },
    robotRight: {
        borderWidth: '10px 0 10px 17.3px',
        borderColor: 'transparent transparent transparent #007bff',
    },
}));

const Robot = ({ facing }) => {
    const classes = useStyles();

    let robotClass;
    switch (facing) {
        case 'NORTH':
            robotClass = classes.robotUp;
            break;
        case 'SOUTH':
            robotClass = classes.robotDown;
            break;
        case 'EAST':
            robotClass = classes.robotRight;
            break;
        case 'WEST':
            robotClass = classes.robotLeft;
            break;
        default:
            robotClass = classes.robotUp; 
            break;
    }
    return <div className={`${classes.robot} ${robotClass}`}></div>;
}

export default Robot;