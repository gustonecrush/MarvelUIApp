import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, New, Top10Icon} from '../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {CardNew, CategoryButton, HeaderUser} from '../../components';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

const PopularScreen = ({route, navigation}) => {
  const item = route.params.item;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} vertical>
        {/* Header */}
        <HeaderUser img={item.image} screen={'New & Popular'} data={item} />

        {/* Category Menu */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryWrapper}>
          <TouchableOpacity style={styles.iconWrapperActive}>
            <Text style={styles.iconNameActive}>🍿 Comming Soon</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconWrapper}>
            <Text style={styles.iconName}>🔥 Watch By All</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconWrapper}>
            <Image source={Top10Icon} style={styles.imgIcon} />
            <Text style={styles.iconName}>Top 10</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Text Header */}
        <Text style={styles.textHeader}>🍿 Comming Soon</Text>

        {/* Contents */}
        <View style={styles.contentWrapper}>
          {New.map(item => (
            <CardNew key={item.id} data={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default PopularScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingBottom: 60,
  },
  categoryWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    marginVertical: 15,
  },
  iconWrapperActive: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 20,
    justifyContent: 'center',
    marginRight: 10,
  },
  iconNameActive: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: Colors.black,
  },
  iconName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: Colors.white,
  },
  imgIcon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  textHeader: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: Colors.white,
    marginVertical: 15,
    marginHorizontal: 25,
  },
});
