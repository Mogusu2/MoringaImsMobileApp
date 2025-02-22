import { View,Image,Text,StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import colors from "../config/colors"
import Icon from 'react-native-vector-icons/MaterialIcons';
import Profile from "../screens/Profile";
import { useNavigation } from '@react-navigation/native';
function MenuItem({icon, title}) {
    return(
        <View style={styles.menuItems}>
            <Icon name={icon} size={23} color={colors.white} />
            <Text style={{color: colors.white, fontSize: 15, fontWeight: '900'}}>{title}</Text>
        </View>
        )
}
function Menu(){
    const navigation = useNavigation();
    return(
        <View style={styles.menu}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/darkLogo.png')} />
            </View>
            <MenuItem icon={'dashboard-customize'} title={'Dashboard'} />
            <MenuItem icon={'add-circle-outline'} title={'Add asset'} />
            <MenuItem icon={'inventory-2'} title={'Borrow asset'} />
            <MenuItem icon={'assignment'} title={'Return asset'} />
            <MenuItem icon={'notifications'} title={'Notifications'} />
            <TouchableOpacity style={styles.profile} onPress={() => navigation.navigate('Profile')}>
                <Icon name={'account-circle'} size={31} color={colors.white} />
                <Text style={{color: colors.white, fontSize: 14, fontWeight: '500'}} >Hosea Karanja</Text>
            </TouchableOpacity>

        </View>
    )
}
const screenHeight = Dimensions.get('window').height;
const styles= StyleSheet.create({
    
    menu: {
        position: 'absolute',
        top: 80,
        left: 0,
        width: '75%',
        height: (screenHeight - 80),
        backgroundColor: colors.blue,
        zIndex: 10, 
        elevation: 10,
        borderRightWidth: 1,
        borderRightColor: colors.grey,
        
    },
    logoContainer:{
        width: '100%',
        height: 70,
        alignSelf: 'center',
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 0.5,
        borderBottomWidth: 0,
        borderBlockColor: colors.white,
        marginBottom: 20
    },
    logo: {
        resizeMode: 'contain',
        width: '65%',
        height: '100%',
    },
    menuItems: {
        width: '100%',
        backgroundColor: colors.blue,
        marginTop: 14,
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'flex-start',
        paddingStart: '10%',
        gap: 10,
        alignItems: 'center',
        padding: 5,
        borderBottomWidth: 0.3,
        borderBlockColor: colors.white
    },
    profile: {
        position: 'absolute',
        bottom: 10,
        marginTop: 14,
        flexDirection: 'row',
        width: '100%',
        paddingStart: '5%',
        gap: 10,
        alignItems: 'center',
    }
})
export default Menu