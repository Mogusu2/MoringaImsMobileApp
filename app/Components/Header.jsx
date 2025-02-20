import { View, Text ,TextInput, SafeAreaView, StyleSheet } from 'react-native'
import colors from '../config/colors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
function Header() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <FontAwesomeIcon icon={faBars} size={18} color={colors.white} />
            <View style={styles.searchbar}>
            <TextInput 
                placeholder='Search' 
                placeholderTextColor={colors.grey} 
                style={[ styles.searchinput,{zIndex: 1}]} 
               
            />    
            <FontAwesomeIcon icon={faSearch} size={12} color={colors.blue} style={{position: 'absolute', right: 7}} />        
            </View>
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
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: colors.black,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    searchinput: {
        fontSize: 12,
        width: '100%',
        height: 35,
        color: colors.black
    },
    user:{
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5
    },
})
export default Header