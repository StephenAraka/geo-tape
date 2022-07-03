export const addMeasurement = (measurement) => (
  {
    type: 'ADD_MEASUREMENT',
    payload: measurement,
  }
);

export const deleteMeasurement = (id) => (
  {
    type: 'DELETE_MEASUREMENT',
    payload: id,
  }
);

export const getMeasurements = () => (
  {
    type: 'FETCH_MEASUREMENTS',
  }
);
