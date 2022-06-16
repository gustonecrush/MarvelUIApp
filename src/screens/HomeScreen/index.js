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
import {
  CastIcon,
  Colors,
  CoverHome,
  Exclusive,
  NetflixLogo,
  TopIndo,
  Watchlist,
} from '../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import ContinueWatching from '../../assets/datas/ContinueWatching';
import {HeaderUser} from '../../components';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

const HomeScreen = ({route, navigation}) => {
  const item = route.params.item;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} vertical>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <TouchableOpacity>
            {/* Choosen Film / TV Show */}
            <ImageBackground source={CoverHome} style={styles.img}>
              {/* User */}
              <HeaderUser img={item.image} screen={'Home'} data={item} />

              {/* Menu Wrapper */}
              <View style={styles.menuWrapper}>
                <TouchableOpacity>
                  <Text style={styles.menu}>TV Show</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.menu}>Film</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryMenuWrapper}>
                  <Text style={styles.menuCategory}>Category</Text>
                  <MaterialCommunityIcons
                    name="chevron-down"
                    size={18}
                    color={Colors.white}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <View style={styles.opacity}></View>

          {/* Categories Choose of the Thumbnail */}
          <View style={styles.categories}>
            <TouchableOpacity>
              <Text style={styles.textCat}>Action • </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textCat}>Science Fiction • </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textCat}>Drama</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Info Thumbnail */}
        <View style={styles.infoWrapper}>
          <TouchableOpacity style={styles.iconWrapper}>
            <Feather name="plus" color={Colors.white} size={23} />
            <Text style={styles.textIcon}>Watchlist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playWrapper}>
            <MaterialCommunityIcons
              name="play"
              color={Colors.black}
              size={35}
            />
            <Text style={styles.textPlay}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper}>
            <Feather name="info" color={Colors.white} size={21} />
            <Text style={styles.textIcon}>Info</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.titleSection}>Just Added</Text>
        {/* Just added */}
        <View style={styles.justAddedWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Watchlist.map(item => (
              <TouchableOpacity
                style={styles.imgWrapperFilm}
                onPress={() => navigation.navigate('Detail', {item: item})}
                key={item.id}>
                <Image source={item.cover} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <Text style={styles.titleSection}>Only On Netflix</Text>
        {/* Just added */}
        <View style={styles.justAddedWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Exclusive.map(item => (
              <TouchableOpacity style={styles.imgWrapperFilm} key={item.id}>
                <Image source={item.cover} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <Text style={styles.titleSection}>Top in Indonesia</Text>
        {/* Just added */}
        <View style={styles.justAddedWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {TopIndo.map(item => (
              <TouchableOpacity style={styles.imgWrapperFilm} key={item.id}>
                <Image source={item.cover} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <Text style={styles.titleSection}>Continue Watching</Text>
        {/* Just added */}
        <View style={styles.justAddedWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {ContinueWatching.map(item => (
              <TouchableOpacity style={styles.imgWrapperFilm} key={item.id}>
                <Image source={item.cover} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingBottom: 60,
  },
  headerWrapper: {
    height: 550,
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  img: {
    height: 550,
    width: Dimensions.get('window').width,
  },
  opacity: {
    backgroundColor: Colors.black,
    width: Dimensions.get('window').width,
    height: 80,
    position: 'absolute',
    bottom: 0,
    opacity: 0.6,
  },
  categories: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
  },
  textCat: {
    color: Colors.white,
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    marginRight: 3,
  },
  userWrapper: {
    paddingTop: Dimensions.get('window').height * 0.075,
    marginHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
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
  },
  menuWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 40,
    marginRight: 20,
    alignItems: 'center',
    marginTop: 15,
  },
  menu: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.white,
    marginRight: 15,
    textAlign: 'center',
  },
  menuCategory: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.white,
    marginRight: 3,
    textAlign: 'center',
  },
  categoryMenuWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoWrapper: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginTop: -25,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  textIcon: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: Colors.white,
    textAlign: 'center',
  },
  iconWrapper: {
    alignItems: 'center',
  },
  playWrapper: {
    backgroundColor: Colors.white,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    width: 110,
    paddingVertical: 2,
    marginLeft: -20,
    justifyContent: 'flex-start',
    paddingLeft: 8,
  },
  textPlay: {
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    marginLeft: 5,
  },
  justAddedWrapper: {
    marginHorizontal: 25,
    marginTop: 20,
  },
  titleSection: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: Colors.white,
    marginHorizontal: 25,
    marginTop: 10,
  },
  imgWrapperFilm: {
    marginRight: 10,
  },
});
