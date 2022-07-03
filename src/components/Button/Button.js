import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

const Button = ({ text, onPress, type = 'PRIMARY' }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,

  },

  container_PRIMARY: {
    backgroundColor: '#ff9800',
  },

  container_SECONDARY: {
    borderColor: 'gray',
    borderWidth: 2,
    backgroundColor: '#ccc',
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_SECONDARY: {
    color: 'gray',
  },
});

export default Button;
