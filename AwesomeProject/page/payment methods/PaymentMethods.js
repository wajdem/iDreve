import React from 'react';
import {View, Text, StatusBar } from 'react-native';
import Footer from '../../components/Footer/Footer.js';
import NewVisa from '../../components/NewVisa/NewVisa.js';
import CardVisa from '../../components/CardVisa/CardVisa.js';
import Arrow from '../../components/Arrow/Arrow.js';
import styles from './style.js';



const PaymentMethods = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent"/>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>طرق الدفع</Text>
        <Arrow />
      </View>
        <CardVisa/>
        <NewVisa/>
        <Footer />
    </View>
  );
};

export default PaymentMethods;

