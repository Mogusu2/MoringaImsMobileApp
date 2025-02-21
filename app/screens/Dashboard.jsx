import { Text, View, StyleSheet,Platform,StatusBar, TouchableWithoutFeedback } from "react-native";
import Header from "../Components/Header";
import DashboardStatistics from "../Components/DashboardStatistics";
import colors from "../config/colors";
import { NavContext } from "../Contexts/navContext";
import { useContext } from "react";
function Dashboard() {
    const {showMenu, setShowMenu} = useContext(NavContext);
    return (
        <View style={sytles.container}>
            <Header />
            <TouchableWithoutFeedback
            onPress={() => {
                setShowMenu(false);

            }}
            >
            <View style={sytles.dashboardinfor}>
                <Text style={{color: colors.blue, fontSize: 20, fontWeight: '900', marginLeft: 20, marginBottom: 20}} >Dashboard</Text>
                <View style={sytles.statistics}>
                    <DashboardStatistics icon={'group'} value={53} title={'Users'} />
                    <DashboardStatistics icon={'inventory'} value={5} title={'Assets'}/>
                    <DashboardStatistics icon={'category'} value={3} title={'Categories'} />        
                </View>
            </View>            

            </TouchableWithoutFeedback>
        </View>
    );
}

const sytles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        justifyContent: 'flex-start'
    },
    dashboardinfor:{
        position: 'absolute',
        top: 80,
        left:0,
        width: '100%',
        marginTop: 20,
        
    },
    statistics: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
})
export default Dashboard