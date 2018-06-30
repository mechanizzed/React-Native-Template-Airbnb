import React from 'react';
import { View, Text, Image } from 'react-native';

import StarRating from 'react-native-star-rating';

import styles from './styles';

const Home = () => ({
  render() {
    return (
      <View style={styles.containerMoreProducts}>
        <View style={styles.flex1}>
          <Image
            style={styles.imageProductsMore}
            source={{
              uri: 'https://a0.muscache.com/im/pictures/15272333/513ff8ec_original.jpg',
            }}
          />
        </View>
        <View style={styles.containerDescriptionsMore}>
          <Text style={styles.titleDescription}>{this.props.type}</Text>
          <Text style={styles.titleDescription2}>{this.props.name}</Text>
          <Text style={styles.titleDescriptionPrice}>R${this.props.price}</Text>
          <StarRating disabled maxStars={5} rating={this.props.rating} starSize={10} />
        </View>
      </View>
    );
  },
});

export default Home;
