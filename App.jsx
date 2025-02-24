
import WelcomeScreen from './app/screens/WelcomeScreen';
import { useEffect, useState } from 'react';
import Dashboard from './app/screens/Dashboard';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './app/screens/Profile';
import Menu from './app/Components/Menu';
import AddAsset from './app/screens/AddAsset';
import BorrowAsset from './app/screens/BorrowAsset';
import NewAsset from './app/screens/NewAsset';
import ReturnAsset from './app/screens/ReturnAsset';
import { useNavigation } from '@react-navigation/native'
export default function App() { 
  const Stack = createStackNavigator();
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
        <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
        <Stack.Screen name="AddAsset" component={AddAsset} options={{headerShown: false}} />
        <Stack.Screen name="NewAsset" component={NewAsset} options={{headerShown: false}} />
        <Stack.Screen name="BorrowAsset" component={BorrowAsset} options={{headerShown: false}} />
        <Stack.Screen name="ReturnAsset" component={ReturnAsset} options={{headerShown: false}} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

