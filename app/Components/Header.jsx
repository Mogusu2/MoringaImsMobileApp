import { View, Text, Dimensions ,TextInput, SafeAreaView, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import colors from '../config/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState, useContext } from 'react';
import { NavContext } from '../Contexts/navContext';
import Menu from './Menu';
function Header() {
    const {showMenu, setShowMenu} = useContext(NavContext);
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    function handlePress() {
        setShowMenu(!showMenu);
    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback style={{zIndex: 1, elevation:5}} onPress={(event)=> {
                  const { locationX, locationY } = event.nativeEvent;
                  const menuWidth = screenWidth * 0.75;
                  const menuHeight = screenHeight;
                  if (locationX > menuWidth || locationY > menuHeight) {
                    setShowMenu(false);
                  }
                  
            }}>
                 <View style={{flex: 1,elevation: 5}}>
                 { showMenu ? (
                    <TouchableWithoutFeedback
                    
                    style={styles.menu}
                    onPress={(event)=> {
                        event.stopPropagation();
                        setShowMenu(true)}}
                    >
                    <Menu />
                 </TouchableWithoutFeedback>) : null}
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
    menu:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '75%',
        height: '100%',
        zIndex: 10,
        elevation: 5,        
    },
})
export default Header