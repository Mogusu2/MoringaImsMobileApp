import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  TextInput,
  Button
} from "react-native";
import Header from "../Components/Header";
import colors from "../config/colors";

function NewAsset({route}) {
  const {data} = route.params  
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.new}>
        <Text
          style={{
            color: colors.blue,
            fontSize: 20,
            fontWeight: "900",
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          Asset Information
        </Text>
        <View style={{flexDirection: "row", justifyContent: "space-evenly", marginTop: 20}}>
          <View>
            <Text style={styles.titles}>Asset Id</Text>
            <TextInput
             value={data}
              placeholder="Asset Name"
              style={styles.input}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.titles}>Asset Name</Text>
            <TextInput
              placeholder="Asset Name"
              style={styles.input}
            ></TextInput>
          </View>
        </View>
        <View style={{marginTop: 20}}>
           <Text style={{fontSize:13, marginBottom: 5 ,fontWeight:19,fontWeight: "900", color: colors.grey,marginLeft: "10%"}}>Asset description</Text>
           <TextInput 
           multiline={true}
           numberOfLines={6}
           style={{width:"80%", backgroundColor: "lightgrey" ,textAlignVertical: "top" ,alignSelf: "center",height: 130}}>

           </TextInput>
        </View>
        
        <View style={{flexDirection: "row", justifyContent: "space-evenly", marginTop: 20}}>
          <View>
            <Text style={styles.titles}>Asset condition</Text>
            <TextInput
              placeholder="Asset Name"
              style={styles.input}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.titles}>Category</Text>
            <TextInput
              placeholder="Asset Name"
              style={styles.input}
            ></TextInput>
          </View>
        </View>  

        <View style={{flexDirection: "row", justifyContent: "space-evenly", marginTop: 20, marginBottom: 30}}>
          <View>
            <Text style={styles.titles}>Asset condition</Text>
            <TextInput
              placeholder="Asset Space"
              style={styles.input}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.titles}>Status</Text>
            <TextInput
              placeholder="Asset Name"
              style={styles.input}
            ></TextInput>
          </View>
        </View> 
        <View style={{width: "80%", alignSelf: "center"}} >
        <Button
          title="Submit"
          color={colors.orange}
          
        >
        </Button>         
        </View>            
      </View>
    </View>
  );
}

const height = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  new: {
    marginTop: 80,
    width: "100%",
    height: height.height - 80,
    backgroundColor: colors.white,
    borderWidth: 5,
    borderColor: "white",
    zIndex: -1,
  },
  input: {
    backgroundColor: "lightgrey",
    paddingLeft: 10,
    width: 150,
    height: 33,
    fontSize: 11,
  },
  titles: {
    color: colors.grey,
    fontSize: 13,
    fontWeight: "900",
    marginBottom: 5,
  }
});
export default NewAsset;
