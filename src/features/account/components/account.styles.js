import styled from "styled-components";
export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home.jpg"),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
`;
