import { CardField } from "@stripe/stripe-react-native";
import styled from "styled-components";
const CardFieldContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
`;
const CardFiledToken = styled(CardField)`
  height: 50px;
`;
export const CreditCardInput = ({ onSuccess }) => {
  return (
    <CardFieldContainer>
      <CardFiledToken
        postalCodeEnabled={false}
        placeholders={{ number: "4242 4242 4242 4242" }}
        onCardChange={onSuccess}
      />
    </CardFieldContainer>
  );
};
