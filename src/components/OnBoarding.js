import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import Slider from './Slider';

import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const content = [
  {
    text: 'Brahmaputra Exam Success Support Team',
    image: require('../assets/images/4.png'),
  },
  {
    text: 'An Online educational Platform Consisting Experienced Teachers From All over The Country',
    image: require('../assets/images/2.png'),
  },

  {
    text: 'Have Hands-On Online Tests practice for students to score more',
    image: require('../assets/images/1.png'),
  },

  {
    text: 'Mock Tests/Practice Tests And live Classes Platform to  help students to excel in Competative Exams!',
    image: require('../assets/images/3.png'),
  },
];

const Show = () => {
  const slider = content.map((data, index) => (
    <Slider content={data.text} image={data.image} key={index} />
  ));
  return (
    <View>
      <StatusBar hidden />
      <View style={styles.container}>
        <Image
          source={require('../assets/images/wave-top.png')}
          style={styles.wave}
        />
        <View style={styles.inner_container}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logoSize}
          />
          <Text
            style={[
              styles.text,
              {
                fontSize: 24,
                fontWeight: '500',
                marginVertical: 10,
              },
            ]}>
            Welcome to
          </Text>
          <View style={{position: 'relative'}}>
            <Text adjustsFontSizeToFit={true} style={styles.heading}>
              BESST
            </Text>

            <View style={styles.line} />
          </View>
          <ScrollView
            horizontal
            snapToInterval={windowWidth}
            decelerationRate={'fast'}
            showsHorizontalScrollIndicator={false}
            bounces={false}>
            {slider}
          </ScrollView>
          <TouchableOpacity>
            <Text>skip</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require('../assets/images/bottom-wave-1.png')}
          style={[styles.wave, styles.bottomPostion]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  wave: {
    width: '100%',
    position: 'absolute',
  },
  bottomPostion: {
    position: 'absolute',
    top: windowHeight - 76,
  },
  inner_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  logoSize: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: '#8676A2',
  },
  heading: {
    color: '#8676A2',
    fontSize: 34,
    fontWeight: '700',
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#8676A2',
    paddingHorizontal: 25,
    paddingVertical: 5,
    backgroundColor: 'white',
    textAlign: 'center',
    letterSpacing: 10,
  },
  line: {
    borderWidth: 1,
    position: 'absolute',
    width: 250,
    top: '50%',
    left: '0%',
    zIndex: -1,
    transform: [{translateX: -21}],
  },
});

export default Show;
