import React, { useContext } from "react";
import { View, Text } from "react-native";
import { List } from "react-native-paper";
import { StyledSafeAreaView } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Avatar } from "react-native-paper";
import { Button } from "react-native-paper";
import styled from "styled-components";
import { TextCustomize } from "../../../components/typography/typography.component";
import { Spacer } from "../../../components/spacer/spacer.component";
const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[5]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;
export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <StyledSafeAreaView>
      <AvatarContainer>
        <Avatar.Icon size={150} icon="folder" />
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
