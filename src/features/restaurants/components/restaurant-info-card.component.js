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
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <>
      <CardContainer elevation={3}>
        <CardCover
          key={name}
          source={{
            uri: photos[0],
          }}
        />
        <Card.Content>
          <TextCustomize variant="label">{name}</TextCustomize>
          <RestaurantIcon>
            <Star>
              {ratingArray.map((_, i) => (
                <SvgXml
                  key={`${placeId}-${i}`}
                  xml={star}
                  width={20}
                  height={20}
                />
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

          <TextCustomize variant="body">{address} </TextCustomize>
        </Card.Content>
      </CardContainer>
    </>
  );
};

export default RestaurantInfoCard;
