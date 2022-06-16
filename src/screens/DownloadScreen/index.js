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
  BannerDownload,
  CastIcon,
  Colors,
  CoverHome,
  Download,
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

const DownloadScreen = ({route, navigation}) => {
  const item = route.params.item;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} vertical>
        {/* Header */}
        <HeaderUser img={item.image} screen={'Download'} data={item} />

        {/* Download Settings */}
        <View style={styles.dowloadSettingWrapper}>
          <TouchableOpacity style={styles.settingWrapper}>
            <Feather name="settings" size={25} color={Colors.white} />
            <Text style={styles.text}>Smart Download</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="edit-2" size={25} color={Colors.white} />
          </TouchableOpacity>
        </View>

        {/* Profile View */}
        <View style={styles.profiles}>
          <Image source={item.image} style={styles.profileImg} />
          <Text style={styles.name}>{item.name}</Text>
        </View>

        {/* Downloads */}
        <View style={styles.downloadWrapper}>
          {Download.map(item => (
            <TouchableOpacity style={styles.card} key={item.id}>
              <View style={styles.content}>
                <Image style={styles.coverImg} source={item.cover} />
                <View style={styles.info}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.rating}>{item.rating}</Text>
                </View>
              </View>
              <Feather
                name="chevron-right"
                size={20}
                color={Colors.secondary}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Main */}
        <View style={styles.mainWrapper}>
          <Text style={styles.headerText}>Introducing</Text>
          <Text style={styles.headerText}>Download For You</Text>
          <Text style={styles.description}>
            We'll download selected movies and shows that are personalized for
            you, so there's always something to watch on your device.
          </Text>
          <Image style={styles.imgBanner} source={BannerDownload} />

          {/* Configure Btn */}
          <TouchableOpacity style={styles.configureBtn}>
            <Text style={styles.textBtn}>Configure</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.downloadLookBtn}>
            <Text style={styles.textDownloadLookBtn}>
              See what you can download
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DownloadScreen;

const styles = StyleSheet.create({
  downloadWrapper: {
    marginHorizontal: 25,
    marginTop: 20,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.white,
  },
  coverImg: {
    width: 150,
    height: 80,
    borderRadius: 10,
  },
  info: {
    marginLeft: 15,
  },
  rating: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: Colors.secondary,
    marginTop: 3,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingBottom: 80,
  },
  dowloadSettingWrapper: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginTop: 25,
    justifyContent: 'space-between',
  },
  settingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: Colors.white,
    marginLeft: 10,
  },
  mainWrapper: {
    marginHorizontal: 25,
    marginTop: 25,
    backgroundColor: '#232323',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 15,
  },
  imgBanner: {
    width: 290,
    height: 230,
  },
  headerText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: Colors.white,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: Colors.secondary,
    textAlign: 'center',
    marginVertical: 20,
  },
  configureBtn: {
    backgroundColor: '#5068DC',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  textBtn: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: Colors.white,
  },
  downloadLookBtn: {
    backgroundColor: Colors.white,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    width: '70%',
  },
  textDownloadLookBtn: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: Colors.black,
    textAlign: 'center',
  },
  profiles: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 25,
  },
  profileImg: {
    width: 25,
    height: 25,
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: Colors.white,
    marginLeft: 10,
    alignSelf: 'center',
  },
});
