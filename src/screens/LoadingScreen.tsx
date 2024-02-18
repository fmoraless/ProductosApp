import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

export default function LoadingScreen() {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size={50} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
