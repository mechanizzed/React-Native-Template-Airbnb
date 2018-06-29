import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },

  containerTop: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: colors.white,
  },

  titleTop: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 20,
  },
  containerCategory: {
    height: 130,
    marginTop: 20,
  },
  containerPlus: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  titlePlus: {
    fontSize: 24,
    fontWeight: '700',
  },
  descriptionPlus: {
    marginTop: 10,
    fontWeight: '100',
  },
  containerImage: {
    width: metrics.screenWidth - 40,
    height: 200,
    marginTop: 20,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.light,
  },
});

export default styles;
