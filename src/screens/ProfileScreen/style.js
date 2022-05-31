import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 28,
    fontWeight: '900',
  },

  popularGameContainer: {
    flex: 3,
  },

  imagePopularGame: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
});
