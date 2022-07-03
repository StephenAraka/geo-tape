import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SmallCard from '../../components/SmallCard';
import { useNavigation } from '@react-navigation/native';

const FarmsScreen = () => {
  // const measurements = [
  //   { name: "Farm 1", distance: "3km" },
  //   { name: "House Distance", distance: "0.7km" },
  //   { name: "The Walk", distance: "1.19km" }
  // ];

  const measurements = [];

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.screenTitle}>Measurements</Text>
        {!measurements.length ? (
          <Text style={styles.screenSubTitle}>You have no measurements! Click "Start New Measurement" to begin.</Text>
        ) : (
          measurements.map((measurement) => (
            <SmallCard
              bgColor="#D9E7E5"
              title={measurement.name}
              subtitle={measurement.distance}
              text="Delete | Edit"
            />
          ))
        )}
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
    color: '#27AE60',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  screenSubTitle: {
    marginTop: 30,
    marginBottom: 10,
    paddingLeft: 18,
    color: '#000',
    fontSize: 20,
  },
  squareCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default FarmsScreen;
