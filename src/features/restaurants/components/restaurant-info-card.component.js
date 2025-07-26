import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Text, View, Image } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/start";
import open from "../../../../assets/open";
const CardContainer = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;
const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.sizes[2]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;
const Star = styled.View`
  flex-direction: row;
  margin: ${(props) => props.theme.space[2]} 0;
`;
const Address = styled.Text`
  font-size: ${(props) => props.theme.sizes[1]};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  margin-left: ${(props) => props.theme.space[1]};
`;
const RestaurantIcon = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ClosedIcon = styled.Image`
  width: ${(props) => props.theme.sizes[2]};
  height: ${(props) => props.theme.sizes[2]};
`;
const LeftIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Closed = styled.Text`
  color: ${(props) => props.theme.colors.text.error};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const Open = styled(SvgXml)`
  margin: 0 ${(props) => props.theme.space[3]};
`;
const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://media.architecturaldigest.com/photos/572a34ffe50e09d42bdfb5e0/master/pass/japanese-restaurants-la-01.jpg",
    ],
    address = "100 jumpStreet",
    isOpenNow = true,
    rating = 5.4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <>
      <CardContainer elevation={5}>
        <CardCover
          resizeMode="contain"
          source={{
            uri: "https://tse2.mm.bing.net/th/id/OIP.bxvkOTYm3g4rCJLVrZWVoQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
          }}
        />

        <Card.Content>
          <Title> Card Title</Title>

          <RestaurantIcon>
            <Star>
              {ratingArray.map((index) => (
                <SvgXml key={index} xml={star} width={20} height={20} />
              ))}
            </Star>
            <LeftIcon>
              {isClosedTemporarily && <Closed>CLOSED TEMPORARY</Closed>}
              {isOpenNow && <Open xml={open} width={20} height={20}></Open>}
              <ClosedIcon
                source={{
                  uri: icon,
                }}
              />
            </LeftIcon>
          </RestaurantIcon>

          <Address variant="bodyMedium">Card content </Address>
        </Card.Content>
      </CardContainer>
    </>
  );
};

export default RestaurantInfoCard;
