import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Results from './page/Results/Results';
import paymentMethods from './page/payment methods/PaymentMethods';
import paymentMethodsTwo from './page/payment methods two/paymentTwo';
import ButtonPage from './page/ButtonPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ButtonPage"
        screenOptions={{
            headerShown: false,
          }}>
        <Stack.Screen name="ButtonPage" component={ButtonPage} />
        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen name="paymentMethods" component={paymentMethods} />
        <Stack.Screen name="paymentMethodsTwo" component={paymentMethodsTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
