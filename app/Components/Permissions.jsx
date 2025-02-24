import { Camera } from 'expo-camera';
const requestCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    return status   
};
export default requestCameraPermission