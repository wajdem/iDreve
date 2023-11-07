import { Text, View, StatusBar} from 'react-native';
import React from 'react';
import Footer from '../../components/Footer/Footer.js';
import CardCar from '../../components/CardCar/CardCar.js';
import Arrow from '../../components/Arrow/Arrow.js';
import styles from './style.js';


const Results = () => {
  return (
    <View style={styles.container}>
          <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>النتائج</Text>
        <Arrow />
      </View>
      <CardCar />
    <Footer />
    </View>
  );
};

export default Results;



