import React, { useContext, useCallback, useState } from "react";
import { List } from "react-native-paper";
import { StyledSafeAreaView } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Avatar } from "react-native-paper";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextCustomize } from "../../../components/typography/typography.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[5]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;
export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);
  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };
  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );
  return (
    <StyledSafeAreaView>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {photo ? (
            <Avatar.Image size={150} source={{ uri: photo }} />
          ) : (
            <Avatar.Icon size={150} icon="human" />
          )}
        </TouchableOpacity>

        <Spacer position="top" size="medium"></Spacer>
        <TextCustomize variant="label">{user.email}</TextCustomize>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </StyledSafeAreaView>
  );
};
