import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      padding: 10,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(255, 255, 255)',
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 15,
      color: '#000000',
    },
    card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderRadius: 16,
      padding: 8,
      width: 327,
      height: 145,
      margin: 10,
      borderColor: '#2694c6',
      borderWidth: 2,
    },
    Left: {
      flex: 1,
    },
    Right: {
      flex: 1,
    },
    image: {
      width: 150,
      height: 86,
    },
    location: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    price: {
      flexDirection: 'row',
      alignItems: 'center',
      fontSize:20,
      color: '#000000',
      fontWeight: 'bold',
    },
    locationTextOne: {
      fontSize: 15,
      marginLeft: 18,
      color:'#787878',
    },
    locationTextTwo: {
      fontSize: 15,
      fontWeight: 'bold',
      color:'#000000',
      marginLeft: 10,
    },
    nameCar: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000000',
      marginRight: 19,
    },
    companyCar: {
      fontSize: 17,
      fontWeight: 'bold',
      color:'#787878',
      marginRight: 19,
    },
    detailsCar:{
      marginBottom: 20,
    },
    calendar:{
      width:23,
      height:23,
      marginLeft:10,
    },
    locationIcon:{
      width:45,
      height:45,
    },
  });
export default styles;