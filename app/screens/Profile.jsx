import { View, Text, StyleSheet,Platform,StatusBar, TextInput, Button } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from "../config/colors";

function Profile({navigation}){
   
    return(
        <View style={styles.container}>
            <Icon onPress={()=>{navigation.goBack()}} style={styles.back} name="arrow-back" size={27} color={colors.white} />
            <View style={styles.profile}>           
              <Text style={{color: colors.white, fontSize: 20, fontWeight: '900', marginBottom: 10}} >My Profile</Text>
              <Icon name="perm-identity" size={70} color={colors.white} />
              <Text style={{color: colors.white, fontSize: 14, fontWeight: '500'}} >Hosea Karanja</Text>
            </View>
            <View style={{marginHorizontal: 15, marginTop: 20}}>
                <Text style={styles.label} >Name</Text>
                <TextInput
                style={styles.input}
                placeholder="Name"
                
                >
                    
                </TextInput>
                <Text style={styles.label} >Email</Text>
                <TextInput
                style={styles.input}
                placeholder="Email"

                >

                </TextInput>
                <Text style={styles.label} >Contact</Text>
                <TextInput
                style={styles.input}
                placeholder="Phone Number"
                >

                </TextInput>
                <Text style={styles.label} >Passsword</Text>
                <TextInput
                style={[styles.input, {marginBottom: 60}]}
                placeholder="password"
                >
                    
                </TextInput>  
                <Text style={{position: 'absolute', right: 5, top: 270,color: colors.orange, fontSize: 16, fontWeight: '600'}} >Change Password?</Text>              
                <Button 
                title="Edit details"
                color={colors.blue}
                
                >
                   
                </Button>
            </View>
        </View>
    
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight :0,
        height: '100%',
        
    },
    profile:{
        height: '20%',
        backgroundColor: colors.blue,
        alignItems: 'center',
        justifyContent: 'center',   
    },
    back: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1
    },
    input:{
        borderBottomWidth: 1,
        marginBottom: 25,
        borderBottomColor: colors.grey
    },
    label:{
        color: colors.blue,
        fontSize: 16,
        fontWeight: '600',
       
    }
})
export default Profile