import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const Category = () => ({
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerInside}>
          <Image
            style={styles.image}
            source={{
              uri: this.props.imageUri,
            }}
          />
        </View>
        <View style={styles.containerText}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  },
});

export default Category;
