import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMeasurements } from '../../../redux/actions/MeasurementsActions';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import Logo from '../../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = ({ getMeasurements, measurements }) => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  useEffect(() => {
    getMeasurements();
    let timer = setTimeout(() => navigation.navigate('Main'), 1000);

    // set a timer to rerout the screen after a 1 second delay
    // then clear the Timeout
    return () => {
      clearTimeout(timer);
    };
  }, [])

  return (
    <ScrollView>
      <View style={[styles.root, { height }]}>
        <Image
          source={Logo}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ff9800',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 70,
    height: 70,
  },
});

const mapStateToProps = (state) => {
  const { measurements } = state
  return { measurements }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getMeasurements
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);