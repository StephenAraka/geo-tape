import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text>Main Screen</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default MainScreen;
