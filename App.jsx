import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { useEffect, useState } from 'react';
export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[])
  return (
    !loading? <WelcomeScreen /> : null
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
