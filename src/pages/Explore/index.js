import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';

import styles from './styles';

// Components
import Header from '../../pages/Layout/Header/Component';
import Category from './Component/Category';
import Home from './Component/Home';

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

            <View style={styles.containerMore}>
              <Text style={styles.titleMore}>Homes around the world</Text>
              <View style={styles.containerMoreInside}>
                <Home type="8 hóspedes 3 quartos" name="CHARMING HOUSE" price={717} rating={4} />
                <Home
                  type="6 hóspedes 5 quartos"
                  name="Trullo aromatic green"
                  price={417}
                  rating={5}
                />
                <Home type="4 hóspedes 1 quartos" name="Brownstone Studio" price={277} rating={3} />
                <Home
                  type="3 hóspedes 1 quartos"
                  name="Times Square Luxury Place"
                  price={398}
                  rating={4}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  },
});

export default Explore;
