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
});
