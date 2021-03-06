import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

const Button = ({ disabled = false, text, onPress, type = 'PRIMARY' }) => {
  return (
    <Pressable
      disabled={disabled}
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

  container_TERTIARY: {
    borderColor: 'gray',
    backgroundColor: '#fff',
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

  text_TERTIARY: {
    color: 'gray',
  },
});

export default Button;
