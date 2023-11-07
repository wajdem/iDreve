import {View, Pressable , Image} from 'react-native';
import React from 'react';
import styles from './style';


const Arrow = () => {
  return (
        <Pressable
        style={styles.rectangleParent}
      >
        <View style={styles.groupChild} />
        <Image
          style={styles.arrowSmallUp1Icon}
          source={require('../../assets/RightArrow.png')}
        />
      </Pressable>
  );
};

export default Arrow;




