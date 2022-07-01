import React from 'react';
import {
  Pressable,
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';

import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = () => {
  return (
    <View>
      {/* <OnBoarding /> */}
      <View>
        <View>
          <StatusBar hidden />
          <View style={styles.container}>
            <Image
              source={require('../assets/images/wave-top.png')}
              style={styles.wave}
            />
            <View style={styles.inner_container}>
              <Image source={require('../assets/images/1.png')} />
              {/* button */}
              <View style={{marginTop: 60}}>
                <View style={{marginTop: 10}}>
                  <Pressable
                    style={styles.button}
                    onPress={() => Alert.alert('Simple Button pressed')}>
                    <Image source={require('../assets/images/sign-in.png')} />
                    <Text style={styles.text}>Sign In</Text>
                  </Pressable>
                </View>

                <View style={{marginTop: 10}}>
                  <Pressable
                    style={styles.button}
                    onPress={() => Alert.alert('Simple Button pressed')}>
                    <Image source={require('../assets/images/sign-up.png')} />
                    <Text style={styles.text}>Sign Up</Text>
                  </Pressable>
                </View>
              </View>
            </View>
            <Image
              source={require('../assets/images/bottom-wave-2.png')}
              style={[styles.wave, styles.bottomPostion]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wave: {
    width: '100%',
    position: 'absolute',
  },
  bottomPostion: {
    position: 'absolute',
    top: windowHeight - 180,
  },
  inner_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 180,
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
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#8676A2',
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'white',
    letterSpacing: 10,
    textAlign: 'center',
  },

  //
  image: {
    width: windowWidth * 1.6,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: 150,
    paddingVertical: 15,
    // paddingHorizontal: 4,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    // marginLeft: 10,
  },
});

export default Login;
