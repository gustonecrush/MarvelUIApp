import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, WhoWatching} from '../../assets';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.empty}></Text>
        </TouchableOpacity>
        <Text style={styles.watching}>Who's Watching?</Text>
        <TouchableOpacity>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profilesWrapper}>
        {WhoWatching.map(item => (
          <TouchableOpacity
            style={styles.profile}
            key={item.id}
            onPress={() => navigation.navigate('MainApp', {item: item})}>
            <Image style={styles.img} source={item.image} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    flex: 1,
  },
  header: {
    paddingHorizontal: 25,
    paddingTop: Dimensions.get('window').height * 0.1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  watching: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: Colors.white,
    marginLeft: 25,
  },
  edit: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: Colors.white,
    alignSelf: 'center',
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 10,
  },
  profile: {
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
    width: 150,
  },
  profilesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height * 0.09,
  },
  img: {
    width: 100,
    height: 100,
  },
});
