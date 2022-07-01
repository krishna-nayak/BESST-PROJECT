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
  TextInput,
} from 'react-native';

import AntDegin from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Register = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View>
      <View>
        <StatusBar barStyle={'dark-content'} hidden />

        <View style={styles.container}>
          <Image
            source={require('../assets/images/bottom-wave-2.png')}
            style={[styles.wave, styles.bottomPostion]}
          />
          <View style={styles.inner_container}>
            <View>
              <Text style={{fontSize: 18, fontWeight: '600', color: '#ADA4C1'}}>
                BESST
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  marginTop: 10,
                  marginBottom: 4,
                  color: '#6C4BA0',
                }}>
                Sign Up
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  marginBottom: 5,
                  color: '#ADA4C1',
                }}>
                Please enter the credeials to register
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={text}
                  placeholder={'username'}
                  color={'#6C4BA0'}
                />
                <AntDegin
                  name="user"
                  color="#6C4BA0"
                  size={24}
                  style={{position: 'absolute', top: 10, left: 10}}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={text}
                  placeholder={'e-mail id'}
                />
                <MaterialCommunityIcons
                  name="email-outline"
                  color="#6C4BA0"
                  size={24}
                  style={{position: 'absolute', top: 10, left: 10}}
                />
              </View>
              <Text style={{fontSize: 10, marginBottom: 5, color: '#ADA4C1'}}>
                *password must contain special character & alphanumeric
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={'*********'}
              />
              <Text style={{fontSize: 10, marginBottom: 5, color: '#ADA4C1'}}>
                conforim password
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={'*********'}
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={'moblie number'}
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={'whatspp number'}
              />
              <Text style={{marginBottom: 5, fontSize: 10}}>
                Same as moblie number
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={'select your course'}
              />

              <View style={{alignSelf: 'center'}}>
                <Pressable
                  style={styles.button}
                  onPress={() => Alert.alert('Sign In process')}>
                  <Text style={styles.text}>sign up</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <Text style={{textAlign: 'center', marginTop: 10, color: '#ADA4C1'}}>
            already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => Alert.alert('Simple Button pressed')}>
            <Text style={{textAlign: 'center'}}>Login</Text>
          </TouchableOpacity>
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
    zIndex: -1,
  },
  inner_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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
    width: 120,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#6C4BA0',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  //
  input: {
    // flex: 1,
    borderWidth: 0,
    width: 250,
    marginBottom: 10,
    // padding: 0,
    paddingHorizontal: 40,
    borderRadius: 10,
    backgroundColor: '#F4F2FF',
  },
});

export default Register;
