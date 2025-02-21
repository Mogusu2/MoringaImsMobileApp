import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from "../config/colors";
function DashboardStatistics({icon, title, value}) {
    return (
        <View style={styles.container}>
            <Icon name={icon} style={{marginTop: 5}} size={50} color={colors.darkerShadeOfWhite} />
            <Text style={{color: colors.darkerShadeOfWhite, fontSize: 12, fontWeight: '900'}} >{value}</Text>
            <Text style={{color: colors.darkerShadeOfWhite, paddingBottom: 7 ,fontSize: 15, fontWeight: '900'}} >{title}</Text>
            
        </View>
    );
}   
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        width: '32%',
        alignItems: 'center',
        borderRadius: 10,
       
        
    }
})
export default DashboardStatistics