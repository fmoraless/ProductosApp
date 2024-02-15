import {View,Image, StyleSheet} from 'react-native';
import React from 'react';

export const WhiteLogo = () => {
  return (
    <View
      style={styles.imageContainer}>
      <Image
        source={require('../assets/react-logo-white.png')}
        style={styles.imageDimensions}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageDimensions:{
    width: 110,
    height: 100,
  },
  imageContainer: {
    alignItems: 'center',
  }
});