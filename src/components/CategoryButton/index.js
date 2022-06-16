import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Top10Icon} from '../../assets';

const CategoryButton = ({title, active, onPress}) => {
  const Icon = () => {
    if (title === 'Coming Soon') return <Text>🍿</Text>;
    if (title === 'Watch By All') return <Text>🔥</Text>;
    if (title === 'Top 10')
      return <Image stle={styles.imgIcon} source={Top10Icon} />;
  };
  return (
    <TouchableOpacity style={styles.iconWrapper(active)} onPress={onPress}>
      <Text style={styles.iconName(active)}>
        <Icon /> Watch By All
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  iconName: active => ({
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: active ? Colors.black : Colors.white,
  }),
  imgIcon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  iconWrapperActive: active => ({
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: active ? Colors.white : Colors.black,
    justifyContent: 'center',
  }),
});
