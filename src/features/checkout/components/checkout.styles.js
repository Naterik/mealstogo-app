import { Avatar } from "react-native-paper";

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
