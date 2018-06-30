import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  containerMoreProducts: {
    width: metrics.screenWidth / 2 - 30,
    height: metrics.screenWidth / 2 - 30,
    borderWidth: 0.5,
    borderColor: colors.light,
    marginBottom: 20,
  },
  imageProductsMore: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  containerDescriptionsMore: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingLeft: 10,
  },
  titleDescription: {
    fontSize: 10,
    color: colors.red2,
  },
  titleDescription2: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  titleDescriptionPrice: {
    fontSize: 10,
  },
});

export default styles;
