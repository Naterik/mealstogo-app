import {
  CardContainer,
  CardCover,
  Star,
  RestaurantIcon,
  ClosedIcon,
  LeftIcon,
} from "./restaurant-info-card.styles";
import { Card } from "react-native-paper";
import { TextCustomize } from "../../../components/typography/typography.component";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/start";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";

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
          <TextCustomize variant="label">Card Title</TextCustomize>
          <RestaurantIcon>
            <Star>
              {ratingArray.map((index) => (
                <SvgXml key={index} xml={star} width={20} height={20} />
              ))}
            </Star>
            <LeftIcon>
              {isClosedTemporarily && (
                <TextCustomize variant="error">CLOSED TEMPORARY</TextCustomize>
              )}
              <Spacer position="left" size="medium">
                {isOpenNow && (
                  <SvgXml xml={open} width={20} height={20}></SvgXml>
                )}
              </Spacer>
              <Spacer position="left" size="medium">
                <ClosedIcon
                  source={{
                    uri: icon,
                  }}
                />
              </Spacer>
            </LeftIcon>
          </RestaurantIcon>
          <TextCustomize variant="body">Card content </TextCustomize>
        </Card.Content>
      </CardContainer>
    </>
  );
};

export default RestaurantInfoCard;
