import { CameraView, useCameraPermissions } from "expo-camera";
import { useContext, useRef } from "react";
import { Button, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { TextCustomize } from "../../../components/typography/typography.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CameraScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const [permission, requestPermission] = useCameraPermissions();
  const camera = useRef();
  const snap = async () => {
    if (camera) {
      const photo = await camera.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <NotPermit>
        <TextCustomize variant="error">
          We need your permission to show the camera
        </TextCustomize>
        <Button onPress={requestPermission} title="grant permission" />
      </NotPermit>
    );
  }
  const NotPermit = styled.View`
    width: 100%;
    height: 100%;
  `;
  const ProfileCamera = styled(CameraView)`
    width: 100%;
    height: 100%;
  `;
  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        facing="front"
        ref={(cam) => (camera.current = cam)}
      ></ProfileCamera>
    </TouchableOpacity>
  );
};
