import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  headerContainer: {
    flex: 2,
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 28,
    fontWeight: '900',
  },
  popularGameContainer: {
    flex: 2,
  },
  imagePopularGame: {
    height: 80,
    width: 80,
    borderRadius: 10,
    marginVertical: 6,
  },
  avatar: {
    marginTop: 30,
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  bannerTitle: {
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bannerTitleContainer: {
    backgroundColor: COLORS.lightPurple,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  bannerContent: {
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  listGameEnjoy: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  gameEnjoy: {fontSize: 28, fontWeight: 'bold'},
  gameEnjoyContent: {
    marginTop: 15,
    marginLeft: 5,
    color: COLORS.opacityWhite,
  },
  listPurchased: {
    fontSize: 20,
    fontWeight: '400',
    color: COLORS.opacityWhite,
  },
  gameIcon: {flexDirection: 'row'},
  gameIconTitle: {marginTop: 25, marginLeft: 15},
  gamePrice: {
    position: 'absolute',
    right: 10,
    top: 40,
  },
});
