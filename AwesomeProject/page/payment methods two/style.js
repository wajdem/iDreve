import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      position: 'relative',
      marginTop: 60,
    },
    imgAndText:{
      alignItems: 'center',
      marginBottom:150,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 10,
      marginLeft:140,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#000000',
    },
    Text1: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#000000',
      marginTop:35,
    },
    Text2: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#000000',
    },
    image: {
      width: 316,
      height: 288,
      marginTop:110,
    },
  });

export default styles;