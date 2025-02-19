import { ImageBackground, StyleSheet, Image,View } from "react-native"

function WelcomeScreen() {
  return (
    <View
      style={styles.background}
      source={require('../assets/cover.jpg')}
    >
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
    </View>
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