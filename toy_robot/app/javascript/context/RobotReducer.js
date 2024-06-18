import  * as types from './RobotTypes';

const robotReducer = (state, action) => {
    switch (action.type) {
      case types.MOVE_ROBOT_REQUEST:
      case types.LEFT_ROBOT_REQUEST:
      case types.RIGHT_ROBOT_REQUEST:
      case types.PLACE_ROBOT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case types.MOVE_ROBOT_SUCCESS:
      case types.LEFT_ROBOT_SUCCESS:
      case types.RIGHT_ROBOT_SUCCESS:
      case types.PLACE_ROBOT_SUCCESS:
        return {
          ...state,
          robot: action.payload.robot,
          loading: false,
        };
      case types.MOVE_ROBOT_FAILURE:
      case types.LEFT_ROBOT_FAILURE:
      case types.RIGHT_ROBOT_FAILURE:
      case types.PLACE_ROBOT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export default robotReducer;
  