import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { connect } from 'react-redux';
import React from 'react';
import Bin from '../../../assets/bin.png';
import Edit from '../../../assets/edit.png';

const SmallCard = ({ onEdit, onDelete, key, subtitle, title, bgColor = '#fff' }) => {
  const onEditPressed = (key) => { null } // TODO: implement edit

  return (
    <View style={styles.card} backgroundColor={bgColor}>
      <View style={styles.left}>
        <Text style={styles.infoTitle}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle} km</Text>
      </View>
      <Text style={styles.buttons}>
        <Pressable onPress={onDelete} style={styles.iconBtn}>
          <Image source={Bin} style={styles.listImg} resizeMode="contain" />
        </Pressable>
        <Pressable onPress={() => onEditPressed(key)} style={styles.iconBtn}>
          <Image source={Edit} style={styles.listImg} resizeMode="contain" />
        </Pressable>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
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
  buttons: {
    color: '#000',
  },
  listImg: {
    width: 25,
    height: 25,
    marginHorizontal: 10
  },
  iconBtn: {
    // width: 25,
    // height: 25,
  },
  buttons: {
    minWidth: 80,
  }
});

const mapStateToProps = (state) => {
  const { measurements } = state
  return { measurements }
};

export default connect(mapStateToProps)(SmallCard);