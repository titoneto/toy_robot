// src/context/RobotContext.js
import React, { createContext, useContext, useReducer } from 'react';
import api from '../api';
import robotReducer from './RobotReducer';
import * as types from './RobotTypes';

const initialState = {
    robot: { x: null, y: null, facing: null},
    loading: false,
    error: null,
};

const RobotContext = createContext(initialState);

export const RobotProvider = ({ children }) => {
    const [state, dispatch] = useReducer(robotReducer, initialState);

    const moveRobot = async () => {
        dispatch({ type: types.MOVE_ROBOT_REQUEST });
        try {
            const response = await api.post('robots/move');
            dispatch({ type: types.MOVE_ROBOT_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: types.MOVE_ROBOT_FAILURE, payload: error.message });
        }
    };

    const leftRobot = async () => {
        dispatch({ type: types.LEFT_ROBOT_REQUEST });
        try {
            const response = await api.post('robots/left'); 
            dispatch({ type: types.LEFT_ROBOT_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: types.LEFT_ROBOT_FAILURE, payload: error.message });
        }
    };

    const rightRobot = async () => {
        dispatch({ type: types.RIGHT_ROBOT_REQUEST });
        try {
            const response = await api.post('robots/right');
            dispatch({ type: types.RIGHT_ROBOT_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: types.RIGHT_ROBOT_FAILURE, payload: error.message });
        }
    };

    const placeRobot = async (x, y, facing) => {
        dispatch({ type: types.PLACE_ROBOT_REQUEST });
        try {
            const response = await api.post('robots/place', { x, y, facing });
            dispatch({ type: types.PLACE_ROBOT_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: types.PLACE_ROBOT_FAILURE, payload: error.message });
        }
    };

    return (
        <RobotContext.Provider value={{
            state, moveRobot,
            leftRobot,
            rightRobot,
            placeRobot,
        }}>
            {children}
        </RobotContext.Provider>
    );
};

export const useRobotContext = () => useContext(RobotContext);
