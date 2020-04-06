import React from 'react';
import { View, StatusBar} from 'react-native';
import styles from './GeneralStatusBarStyles';

export default function GeneralStatusBarColor({ backgroundColor, ...props }) {
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  );
}
