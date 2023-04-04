import React, { useEffect } from 'react';
import { StyleSheet, Pressable, Text, View, Image } from 'react-native';
import { AuthStackNavigationProps } from '../types/navigationTypes';

import FastImage from 'react-native-fast-image';

const SplashScreen = ({ navigation, }: AuthStackNavigationProps<'SplashScreen'> ) =>
{      
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    setTimeout(() => {
        navigation.navigate('LaunchScreen');
      }, 5000); // Ch
  }, []);

  
  return (
    <View style={styles.container}>
        <Text>SplashScreen</Text>
        <FastImage
          source={require ('../assets/animations/loading.gif')}
          style={styles.gif} 
          priority={FastImage.priority.high} 
          resizeMode={FastImage.resizeMode.contain}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#000000',
    //   color: '#FFFFFF',
    },
    gif:{
        width: '200%',
        height: '200%',
    },
});


export default SplashScreen;