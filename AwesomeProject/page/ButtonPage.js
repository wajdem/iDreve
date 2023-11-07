import React from 'react';
import { View, Button, StyleSheet  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ButtonPage = () => {
  const navigation = useNavigation();

  const Results = () => {
    navigation.navigate('Results');
  };

  const paymentMethods = () => {
    navigation.navigate('paymentMethods');
  };

  const paymentMethodsTwo = () => {
    navigation.navigate('paymentMethodsTwo');
  };

  return (
    <View style={styles.container}>
      <Button title="Results" onPress={Results} style={styles.button} />
      <Button title="payment Methods" onPress={paymentMethods} style={styles.button} />
      <Button title="payment Methods Two" onPress={paymentMethodsTwo}  style={styles.button}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      gap:10,
      alignItems: 'center',
    },
  });

export default ButtonPage;
