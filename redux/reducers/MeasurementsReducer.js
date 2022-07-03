import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [
    { name: "Farm 1", distance: "3km" },
    { name: "House Distance", distance: "0.7km" },
  ],
};

const measurementsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_MEASUREMENT':
      // Pulls current out of previous state
      // We do not want to alter state directly in case
      // another action is altering it at the same time
      const {
        current,
      } = state;

      // And put measurement in measurements.current
      current.push(action.payload);

      // Finally, update the redux state
      const newState = { current };

      console.warn(newState.current.length)


      return newState;

    default:
      return state
  }
};

export default combineReducers({
  measurements: measurementsReducer
});

