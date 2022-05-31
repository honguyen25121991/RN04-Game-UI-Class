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
        <View
          style={{
            marginTop: 30,
            backgroundColor: '#fff',
            width: 100,
            height: 100,
            borderRadius: 50,
            alignSelf: 'center',
          }}></View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20}} bold>
            CyberSoft
          </Text>
        </View>
        <View
          style={{
            borderRadius: 5,
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: COLORS.lightPurple,
              paddingHorizontal: 10,
              paddingVertical: 6,
              borderRadius: 5,
              marginHorizontal: 10,
            }}>
            <Text bold>Pro Gamer</Text>
          </View>
          <View
            style={{
              backgroundColor: COLORS.lightYellow,
              paddingHorizontal: 10,
              paddingVertical: 6,
              borderRadius: 5,
            }}>
            <Text style={{color: COLORS.black, fontWeight: '600'}}>
              Pro Coder
            </Text>
          </View>
        </View>
        <View
          style={{
            borderRadius: 5,
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
            }}>
            <Text style={{fontSize: 28, fontWeight: 'bold'}}>250</Text>
            <Text
              style={{
                marginTop: 15,
                marginLeft: 5,
                color: COLORS.opacityWhite,
              }}>
              {' '}
              Games
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 28, fontWeight: 'bold'}}>4</Text>
            <Text
              style={{
                marginTop: 15,
                marginLeft: 5,
                color: COLORS.opacityWhite,
              }}>
              Purchasedr
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '400',
              color: COLORS.opacityWhite,
            }}>
            Purchased Games
          </Text>
        </View>
      </View>
      <View style={styles.popularGameContainer}>
        <FlatList
          style={{flexGrow: 0, marginTop: 10}}
          data={listGame}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 20}} />}
          renderItem={({item}) => (
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.imagePopularGame}
                source={{uri: item.icon}}
              />
              <View style={{marginTop: 25, marginLeft: 15}}>
                <Text bold>{item.title}</Text>
                <Text subText>825 Sales</Text>
              </View>
              <View
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 40,
                }}>
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
