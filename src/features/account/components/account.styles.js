import styled from "styled-components";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { TextCustomize } from "../../../components/typography/typography.component";
import { TextInput } from "react-native-paper";
import LottieView from "lottie-react-native";
export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Title = styled(TextCustomize)`
  font-size: 30px;
  margin-bottom: ${(props) => props.theme.space[1]};
`;
export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
`;
export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
`;
export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
  mode: "contained",
})`
  padding: ${(props) => props.theme.space[1]};
`;
export const AuthInput = styled(TextInput)`
  width: 300px;
  height: 60px;
  margin-bottom: ${(props) => props.theme.space[4]};
`;
export const AuthInputContainer = styled.View`
  padding: ${(props) => props.theme.space[1]};
`;
export const LoginButton = styled(AuthButton).attrs({
  icon: "lock",
})`
  width: 300px;
`;
export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[4]};
`;

export const Animation = styled(LottieView)`
  position: absolute;
  width: 100%;
  bottom: 200px;
  height: 100%;
`;
