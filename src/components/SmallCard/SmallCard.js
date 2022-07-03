import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SmallCard = ({ subtitle, title, text, bgColor = '#fff' }) => {
  return (
    <View style={styles.card} backgroundColor={bgColor}>
      <View style={styles.left}>
        <Text style={styles.infoTitle}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {},
  infoTitle: {
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#000',
  },
  text: {
    color: '#000',
  },
});

export default SmallCard;
