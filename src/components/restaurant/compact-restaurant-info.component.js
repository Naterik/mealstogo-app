import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { TextCustomize } from "../typography/typography.component";
import { Spacer } from "../spacer/spacer.component";
import { useNavigation } from "@react-navigation/native";

const CompactImage = styled.Image.attrs({
  resizeMode: "cover",
})`
  border-radius: 10px;
  width: 120px;
  height: 120px;
  padding: 10px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 100%;
  max-heigh: 100%;
  align-items: center;
`;

const TextMarker = styled(TextCustomize)`
  text-align: center;
  max-width: 120px;
`;

export const CompactRestaurantInfo = ({ restaurant }) => {
  const navigation = useNavigation();
  return (
    <Item>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("RestaurantDetail", {
            restaurant,
          })
        }
      >
        <CompactImage source={{ uri: restaurant.photos[0] }} />
        <Spacer position="top" size="medium" />
        <TextMarker>{restaurant.name}</TextMarker>
      </TouchableOpacity>
    </Item>
  );
};
