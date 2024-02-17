import {View, Text} from 'react-native';
import React from 'react';
import {loginStyles} from '@src/theme/loginTheme';

export const ProtectedScreen = () => {
  return (
    <View>
      <Text style={loginStyles.title}>ProtectedScreen</Text>
      <Text style={loginStyles.label}>Estas autenticado</Text>
    </View>
  );
};
