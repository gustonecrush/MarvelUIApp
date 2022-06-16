import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, NewActiveIcon, NewIcon} from '../../assets';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';

Feather.loadFont();
Foundation.loadFont();
MaterialCommunityIcons.loadFont();

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home')
      return isFocused ? (
        <Foundation name="home" size={23} color={Colors.white} />
      ) : (
        <Foundation name="home" size={23} color={Colors.secondary} />
      );
    if (label === 'Popular')
      return isFocused ? (
        <Image source={NewActiveIcon} />
      ) : (
        <Image source={NewIcon} />
      );
    if (label === 'Search')
      return isFocused ? (
        <Feather name="search" size={23} color={Colors.white} />
      ) : (
        <Feather name="search" size={23} color={Colors.secondary} />
      );
    if (label === 'Download')
      return isFocused ? (
        <MaterialCommunityIcons
          name="download-circle"
          size={23}
          color={Colors.white}
        />
      ) : (
        <MaterialCommunityIcons
          name="download-circle"
          size={23}
          color={Colors.secondary}
        />
      );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 12,
    color: isFocused ? Colors.white : Colors.secondary,
    marginTop: 2,
    textAlign: 'center',
  }),
});
