import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Tags = () => ({
  render() {
    return (
      <View style={styles.containerTagsInside}>
        <Text style={styles.titleTags}>{this.props.name}</Text>
      </View>
    );
  },
});

export default Tags;
