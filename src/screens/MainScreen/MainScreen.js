import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteMeasurement } from '../../../redux/actions/MeasurementsActions';

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import SmallCard from '../../components/SmallCard';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';


const MainScreen = ({ deleteMeasurement, measurements }) => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onNewMeasurementPressed = () => {
    navigation.navigate('NewMeasurement');
  };


  return (
    <ScrollView>
      <View style={[styles.root, { minHeight: height * 0.9 }]}>
        <Text style={styles.screenTitle}>Measurements</Text>
        <View style={styles.list}>
          {!measurements.current.length ? (
            <Text style={styles.screenSubTitle}>You have no measurements! Click "New Measurement" to begin.</Text>
          ) : (
            measurements.current.map((measurement, index) => (
              <SmallCard
                key={index}
                bgColor="#D9E7E5"
                title={measurement.name}
                subtitle={measurement.distance}
                onDelete={() => deleteMeasurement(index)}
              // onEdit={}
              />
            ))
          )}
        </View>

        <Button onPress={onNewMeasurementPressed} text="New Measurement" />

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
});

const mapStateToProps = (state) => {
  const { measurements } = state
  return { measurements }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    deleteMeasurement
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);