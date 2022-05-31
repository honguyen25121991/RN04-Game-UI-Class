import React, {useEffect, useState} from 'react';
import {View, TextInput, FlatList, Image, ImageBackground} from 'react-native';
import styles from './styles.StreamScreen';
import {BackgroundView, Text} from '../../components/index';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../themes/styles';
import {useDispatch, useSelector} from 'react-redux';
import {getRequestListGame} from '../../redux/thunk/gameThunkAction';
import {getListGameSelector} from '../../redux/selectors/gameSelector';

const StreamScreen = () => {
  const dispatch = useDispatch();
  const listGame = useSelector(getListGameSelector);

  useEffect(() => {
    dispatch(getRequestListGame());
  }, []);

  return (
    <BackgroundView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Streaming</Text>
        <View>
          <TextInput
            placeholder="Search here..."
            placeholderTextColor={COLORS.opacityWhite}
            style={styles.search}
          />
          <AntIcon
            style={styles.searchIcon}
            name="search1"
            color={COLORS.gray}
            size={24}
          />
        </View>
      </View>
      <View style={styles.popularGameContainer}>
        <Text>Popular Game</Text>
        <FlatList
          style={{flexGrow: 0, marginTop: 10}}
          horizontal
          data={listGame}
          ItemSeparatorComponent={() => <View style={{width: 20}} />}
          renderItem={({item}) => (
            <Image style={styles.imagePopularGame} source={{uri: item.icon}} />
          )}
        />
      </View>
      <View style={styles.liveContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text title style={styles.titleGameText}>
            Live Games
          </Text>
          <View>
            <Text style={{color: 'red'}}>View All</Text>
          </View>
        </View>
        <FlatList
          data={listGame}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
          renderItem={({item}) => (
            <View>
              <ImageBackground
                style={styles.liveGameBanner}
                source={{uri: item.preview[0]}}
              />
              <View
                style={{
                  position: 'absolute',
                  flexDirection: 'row',
                  right: 10,
                  top: 10,
                }}>
                <View
                  style={{
                    backgroundColor: COLORS.lightPurple,
                    borderRadius: 5,
                    paddingHorizontal: 10,
                  }}>
                  <Text title style={styles.titleGameText}>
                    {item.title}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: COLORS.lightRed,
                    borderRadius: 5,
                    marginLeft: 5,
                    paddingHorizontal: 10,
                  }}>
                  <Text title style={styles.titleGameText}>
                    Live
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </BackgroundView>
  );
};

export default StreamScreen;
