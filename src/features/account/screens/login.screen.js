import React, { useContext, useState } from "react";
import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  Title,
  AuthInputContainer,
  AuthInput,
  ErrorContainer,
  LoginButton,
} from "../components/account.styles";
import { TextInput } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { TextCustomize } from "../../../components/typography/typography.component";

import { ActivityIndicator, MD2Colors } from "react-native-paper";
export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <Title>LOGIN</Title>
      <AccountContainer>
        <AuthInputContainer>
          <AuthInput
            label="Email"
            value={email}
            textContentType="emailAddress"
            autoCapitalize="none"
            onChangeText={(email) => setEmail(email)}
          />

          <AuthInput
            label="Password"
            secureTextEntry
            value={password}
            right={<TextInput.Icon icon="eye" />}
            onChangeText={(pass) => setPassword(pass)}
          />

          {error && (
            <ErrorContainer>
              <TextCustomize variant="error">{error}</TextCustomize>
            </ErrorContainer>
          )}
          {!isLoading ? (
            <LoginButton onPress={() => onLogin(email, password)}>
              Login
            </LoginButton>
          ) : (
            <ActivityIndicator animating={true} color={MD2Colors.blueA200} />
          )}
        </AuthInputContainer>
      </AccountContainer>
      <Spacer position="top" size="large" />
      <AuthButton icon="arrow-left" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};
