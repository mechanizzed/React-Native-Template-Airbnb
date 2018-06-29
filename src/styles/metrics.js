import { Platform, StatusBar, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default {
  statusBarHeight: Platform.OS === 'android' ? 100 + StatusBar.currentHeight : 80,
  marginTopPlatform: Platform.OS === 'android' ? 30 : null,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
