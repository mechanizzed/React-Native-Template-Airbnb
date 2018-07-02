import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  containerTagsInside: {
    minWidth: 40,
    minHeight: 20,
    padding: 5,
    backgroundColor: colors.white,
    borderColor: colors.light,
    borderWidth: 1,
    borderRadius: 2,
    marginRight: 5,
  },
  titleTags: {
    fontSize: 10,
    fontWeight: '700',
  },
});

export default styles;
