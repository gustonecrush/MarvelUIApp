import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, NetflixFilm, NetflixSeries} from '../../assets';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

Ionicons.loadFont();
Feather.loadFont();

const CardNew = ({data}) => {
  const Type = () => {
    if (data.type === 'Film')
      return <Image style={styles.typeN} source={NetflixFilm} />;
    if (data.type === 'Series')
      return <Image style={styles.typeN} source={NetflixSeries} />;
    return <Image />;
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Release Date */}
      <View style={styles.releaseWrapper}>
        <Text style={styles.month}>{data.release.m}</Text>
        <Text style={styles.day}>{data.release.d}</Text>
      </View>

      {/* Card */}
      <View style={styles.cardWrapper}>
        <TouchableOpacity style={styles.coverWrapper}>
          <Image style={styles.cover} source={data.cover} />
        </TouchableOpacity>

        {/* Info 1 */}
        <View style={styles.info1}>
          <View style={styles.logo}>
            <Image style={styles.logoImg} source={data.logo} />
          </View>

          <View style={styles.iconWrapper}>
            <TouchableOpacity>
              <Ionicons
                name="notifications-outline"
                size={25}
                color={Colors.white}
              />
            </TouchableOpacity>
            <Text style={styles.textIcon}>Remind Me</Text>
          </View>
          <View style={styles.iconWrapper}>
            <TouchableOpacity>
              <Feather name="info" size={25} color={Colors.white} />
            </TouchableOpacity>
            <Text style={styles.textIcon}>Info</Text>
          </View>
        </View>

        {/* Info 2 */}
        <View style={styles.info2}>
          <View style={styles.titleWrapper}>
            <Type />
            <Text style={styles.title}>{data.title}</Text>
          </View>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardNew;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  coverWrapper: {
    width: '90%',
    overflow: 'hidden',
  },
  cover: {
    borderRadius: 25,
    height: 200,
    width: '100%',
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  info1: {
    flexDirection: 'row',
    marginLeft: -60,
    marginTop: -5,
    marginBottom: 20,
    justifyContent: 'space-evenly',
  },
  logo: {},
  logoImg: {
    resizeMode: 'contain',
    width: 120,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textIcon: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: Colors.secondary,
    textAlign: 'center',
    marginTop: 5,
  },
  titleWrapper: {
    marginBottom: 10,
  },
  type: {
    width: 70,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: Colors.white,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.secondary,
    textAlign: 'justify',
  },
  info2: {
    paddingVertical: 10,
    paddingRight: 20,
    marginTop: -30,
  },
  releaseWrapper: {
    alignItems: 'center',
    paddingRight: 10,
  },
  month: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: Colors.secondary,
  },
  day: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: Colors.white,
  },
  typeN: {
    width: 80,
    height: 20,
    marginBottom: 4,
    marginLeft: -3,
  },
});
