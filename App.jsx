
import WelcomeScreen from './app/screens/WelcomeScreen';
import { useEffect, useState } from 'react';
import Dashboard from './app/screens/Dashboard';
export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  },[])
  return (
    loading? <WelcomeScreen /> : <Dashboard />
  );
}

