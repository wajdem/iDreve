import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';


const CardVisa = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.card}>
        <View style={styles.text}>
            <Text style={styles.nameVisa}>Credit Card</Text>
            <Text style={styles.cardNumber}>Card Number</Text>
            <Text style={styles.cardNumber}>****  ****  ****  5524</Text>
        </View>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Text style={styles.buttonDelete}>حذف</Text>
            </TouchableOpacity>
          <Text style={styles.separator}>|</Text>
            <TouchableOpacity>
              <Text style={styles.buttonEdit}>تعديل</Text>
            </TouchableOpacity>
        </View>
    </View>
    <View style={styles.card}>
        <View style={styles.text}>
            <Text style={styles.nameVisa}>Credit Card</Text>
            <Text style={styles.cardNumber}>Card Number</Text>
            <Text style={styles.cardNumber}>****  ****  ****  5524</Text>
        </View>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Text style={styles.buttonDelete}>حذف</Text>
            </TouchableOpacity>
          <Text style={styles.separator}>|</Text>
            <TouchableOpacity>
              <Text style={styles.buttonEdit}>تعديل</Text>
            </TouchableOpacity>
        </View>
    </View>
    <View style={styles.card}>
        <View style={styles.text}>
            <Text style={styles.nameVisa}>Credit Card</Text>
            <Text style={styles.cardNumber}>Card Number</Text>
            <Text style={styles.cardNumber}>****  ****  ****  5524</Text>
        </View>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Text style={styles.buttonDelete}>حذف</Text>
            </TouchableOpacity>
          <Text style={styles.separator}>|</Text>
            <TouchableOpacity>
              <Text style={styles.buttonEdit}>تعديل</Text>
            </TouchableOpacity>
        </View>
    </View>
    <View style={styles.card}>
        <View style={styles.text}>
            <Text style={styles.nameVisa}>Credit Card</Text>
            <Text style={styles.cardNumber}>Card Number</Text>
            <Text style={styles.cardNumber}>****  ****  ****  5524</Text>
        </View>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Text style={styles.buttonDelete}>حذف</Text>
            </TouchableOpacity>
          <Text style={styles.separator}>|</Text>
            <TouchableOpacity>
              <Text style={styles.buttonEdit}>تعديل</Text>
            </TouchableOpacity>
        </View>
    </View>
    <View style={styles.card}>
        <View style={styles.text}>
            <Text style={styles.nameVisa}>Credit Card</Text>
            <Text style={styles.cardNumber}>Card Number</Text>
            <Text style={styles.cardNumber}>****  ****  ****  5524</Text>
        </View>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Text style={styles.buttonDelete}>حذف</Text>
            </TouchableOpacity>
          <Text style={styles.separator}>|</Text>
            <TouchableOpacity>
              <Text style={styles.buttonEdit}>تعديل</Text>
            </TouchableOpacity>
        </View>
    </View>
   </ScrollView>
  );
};


const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 8,
    width: 360,
    height: 160,
    margin: 10,
    borderColor: '#2694c6',
    borderWidth: 2,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 10,
    marginBottom:30,
  },
  text: {
   marginLeft:150,
   gap: 8,
   alignItems: 'flex-end',
   marginBottom:30,
  },
  nameVisa:{
   color:'#2694c6',
   fontSize: 25,
   fontWeight: 'bold',
  },
  cardNumber:{
    fontSize:20,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonEdit: {
    fontSize: 20,
    color: '#2694c6',
    marginRight: 8,
  },
  buttonDelete: {
    fontSize: 20,
    color: '#ff4713',
    marginRight: 8,
  },
  separator: {
    fontSize: 16,
    color: '#cecece',
    marginHorizontal: 10,
  },
});

export default CardVisa;
