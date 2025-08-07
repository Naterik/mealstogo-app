// CheckoutScreen.tsx
import { StyledSafeAreaView } from "../../../components/utility/safe-area.component";
import { StripeProvider } from "@stripe/stripe-react-native";
import { CreditCardInput } from "../components/credit-card.components";
import { PUBLIC_STRIPE_KEY } from "../../../utils/env";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../services/cart/cart.context";
import { CartIcon, CartIconContainer } from "../components/checkout.styles";
import { TextCustomize } from "../../../components/typography/typography.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-card.component";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
export const CheckoutScreen = () => {
  const { cart, restaurant } = useContext(CartContext);
  const [sum, setSum] = useState(0);
  useEffect(() => {
    if (!cart.length) {
      setSum(0);
      return;
    }
    const newSum = cart.reduce((item, { price }) => {
      return (item += price);
    }, 0);
    setSum(newSum);
  }, [cart]);
  if (!cart || !restaurant) {
    return (
      <StyledSafeAreaView>
        <CartIconContainer>
          <CartIcon />
          <Spacer position="bottom" size="small" />
          <TextCustomize variant="label">Cart is empty!</TextCustomize>
        </CartIconContainer>
      </StyledSafeAreaView>
    );
  }
  return (
    <StyledSafeAreaView>
      <StripeProvider publishableKey={PUBLIC_STRIPE_KEY}>
        <RestaurantInfoCard restaurant={restaurant} />
        <ScrollView>
          <Spacer position="left" size="medium">
            <TextCustomize variant="body">Your Order</TextCustomize>

            <List.Section>
              {cart.map(({ item, price }) => {
                console.log("item", item);
                console.log("price", price);
                return (
                  <List.Item
                    key={`${item} +${Math.random()}`}
                    title={`${item} - ${price / 100}`}
                  />
                );
              })}
            </List.Section>
            <TextCustomize variant="body">Total:{sum / 100}</TextCustomize>
          </Spacer>
        </ScrollView>

        <CreditCardInput />
      </StripeProvider>
    </StyledSafeAreaView>
  );
};
