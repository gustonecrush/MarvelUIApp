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
import {Colors, Search} from '../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {HeaderUser} from '../../components';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

const SearchScreen = ({route, navigation}) => {
  const item = route.params.item;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} vertical>
        {/* Header */}
        <HeaderUser img={item.image} screen={'Search'} data={item} />

        {/* Top Search */}
        <Text style={styles.header}>Top Search</Text>
        <View style={styles.cardWrapper}>
          {Search.map(item => (
            <View style={styles.card} key={item.id}>
              <View style={styles.wrapper}>
                <Image source={item.cover} style={styles.cover} />
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <TouchableOpacity style={styles.playBtn}>
                <MaterialCommunityIcons
                  name="play"
                  color={Colors.white}
                  size={18}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingBottom: 60,
  },
  header: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: Colors.white,
    marginHorizontal: 25,
    marginTop: 25,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cover: {
    width: 150,
    height: 80,
    borderRadius: 5,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    flexWrap: 'wrap',
    width: '50%',
    color: Colors.white,
    fontSize: 14,
    marginLeft: 10,
  },
  cardWrapper: {
    marginHorizontal: 25,
  },
  playBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.white,
  },
});
