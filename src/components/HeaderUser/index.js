import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../assets';
import {CastIcon, NetflixLogo} from '../../assets';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

const HeaderUser = ({img, screen, data}) => {
  const navigation = useNavigation();
  const Screen = () => {
    if (screen === 'Download' || screen === 'New & Popular')
      return (
        <View style={styles.userWrapper}>
          {/* Netflix Logo */}
          <Text style={styles.header}>{screen}</Text>

          {/* User Section */}
          <View style={styles.user}>
            <TouchableOpacity>
              <Image source={CastIcon} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('User', {item: data})}>
              <Image style={styles.imgUser} source={img} />
            </TouchableOpacity>
          </View>
        </View>
      );
    if (screen === 'Home')
      return (
        <View style={styles.userWrapper}>
          {/* Netflix Logo */}
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={NetflixLogo} />
          </TouchableOpacity>

          {/* User Section */}
          <View style={styles.user}>
            <Image source={CastIcon} />
            <TouchableOpacity
              onPress={() => navigation.navigate('User', {item: data})}>
              <Image style={styles.imgUser} source={img} />
            </TouchableOpacity>
          </View>
        </View>
      );
    if (screen === 'Search')
      return (
        <View style={styles.userWrapper}>
          <View style={styles.searchBar}>
            <Feather name="search" size={20} color={'#ABABAB'} />
            <TextInput style={styles.search} placeholder={'Search'} />
          </View>
        </View>
      );
    if (screen === 'User') {
      return (
        <View style={styles.userWrapper}>
          <View style={styles.searchBar}>
            <Feather name="search" size={20} color={'#ABABAB'} />
            <TextInput style={styles.search} placeholder={'Search'} />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.closeWrapper}>
        <TouchableOpacity
          style={styles.closeIcon}
          onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="close" size={25} color={'#FFF'} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.headerWrapper}>
      <Screen />
    </View>
  );
};

export default HeaderUser;

const styles = StyleSheet.create({
  headerWrapper: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userWrapper: {
    paddingTop: Dimensions.get('window').height * 0.075,
    paddingHorizontal: 25,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  closeWrapper: {
    paddingTop: Dimensions.get('window').height * 0.075,
    paddingHorizontal: 25,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgUser: {
    height: 23,
    width: 23,
    marginLeft: 15,
    overflow: 'visible',
  },
  header: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    color: Colors.white,
  },
  searchBar: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
    color: Colors.white,
  },
  closeIcon: {
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    padding: 10,
    alignSelf: 'flex-end',
  },
});
