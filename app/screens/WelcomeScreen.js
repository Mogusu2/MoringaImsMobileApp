import { useEffect } from "react";
import { ImageBackground, StyleSheet, Image,View } from "react-native"

function WelcomeScreen({navigation}) {
  
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Dashboard')
    },3000)
  },[navigation])

  return (
    <ImageBackground
      style={styles.background}
      
    >
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: '70%',
    resizeMode: 'contain'
  }
})

export default WelcomeScreen