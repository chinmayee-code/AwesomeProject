import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkBlue} from './Constants';
import Field from './Field';

const Login = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 350,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: darkBlue, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 16,
              marginBottom: 200,
            }}>
            <Text style={{color: darkBlue, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <View style={styles.loginOptionLogo}>
            <View style={styles.loginView}>
              <Image
                source={require('./assets/search.png')}
                style={styles.loginOption}
              />
            </View>

            <View style={styles.loginView}>
              <Image
                source={require('./assets/facebook.png')}
                style={styles.loginOption}
              />
            </View>

            <View style={styles.loginView}>
              <Image
                source={require('./assets/apple.png')}
                style={styles.loginOption}
              />
            </View>

            <View style={styles.loginView}>
              <Image
                source={require('./assets/twitter.png')}
                style={styles.loginOption}
              />
            </View>
          </View>

          <Btn
            textColor="white"
            bgColor={darkBlue}
            btnLabel="Login"
            Press={() => alert('Logged In')}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Don't have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text style={{color: darkBlue, fontWeight: 'bold', fontSize: 16}}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
const styles = StyleSheet.create({
  loginOptionLogo: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    padding: 7,
  },
  loginOption: {
    height: 40,
    width: 40,
  },
  loginView: {
    padding: 7,
    borderColor: '#b3b3b3',
    borderWidth: 1.5,
    borderRadius: 5,
    margin: 4,
    backgroundColor: '#f8f4f4',
  },
});
