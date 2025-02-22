import { View,Text, StyleSheet,Platform,StatusBar,Dimensions } from "react-native"
import Header from "../Components/Header"
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from "../config/colors";

function AddAsset() {

    return(
        <View style={styles.container}>
            <Header />
            <View style={styles.assetContainer}>
                <View style={{flexDirection: 'row', marginLeft: '10%', marginTop: 20,alignItems: 'center', justifyContent: 'center'}}>
                  <Icon name="add-circle-outline" size={25} color={colors.orange} />
                  <Text style={{color: colors.blue, fontSize: 15, marginLeft: 10 ,fontWeight: '900'}} >Add asset</Text>            
                </View>
                <View>
                    
                </View>
            </View>
            
        </View>
    )
}
const height = Dimensions.get('window').height
const width =  Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight :0,

    },
    assetContainer:{
        position: 'absolute',
        top: 80,
        width: width,
        height: (height-80),
        flexDirection: 'row',
        alignItems: 'flex-start',  
        zIndex: -1      

    }
})
export default AddAsset