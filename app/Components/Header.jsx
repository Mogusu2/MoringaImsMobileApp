import { View, Text ,TextInput, SafeAreaView, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import colors from '../config/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';
import Menu from './Menu';
function Header() {
    const [showMenu, setShowMenu] = useState(false);
    function handlePress() {
        setShowMenu(!showMenu);
    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={handlePress}>
                 <View style={{flex: 1,elevation: 5}}>
                 { showMenu ? <Menu /> : null}
            <View style={styles.header}>
            <Icon onPress={handlePress} name='menu' size={27} color={colors.white} />
            <View style={styles.searchbar}>
            <TextInput 
                placeholder='Search by name ...' 
                placeholderTextColor={colors.grey} 
                style={[ styles.searchinput,{zIndex: 2}]} 
               
            />    
 
            <Icon name="search" size={16} color={colors.grey} style={{position: 'absolute', right: 7}} />         
            </View>
            <View style={styles.user}>
                <Icon name="perm-identity" size={27} color={colors.white} />                
                <Text style={{color: colors.white, fontSize: 11}}>Hosea M.</Text>
            </View>
            </View>       
                 </View>   
            </TouchableWithoutFeedback>

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
        width: 170,
        height: 25,        
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: colors.black,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 2
    },
    searchinput: {
        fontSize: 12,
        width: '100%',
        height: 35,
        color: colors.black,
        
    },
    user:{
        flexDirection: 'column',
        alignItems: 'center',
        
    },
})
export default Header