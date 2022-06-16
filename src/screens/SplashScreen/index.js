import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, NetflixLogoText} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Profile');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={NetflixLogoText} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
