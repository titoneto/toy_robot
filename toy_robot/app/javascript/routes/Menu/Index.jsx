import React from "react";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: `80vh`
    },
    
    button: {
        backgroundColor: '#3498db'
    }
  }));

const Menu = () => {
    const classes = useStyles();

    return <div className={classes.container}>
        <Button variant="outlined" color="primary" className={classes.button}>
            <Link to='/app/game'> Iniciar </Link>
        </Button>
    </div>
}

export default Menu;