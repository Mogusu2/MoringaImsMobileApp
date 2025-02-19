import { View, Text ,TextInput, SafeAreaView, StyleSheet } from 'react-native'
import colors from '../config/colors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
function Header() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <FontAwesomeIcon icon={faBars} size={18} color={colors.white} />
            <TextInput 
                placeholder='Search' 
                placeholderTextColor={colors.black} 
                style={[styles.searchbar,{zIndex: 1}]} 
               
            />
            <View style={styles.user}>
                <FontAwesomeIcon icon={faUser} size={18} color={colors.white} />
                <Text style={{color: colors.white, fontSize: 11}}>Hosea M.</Text>
            </View>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    header: {
        backgroundColor: colors.blue,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    searchbar: {
        width: 160,
        height: 25,
        fontSize: 12,
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: colors.black,
    },
    user:{
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5
    },
})
export default Header