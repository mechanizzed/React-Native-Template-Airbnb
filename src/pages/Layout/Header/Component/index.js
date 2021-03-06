import React from 'react';
import { View, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

// Components
import Tags from '../../Tags/Components';

const Header = () => ({
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.contentIconInput}>
          <Icon name="ios-search" size={20} style={styles.icon} />
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Type to search"
            placeholderTextColor="grey"
            style={styles.input}
          />
        </View>
        <View style={styles.containerTagsAnimation}>
          <Tags name="Tag 1" />
          <Tags name="Tag 2" />
          <Tags name="Tag 3" />
        </View>
      </View>
    );
  },
});

export default Header;
