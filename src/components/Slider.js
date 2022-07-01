import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Slider = ({content, image}) => {
  return (
    <View style={styles.slider_container}>
      <Image source={image} style={styles.img} />
      <Text style={styles.text}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  slider_container: {
    width: windowWidth,
    paddingVertical: 20,
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: 25,
  },

  // width: 150,
  img: {
    marginBottom: 30,
    transform: [{scale: 1.1}],
  },
});

export default Slider;
