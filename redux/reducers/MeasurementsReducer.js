import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [

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

      return newState;

    case 'DELETE_MEASUREMENT':
      const measurements = state.current;

      const index = action.payload;

      if (index > -1) { // only splice array when item is found
        measurements.splice(index, 1); // 2nd parameter means remove one item only
      }

      return { current: measurements };

    case 'FETCH_MEASUREMENTS':
      return state;

    default:
      return state
  }
};

export default combineReducers({
  measurements: measurementsReducer
});

