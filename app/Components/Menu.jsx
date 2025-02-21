import { View,Image,Text,StyleSheet } from "react-native"
import colors from "../config/colors"
import { Colors } from "react-native/Libraries/NewAppScreen"
function Menu(){
    return(
        <View style={styles.menu}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/darkLogo.png')} />
            </View>
        </View>
    )
}
const styles= StyleSheet.create({
    menu: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '75%',
        height: '100%',
        backgroundColor: colors.blue,
        zIndex: 2, 
        elevation: 10
    },
    logoContainer:{
        width: '100%',
        height: 70,
        alignSelf: 'center',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBlockColor: colors.white
    },
    logo: {
        resizeMode: 'contain',
        width: '80%',
        height: '100%',
    },
})
export default Menu