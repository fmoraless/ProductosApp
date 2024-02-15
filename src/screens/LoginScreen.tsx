import {View, Text, Platform, TouchableOpacity} from 'react-native';
import React from 'react';
import {Background} from '../components/Background';
import {WhiteLogo} from '../components/WhiteLogo';
import {loginStyles} from '../theme/loginTheme';
import {TextInput} from 'react-native-gesture-handler';

export const LoginScreen = () => {
  return (
    <>
      <Background />
      <View style={loginStyles.formContainer}>
        <WhiteLogo />

        <Text style={loginStyles.title}>Login</Text>

        <Text style={loginStyles.label}>Email</Text>
        <TextInput
          placeholder="email@example.com"
          placeholderTextColor="rgba(255,255,255,0.4)"
          keyboardType="email-address"
          underlineColorAndroid="white"
          style={[
            loginStyles.inputField,
            Platform.OS === 'ios' && loginStyles.inputFieldIOS,
          ]}
          selectionColor="white"
          //TODO: onChange, value

          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text style={loginStyles.label}>Constraseña</Text>
        <TextInput
          placeholder="************"
          placeholderTextColor="rgba(255,255,255,0.4)"
          keyboardType="email-address"
          underlineColorAndroid="white"
          style={[
            loginStyles.inputField,
            Platform.OS === 'ios' && loginStyles.inputFieldIOS,
          ]}
          selectionColor="white"
          //TODO: onChange, value

          autoCapitalize="none"
          autoCorrect={false}
        />

        {/* Boton Login */}

        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={loginStyles.button}
            onPress={() => console.log('presionao')}>
            <Text style={loginStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Crear nueva cuenta */}
        <View style={loginStyles.newUserContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => console.log('presionao')}>
            <Text style={loginStyles.buttonText}>Nueva Cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
