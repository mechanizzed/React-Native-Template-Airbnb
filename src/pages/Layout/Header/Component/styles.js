import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  header: {
    height: metrics.statusBarHeight + 5,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
  contentIconInput: {
    flexDirection: 'row',
    padding: 10,
    marginTop: metrics.marginTopPlatform,
    backgroundColor: colors.white,
    marginHorizontal: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    elevation: 1,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontWeight: '700',
    backgroundColor: colors.white,
  },
  containerTagsAnimation: {
    flexDirection: 'row',
    marginHorizontal: 20,
    position: 'relative',
    top: 10,
  },
});

export default styles;
