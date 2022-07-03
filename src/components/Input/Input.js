import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Input = ({
  value,
  setValue,
  placeholder,
  label
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}: </Text>
      <View style={styles.inputContainer}>
        <TextInput
          defaultValue={value}
          onChangeText={(newText) => setValue(newText)}
          placeholder={placeholder}
          style={styles.input}
          keyboardType="default"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },
  label: {
    color: 'black',
  },
  inputContainer: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
});

export default Input;
