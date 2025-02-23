import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
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
        <Text style={{ marginTop: 20, marginBottom: 5,color: colors.blue, fontSize: 15, marginLeft: "10%", fontWeight: "900"}}>Scan the Barcode:</Text>
        <View style={styles.camera}>
          {hasPermission ? (
            <CameraView
              style={{width: width * 0.9, height: width / (4 / 3),borderWidth: 1, boarderRadius: 20, borderColor: colors.blue, alignSelf: "center", }}
              type="back"
              ratio="auto"
              onCameraReady={() => {
                
                setCameraReady(true);
              }}
            >
              {cameraReady ? <Text>Camera is ready</Text> : null}
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
    height: "fit-content",
    justifyContent: "center",
    alignItems: "center",
   
  }
});
export default AddAsset;
