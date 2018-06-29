import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: colors.light,
  },
  containerInside: {
    flex: 2,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  containerText: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
  },
});

export default styles;
