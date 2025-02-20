import { Text, View, StyleSheet,Platform,StatusBar } from "react-native";
import Header from "../Components/Header";
function Dashboard() {
    return (
        <View style={sytles.container}>
            <Header />
        </View>
    );
}

const sytles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0


    }
})
export default Dashboard