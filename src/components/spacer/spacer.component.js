import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  xs: 1,
  small: 2,
  medium: 3,
  large: 4,
  xl: 5,
  xxl: 6,
  xxxl: 7,
};
const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  bottom: "marginBottom",
  right: "marginRight",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property} : ${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;
export const Spacer = ({ position = "top", size = "small", children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
