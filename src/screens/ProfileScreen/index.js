import React, {useEffect, useState} from 'react';
import {View, TextInput, FlatList, Image, ImageBackground} from 'react-native';
import styles from './style';
import {BackgroundView, Text} from '../../components/index';
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
        <View style={styles.avatar}></View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20}} bold>
            CyberSoft
          </Text>
        </View>
        <View style={styles.bannerTitle}>
          <View style={styles.bannerTitleContainer}>
            <Text bold>Pro Gamer</Text>
          </View>

          <View
            style={[
              styles.bannerTitleContainer,
              {
                backgroundColor: COLORS.lightYellow,
              },
            ]}>
            <Text style={{color: COLORS.black, fontWeight: '600'}}>
              Pro Coder
            </Text>
          </View>
        </View>
        <View style={styles.bannerContent}>
          <View style={styles.listGameEnjoy}>
            <Text style={styles.gameEnjoy}>250</Text>
            <Text style={styles.gameEnjoyContent}>Games</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={styles.gameEnjoy}>4</Text>
            <Text style={styles.gameEnjoyContent}>Purchasedr</Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.listPurchased}>Purchased Games</Text>
        </View>
      </View>
      <View style={styles.popularGameContainer}>
        <FlatList
          style={{flexGrow: 0, marginTop: 10}}
          data={listGame}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 20}} />}
          renderItem={({item}) => (
            <View style={styles.gameIcon}>
              <Image
                style={styles.imagePopularGame}
                source={{uri: item.icon}}
              />
              <View style={styles.gameIconTitle}>
                <Text bold>{item.title}</Text>
                <Text subText>825 Sales</Text>
              </View>
              <View style={styles.gamePrice}>
                <Text style={{color: COLORS.lightPurple}} bold>
                  $ 36
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </BackgroundView>
  );
};
export default ProfileScreen;
