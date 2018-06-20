import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
  contentIconInput: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.white,
    marginHorizontal: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: colors.black,
    shadowOpacity: 0.2,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontWeight: '700',
    backgroundColor: colors.white,
  },
});

export default styles;
