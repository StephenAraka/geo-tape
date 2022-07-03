import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMeasurement } from '../../../redux/actions/MeasurementsActions';

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const NewMeasurementScreen = ({ addMeasurement }) => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [measurementName, setName] = useState('');
  const [pointA, setPointA] = useState('');
  const [pointB, setPointB] = useState('');


  const onSavePressed = () => {
    if (!measurementName || !pointA || !pointB) return;

    addMeasurement({ name: "The Walk", distance: "1.19km" });

    navigation.navigate('Main');
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
          <Input
            label="Point A"
            value={pointA}
            setValue={setPointA}
            placeholder="Point A *"
          />
          <Input
            label="Point B"
            value={pointB}
            setValue={setPointB}
            placeholder="Point B *"
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
