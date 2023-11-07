import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';


const NewVisa = () => {
  return (

      <TouchableOpacity style={styles.Button}>
      <LinearGradient
        colors={['#2592c4', '#074880']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      >
        <Text style={styles.textButton}>
        إضافة بطاقة جديدة
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default NewVisa;
