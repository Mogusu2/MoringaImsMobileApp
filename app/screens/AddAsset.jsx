import {  View,Text,StyleSheet,Platform,StatusBar, Dimensions,} from "react-native";
import Header from "../Components/Header";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../config/colors";
import { useEffect, useState } from "react";
import { CameraView } from "expo-camera";
import { Camera } from "expo-camera";


function AddAsset() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  useEffect(() => {
    const requestCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
     
      if (status === "granted") {
        setHasPermission(true);
      } else {
        setHasPermission(false);
      }
    };
    requestCameraPermission();
  }, []);
  if (hasPermission === null) {
    return <Text>Requesting for camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.assetContainer}>
        <View
          style={{
            flexDirection: "row",
            marginLeft: "10%",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="add-circle-outline" size={25} color={colors.orange} />
          <Text
            style={{
              color: colors.blue,
              fontSize: 15,
              marginLeft: 10,
              fontWeight: "900",
            }}
          >
            Add asset
          </Text>
        </View>
        
        <View style={styles.camera}>
          {hasPermission ? (
            <CameraView
              style={{
                marginTop: 100,  
                width: width * 0.9,
                height: height * 0.7,
                borderWidth: 1,
                borderRadius: 20,
                borderColor: colors.blue,
                alignSelf: "center",
              }}
              type="back"
              barCodeScannerSettings={{
                barCodeScannerEnabled: true,
              }}
              onBarcodeScanned={({ data }) => {
                console.log("Barcode scanned");
                console.log(data);
              }}
              ratio="auto"
              onCameraReady={() => {
                setCameraReady(true);
              }}
            >
              {cameraReady ? (
                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: 200,
                      height: 200,
                      borderWidth: 2,
                      borderColor: colors.orange,
                      borderRadius: 10,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: colors.white,
                      marginTop: 20,
                    }}
                  >
                    Scan the barcode/ QR code
                  </Text>
                </View>
              ) : null}
            </CameraView>
          ) : (
            <Text>No Camera Access</Text>
          )}
        </View>
      </View>
    </View>
  );
}
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  assetContainer: {
    position: "absolute",
    top: 80,
    width: width,
    height: height - 80,
    flexDirection: "column",
    gap: 10,
    alignItems: "flex-start",
    zIndex: -1,
  },
  camera:{    
    alignSelf: "center",
    height : "70%",
    justifyContent: "center",
    alignItems: "center",
   
  }
});
export default AddAsset;
