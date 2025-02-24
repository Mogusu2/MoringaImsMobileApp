import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { View, StyleSheet, Dimensions } from "react-native"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import colors from "../config/colors"
function Loading(){
    return(
        <View style={styles.container}> 
           <FontAwesomeIcon
           style={{
            fontSize: 40
           }}
            icon={faSpinner} spinPulse />
        </View>
    )
}
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        height:height - 80,
        width: width,       
        justifyContent: "center",
        alignItems: "center"
    }
})
export default Loading