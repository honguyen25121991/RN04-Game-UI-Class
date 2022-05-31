import React, {useEffect, useState} from 'react';
import {View, TextInput, FlatList, Image, ImageBackground} from 'react-native';
import styles from './style';
import {BackgroundView, Text} from '../../components/index';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../themes/styles';
import {useDispatch, useSelector} from 'react-redux';
import {getRequestListGame} from '../../redux/thunk/gameThunkAction';
import {getListGameSelector} from '../../redux/selectors/gameSelector';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const listGame = useSelector(getListGameSelector);

  useEffect(() => {
    dispatch(getRequestListGame());
  }, []);
  return (
    <BackgroundView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>CyberSoft</Text>
      </View>
      <View style={styles.popularGameContainer}>
        <Text>Popular Game</Text>
        <FlatList
          style={{flexGrow: 0, marginTop: 10}}
          data={listGame}
          ItemSeparatorComponent={() => <View style={{width: 20}} />}
          renderItem={({item}) => (
            <Image style={styles.imagePopularGame} source={{uri: item.icon}} />
          )}
        />
      </View>
    </BackgroundView>
  );
};
export default ProfileScreen;
