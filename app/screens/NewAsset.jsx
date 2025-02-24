import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  TextInput,
  Button,
  Alert
} from "react-native";
import Header from "../Components/Header";
import colors from "../config/colors";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

function NewAsset({route}) {
  const navigate = useNavigation()
  const {data} = route.params 
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [category, setCategory] = useState("");
  const [space, setSpace] = useState("");
  const [status, setStatus] = useState("");
function handleSubmit(){
    if (data && name && description && condition && category && space && status) {
      
      const newEntry = {
        asset_id: data,
        name: name,
        description: description,
        condition: condition,
        category: category,
        space: space,
        status: status,
      };
      console.log(newEntry)
      
      fetch('https://mobileimsbackend.onrender.com/asset',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEntry)
      })
      .then(response => response.json())
      .then(data => {
        if (data.message === "Asset already exists") {
          Alert.alert(
            "Error",
            "Asset already exists",
          
            [
              {
                text: "OK",
                onPress: () => {
                    navigate.navigate('AddAsset')
                },
              },
            ]
          );    
        }
        else if (data.message === "Asset created successfully") {
          Alert.alert(
            "Success",
            "Asset created successfully",
            [
              {
                text: "OK",
                onPress: () => {
                    navigate.navigate('Dashboard')
                },
              },
            ]
          );
        }
      })
      .catch(error => console.error(error));
    }
    else{
        console.log("error")
    }
}

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
             value={name}
              placeholder="Asset Name"
              style={styles.input}
              onChangeText={text => setName(text)}
            ></TextInput>
          </View>
        </View>
        <View style={{marginTop: 20}}>
           <Text style={{fontSize:13, marginBottom: 5 ,fontWeight:19,fontWeight: "900", color: colors.grey,marginLeft: "10%"}}>Asset description</Text>
           <TextInput 
           value={description}
           multiline={true}
           numberOfLines={6}
           onChangeText={text => setDescription(text)}
           style={{width:"80%", backgroundColor: "lightgrey" ,textAlignVertical: "top" ,alignSelf: "center",height: 130}}>

           </TextInput>
        </View>
        
        <View style={{flexDirection: "row", justifyContent: "space-evenly", marginTop: 20}}>
          <View>
            <Text style={styles.titles}>Asset condition</Text>
            <TextInput
              value={condition}
              onChangeText={text => setCondition(text)}
              placeholder="Asset Name"
              style={styles.input}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.titles}>Category</Text>
            <TextInput
              value={category}
              onChangeText={text => setCategory(text)}
              placeholder="Asset Name"
              style={styles.input}
            ></TextInput>
          </View>
        </View>  

        <View style={{flexDirection: "row", justifyContent: "space-evenly", marginTop: 20, marginBottom: 30}}>
          <View>
            <Text style={styles.titles}>Space</Text>
            <TextInput
              value={space}
              onChangeText={text => setSpace(text)}
             
              placeholder="Asset Space"
              style={styles.input}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.titles}>Status</Text>
            <TextInput
              value={status}
              onChangeText={text => setStatus(text)}
              placeholder="Asset Name"
              style={styles.input}
            ></TextInput>
          </View>
        </View> 
        <View style={{width: "80%", alignSelf: "center"}} >
        <Button
          title="Submit"
          color={colors.orange}
          onPress={handleSubmit}
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
