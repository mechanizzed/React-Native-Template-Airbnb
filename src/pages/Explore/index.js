import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';

import styles from './styles';

// Components
import Header from '../../pages/Layout/Header/Component';
import Category from './Component/Category';

const Explore = () => ({
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Header />
          <ScrollView scrollEventThrottle={16}>
            <View style={styles.containerTop}>
              <Text style={styles.titleTop}>What can you help ?</Text>
              <View style={styles.containerCategory}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <Category
                    imageUri="https://a0.muscache.com/im/pictures/c3ea4623-9f14-44d8-9426-ef58d3bd8acf.jpg"
                    name="Brownstone Studio"
                  />
                  <Category
                    imageUri="https://a0.muscache.com/im/pictures/6808875/34c6b461_original.jpg"
                    name="GREAT Location in Chelsea!"
                  />
                  <Category
                    imageUri="https://a0.muscache.com/im/pictures/44350966/49b6d787_original.jpg"
                    name="CHEAP BIG room in Williamsburg"
                  />
                </ScrollView>
              </View>
              <View style={styles.containerPlus}>
                <Text style={styles.titlePlus}>Introducing Airbnb Plus</Text>
                <Text style={styles.descriptionPlus}>
                  Uma nova seleção de acomodações com conforto e qualidade verificados.
                </Text>
                <View style={styles.containerImage}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: 'https://a0.muscache.com/im/pictures/15273358/d7329e9a_original.jpg',
                    }}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  },
});

export default Explore;
