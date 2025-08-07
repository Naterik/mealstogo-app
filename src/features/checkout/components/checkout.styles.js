import { ActivityIndicator, Avatar, MD2Colors } from "react-native-paper";
import { Button } from "react-native-paper";
import styled from "styled-components";

export const CartIconContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const CartIcon = styled(Avatar.Icon).attrs({
  size: 200,
  icon: "cart-off",
})`
  background-color: ${(props) => props.theme.colors.brand.primary};
`;
export const PayButton = styled(Button).attrs({
  mode: "contained",
})`
  padding: ${(props) => props.theme.space[1]};
  width: 80%;
  align-self: center;
  margin-top: ${(props) => props.theme.space[4]};
`;
export const PaymentProcessing = styled(ActivityIndicator).attrs({
  animating: true,
  color: MD2Colors.blueA200,
  size: 120,
})`
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 9;
`;
