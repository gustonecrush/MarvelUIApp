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
import {Colors, Top10Icon, Watchlist} from '../../assets';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';

Feather.loadFont();
MaterialCommunityIcons.loadFont();
FontAwesome.loadFont();
SimpleLineIcons.loadFont();

const DetailScreen = ({route}) => {
  const navigation = useNavigation();
  const {item} = route.params;
  const Top = () => {
    if (item.top)
      return (
        <View style={styles.topWrapper}>
          <Image style={styles.iconTop} source={Top10Icon} />
          <Text style={styles.topText}>
            Top {item.top} {item.type} today
          </Text>
        </View>
      );
    return <View></View>;
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} vertical>
        {/* Header Preview */}
        <View style={styles.header}>
          <Image source={item.preview} style={styles.headerPreviewWrapper} />
          <View style={styles.iconWrapper}>
            <View style={styles.closeWrapper}>
              <TouchableOpacity style={styles.closeIcon}>
                <MaterialCommunityIcons name="cast" size={20} color={'#FFF'} />
              </TouchableOpacity>
            </View>

            <View style={styles.closeWrapper}>
              <TouchableOpacity
                style={styles.closeIcon}
                onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons name="close" size={20} color={'#FFF'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Info */}
        <View style={styles.infoWrapper}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{item.release}</Text>
            <View style={styles.icons}>
              <FontAwesome name="circle" color={Colors.primary} size={5} />
            </View>
            <Text style={styles.text}>{item.duration}</Text>
          </View>
        </View>

        {/* Top */}
        <Top />

        {/* Buttons */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.BtnPlay}>
            <MaterialCommunityIcons
              name="play"
              size={25}
              color={Colors.black}
            />
            <Text style={styles.textBtnPlay}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtnDownload}>
            <MaterialCommunityIcons
              name="download-circle"
              size={25}
              color={Colors.white}
            />
            <Text style={styles.textBtnDownload}>Download</Text>
          </TouchableOpacity>
        </View>

        {/* Descriptions */}
        <Text style={styles.details}>{item.description}</Text>

        <View style={styles.castWrapper}>
          <Text style={styles.textInfo}>Casts: {item.casts}</Text>
          <Text style={styles.textInfo}>Director: {item.director}</Text>
        </View>

        {/* Feedback Wrappers */}
        <View style={styles.feedWrapper}>
          <TouchableOpacity style={styles.iconsWrapper}>
            <Feather name="plus" color={Colors.white} size={20} />
            <Text style={styles.iconsBtn}>Watchlist</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconsWrapper}>
            <SimpleLineIcons name="like" color={Colors.white} size={18} />
            <Text style={styles.iconsBtn}>Like</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconsWrapper}>
            <SimpleLineIcons
              name="paper-plane"
              color={Colors.white}
              size={18}
            />
            <Text style={styles.iconsBtn}>Watchlist</Text>
          </TouchableOpacity>
        </View>

        {/* Others */}
        <Text style={styles.textOther}>Others</Text>
        <View style={styles.otherWrapper}>
          {Watchlist.map(item => (
            <TouchableOpacity key={item.id}>
              <Image source={item.cover} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  headerPreviewWrapper: {
    height: 220,
    width: 400,
    marginTop: Dimensions.get('window').height * 0.06,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    resizeMode: 'cover',
    marginLeft: -5,
  },
  header: {
    height: 220,
    marginBottom: 60,
  },
  closeIcon: {
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    padding: 8,
    alignSelf: 'flex-end',
  },
  closeWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: 10,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: Dimensions.get('window').height * 0.088,
  },
  infoWrapper: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: Colors.white,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: Colors.secondary,
    marginTop: 5,
    alignItems: 'center',
  },
  textWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icons: {
    marginHorizontal: 10,
  },
  BtnPlay: {
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    width: '100%',
    borderRadius: 10,
  },
  textBtnPlay: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    marginLeft: 5,
  },
  buttonWrapper: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  textBtnDownload: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: Colors.white,
    marginLeft: 5,
  },
  BtnDownload: {
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2a2a2a',
    flexDirection: 'row',
    width: '100%',
    borderRadius: 10,
    marginTop: 12,
  },
  details: {
    marginHorizontal: 10,
    color: Colors.white,
    fontFamily: 'Poppins-Regular',
    textAlign: 'justify',
    marginTop: 15,
  },
  castWrapper: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textInfo: {
    color: Colors.secondary,
    fontFamily: 'Poppins-Regular',
    textAlign: 'justify',
  },
  feedWrapper: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  iconsBtn: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.secondary,
    marginTop: 8,
  },
  iconsWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 50,
  },
  textOther: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: Colors.white,
    marginHorizontal: 10,
    marginTop: 20,
  },
  otherWrapper: {
    marginHorizontal: 10,
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconTop: {
    width: 25,
    height: 25,
  },
  topWrapper: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  topText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: Colors.white,
    marginLeft: 15,
  },
});
