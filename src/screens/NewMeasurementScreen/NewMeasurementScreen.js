import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMeasurement } from '../../../redux/actions/MeasurementsActions';

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import randomLocation from 'random-location'

// to simulate the Mock GPS, we use a random location generator 
// that requires coordinates (in Lat Lng) of a starting point as the center 
// and the radius in meters around that point as seen below:

// static radom location to as center - Twitter HQ ;-)
const P = {
  latitude: 37.7768006,
  longitude: -122.4187928
}

const R = 50000 // radius around set location - in meters 



const NewMeasurementScreen = ({ addMeasurement }) => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [measurementName, setName] = useState('');
  const [pointA, setPointA] = useState('');
  const [pointB, setPointB] = useState('');

  // Round Coordinate Points to 2 decimal places
  const roundTo2Decimal = (num) => Math.round(num * 100) / 100;

  // Format the button label
  const formatLabel = ({ latitude, longitude }) => {
    return `Lat: ${roundTo2Decimal(latitude)}, Lng: ${roundTo2Decimal(longitude)}`;
  }

  const onPointAPressed = () => {
    setPointA(randomLocation.randomCirclePoint(P, R))
  }

  const onPointBPressed = () => {
    setPointB(randomLocation.randomCirclePoint(P, R))
  }

  const onSavePressed = () => {
    if (!measurementName || !pointA || !pointB) return; // validation

    addMeasurement({
      name: measurementName,
      distance: Math.floor(randomLocation.distance(pointA, pointB) / 1000) //calculate distance between using library - in km
    });

    navigation.navigate('Main'); // route back to the Main Screen
  };

  return (
    <ScrollView>
      <View style={[styles.root, { minHeight: height * 0.9 }]}>
        <Text style={styles.screenTitle}>New Measurement</Text>
        <View style={styles.list}>
          <Input
            label="Name"
            value={measurementName}
            setValue={setName}
            placeholder="Name of measurement *"
          />

          <Text style={styles.label}>Point A: </Text>
          <Button
            type="TERTIARY"
            onPress={onPointAPressed}
            text={pointA === '' ? "Record GPS Location" : formatLabel(pointA)}
          />

          <Text style={styles.label}>Point B: </Text>
          <Button
            type="TERTIARY"
            onPress={onPointBPressed}
            text={pointB === '' ? "Record GPS Location" : formatLabel(pointB)}
          />
        </View>

        <Button type={measurementName && pointA && pointB ? "PRIMARY" : "SECONDARY"} onPress={onSavePressed} text="Save" />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  screenTitle: {
    marginVertical: 20,
    color: '#ff9800',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  screenSubTitle: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 17,
    justifyContent: 'center',
  },
  list: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  squareCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: 'black'
  }
});


const mapStateToProps = (state) => {
  const { measurements } = state
  return { measurements }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addMeasurement,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewMeasurementScreen);
