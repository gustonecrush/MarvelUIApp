import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors, WhoWatching} from '../../assets';
import {HeaderUser} from '../../components';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

Feather.loadFont();
Ionicons.loadFont();

const UserScreen = ({route}) => {
  const item = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {/* Header */}
        <HeaderUser name="User" />

        {/* Profiles Component */}
        <View style={styles.profilesWrapper}>
          {WhoWatching.map(item => (
            <TouchableOpacity
              onPress={() => navigation.replace('MainApp', {item: item})}
              style={styles.profile}
              key={item.id}>
              <Image source={item.image} style={styles.img} />
              <Text style={styles.text}>{item.name.slice(0, 5)}...</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Edit Text */}
        <View style={styles.editTextWrapper}>
          <Feather name="edit-2" size={20} color={Colors.secondary} />
          <Text style={styles.edit}>Edit Profile</Text>
        </View>

        {/* Menu */}
        <View style={styles.menuWrapper}>
          <View style={styles.itemWrapper}>
            <View style={styles.iconWrapper}>
              <Ionicons
                name={'notifications-outline'}
                size={25}
                color={Colors.secondary}
              />
              <Text style={styles.textIcon}>Notifications</Text>
            </View>
            <Feather
              name={'chevron-right'}
              size={25}
              color={Colors.secondary}
            />
          </View>

          <View style={styles.itemWrapper}>
            <View style={styles.iconWrapper}>
              <Feather name={'check'} size={25} color={Colors.secondary} />
              <Text style={styles.textIcon}>My List</Text>
            </View>
            <Feather
              name={'chevron-right'}
              size={25}
              color={Colors.secondary}
            />
          </View>

          <View style={styles.itemWrapper}>
            <View style={styles.iconWrapper}>
              <Feather name={'settings'} size={25} color={Colors.secondary} />
              <Text style={styles.textIcon}>Application Setting</Text>
            </View>
            <Feather
              name={'chevron-right'}
              size={25}
              color={Colors.secondary}
            />
          </View>

          <View style={styles.itemWrapper}>
            <View style={styles.iconWrapper}>
              <Feather name={'user'} size={25} color={Colors.secondary} />
              <Text style={styles.textIcon}>Account</Text>
            </View>
            <Feather
              name={'chevron-right'}
              size={25}
              color={Colors.secondary}
            />
          </View>

          <View style={styles.itemWrapper}>
            <View style={styles.iconWrapper}>
              <Feather
                name={'help-circle'}
                size={25}
                color={Colors.secondary}
              />
              <Text style={styles.textIcon}>Help</Text>
            </View>
            <Feather
              name={'chevron-right'}
              size={25}
              color={Colors.secondary}
            />
          </View>
        </View>

        {/* Log Out Text & Version */}
        <View style={styles.textWrapper}>
          <TouchableOpacity onPress={() => navigation.replace('SplashScreen')}>
            <Text style={styles.logout}>Log Out</Text>
          </TouchableOpacity>
          <Text style={styles.version}>Version: 14.35.0(3904) 5.0. 1-001</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  profilesWrapper: {
    paddingHorizontal: 5,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  profile: {
    width: 65,
    height: 65,
  },
  img: {
    width: 65,
    height: 65,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    color: Colors.secondary,
    marginTop: 5,
  },
  editTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  edit: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: Colors.secondary,
    marginLeft: 5,
  },
  menuWrapper: {
    marginTop: 30,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  itemWrapper: {
    backgroundColor: '#121212',
    marginBottom: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  textIcon: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.secondary,
    marginLeft: 10,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  logout: {
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    color: Colors.secondary,
    textAlign: 'center',
  },
  version: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.secondary,
    marginTop: 7,
    textAlign: 'center',
  },
});
