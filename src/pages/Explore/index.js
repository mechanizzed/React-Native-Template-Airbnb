import React from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Explore = () => ({
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.contentIconInput}>
              <Icon name="ios-search" size={20} style={styles.icon} />
              <TextInput
                placeholder="Type to search"
                placeholderTextColor="grey"
                style={styles.input}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  },
});

export default Explore;
