import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import SmallCard from '../../components/SmallCard';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const FarmsScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const measurements = [
    { name: "Farm 1", distance: "3km" },
    { name: "House Distance", distance: "0.7km" },
    { name: "The Walk", distance: "1.19km" },
  ];

  // const measurements = [];

  const onLoginPressed = () => {
    // TODO: add logic
    navigation.navigate('Main');
  };

  return (
    <ScrollView>
      <View style={[styles.root, { minHeight: height * 0.9 }]}>
        <Text style={styles.screenTitle}>Measurements</Text>
        <View style={styles.list}>
          {!measurements.length ? (
            <Text style={styles.screenSubTitle}>You have no measurements! Click "New Measurement" to begin.</Text>
          ) : (
            measurements.map((measurement) => (
              <SmallCard
                bgColor="#D9E7E5"
                title={measurement.name}
                subtitle={measurement.distance}
              />
            ))
          )}
        </View>

        <Button onPress={onLoginPressed} text="New Measurement" />

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

export default FarmsScreen;
