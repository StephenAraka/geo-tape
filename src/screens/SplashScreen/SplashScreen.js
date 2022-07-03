import React, { useState } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import Logo from '../../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  // setTimeout(navigation.navigate('Main')

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

export default SignInScreen;
