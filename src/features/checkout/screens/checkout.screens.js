import { StyledSafeAreaView } from "../../../components/utility/safe-area.component";
import { StripeProvider } from "@stripe/stripe-react-native";
import { CreditCardInput } from "../components/credit-card.components";
import { PUBLIC_STRIPE_KEY } from "../../../utils/env";
import { useContext, useState } from "react";
import { CartContext } from "../../../services/cart/cart.context";
import {
  CartIcon,
  CartIconContainer,
  PayButton,
  PaymentProcessing,
} from "../components/checkout.styles";
import { TextCustomize } from "../../../components/typography/typography.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-card.component";
import { ScrollView, Alert } from "react-native";
import { List, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { payRequest } from "../../../services/checkout/checkout.service";
import { useStripe } from "@stripe/stripe-react-native";
export const CheckoutScreen = () => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const { createToken } = useStripe();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(false);
  const onPay = async () => {
    setLoading(true);
    if (!card?.complete) {
      Alert.alert("Vui lòng nhập đầy đủ thông tin thẻ");
      return;
    }

    const { token, error } = await createToken({ type: "Card" });
    if (error) {
      console.log("error", error.message);
      setLoading(false);
      return;
    }
    payRequest(token.id, sum, name)
      .then(() => {
        setLoading(false);
        Alert.alert("Payment success !");
        clearCart();
      })
      .catch((error) => {
        Alert.alert(error.message);
        setLoading(false);
      });
  };

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
        {loading && <PaymentProcessing />}
        <ScrollView>
          <Spacer position="left" size="medium">
            <TextCustomize variant="body">Your Order</TextCustomize>
            <List.Section>
              {cart.map(({ item, price }) => {
                return (
                  <List.Item
                    key={`${item} +${Math.random()}`}
                    title={`${item} - ${price / 100}`}
                  />
                );
              })}
            </List.Section>
            <TextCustomize variant="body">Total: {sum / 100}</TextCustomize>
          </Spacer>
          <Spacer position="bottom" size="medium" />
          <TextInput label="Name" onChangeText={setName} />
          {name.length > 0 && (
            <CreditCardInput name={name} onSuccess={setCard} />
          )}
          <Spacer position="top" size="large">
            <PayButton
              disabled={loading}
              buttonColor={`${colors.brand.primary}`}
              icon="cash-fast"
              onPress={onPay}
            >
              PAY
            </PayButton>
            <PayButton
              disabled={loading}
              buttonColor={`${colors.ui.error}`}
              icon="cart-off"
              onPress={clearCart}
            >
              CLEAR CART
            </PayButton>
          </Spacer>
        </ScrollView>
      </StripeProvider>
    </StyledSafeAreaView>
  );
};
