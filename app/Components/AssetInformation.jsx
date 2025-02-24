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
  import Loading from "./Loading";
  
  function AssetInformation({route}) {
    const navigate = useNavigation()
    const {data} = route.params 
    const [assetData, setAssetData] = useState({})
    const [fetchedData, setFetchedData] = useState(false)
    const [showAlert, setShowAlert] = useState(false);
    useEffect(() => {
      fetch(`https://mobileimsbackend.onrender.com/asset/${data}`)
      .then(response => response.json())
      .then(data => {
        if (data.message === "Asset not found") {
          setShowAlert(true);
        }
        else if (data && Object.keys(data).length > 0) {
         
          setAssetData(data)  
                        
        }
      })
    },[data])
    useEffect(() => {
      if (showAlert) {
        Alert.alert(
          "Error",
          "Asset not found!",
          [
            {
              text: "OK",
              onPress: () => navigate.navigate("BorrowAsset"),
            },
          ],
          { cancelable: false }
        );
        setShowAlert(false);
      }
    }, [showAlert]);
    return (
      <View style={styles.container}>
        <Header />
         {fetchedData ?(<View style={styles.new}>
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
               value={assetData.asset_id}
                placeholder="Asset Name"
                style={styles.input}
              ></TextInput>
            </View>
            <View>
              <Text style={styles.titles}>Asset Name</Text>
              <TextInput
              value={assetData.name}
                placeholder="Asset Name"
                style={styles.input}
              ></TextInput>
            </View>
          </View>
          <View style={{marginTop: 20}}>
             <Text style={{fontSize:13, marginBottom: 5 ,fontWeight:19,fontWeight: "900", color: colors.grey,marginLeft: "10%"}}>Asset description</Text>
             <TextInput 
             value={assetData.description}             
             multiline={true}
             numberOfLines={6}
             style={{width:"80%", backgroundColor: "lightgrey" ,textAlignVertical: "top" ,alignSelf: "center",height: 130}}>
  
             </TextInput>
          </View>
          
          <View style={{flexDirection: "row", justifyContent: "space-evenly", marginTop: 20}}>
            <View>
              <Text style={styles.titles}>Asset condition</Text>
              <TextInput
                value={assetData.condition}
                placeholder="Asset Name"
                style={styles.input}
              ></TextInput>
            </View>
            <View>
              <Text style={styles.titles}>Category</Text>
              <TextInput
              value={assetData.category}
                placeholder="Asset Name"
                style={styles.input}
              ></TextInput>
            </View>
          </View>  
  
          <View style={{flexDirection: "row", justifyContent: "space-evenly", marginTop: 20, marginBottom: 30}}>
            <View>
              <Text style={styles.titles}>Asset condition</Text>
              <TextInput
                value={assetData.space}
                placeholder="Asset Space"
                style={styles.input}
              ></TextInput>
            </View>
            <View>
              <Text style={styles.titles}>Status</Text>
              <TextInput
              value={assetData.status}
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
        </View>) : <Loading />}
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
  export default AssetInformation;
  