import styled from "styled-components/native";
import { Card } from "react-native-paper";
export const CardContainer = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
export const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const Star = styled.View`
  flex-direction: row;
  margin: ${(props) => props.theme.space[2]} 0;
`;

export const RestaurantIcon = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ClosedIcon = styled.Image`
  width: ${(props) => props.theme.sizes[2]};
  height: ${(props) => props.theme.sizes[2]};
`;
export const LeftIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;
