import {View, Image,Text, StatusBar} from 'react-native';
import React from 'react';
import Footer from '../../components/Footer/Footer.js';
import NewVisa from '../../components/NewVisa/NewVisa.js';
import Arrow from '../../components/Arrow/Arrow.js';
import styles from './style.js';


const paymentTwo = () => {
  return (
    <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent"/>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>طرق الدفع</Text>
        <Arrow />
      </View>
      <View style={styles.imgAndText}>
  <Image
    source={require('../../assets/wajde.png')} // Replace with your image source
    style={styles.image}
  />
    <Text style={styles.Text1}>
      ليس لديك أي بطاقات دفع
    </Text>
    <Text style={styles.Text2}>
      محفوظة
    </Text>
    <NewVisa />
</View>
<Footer />
    </View>

  );
};


export default paymentTwo;
