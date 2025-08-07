// UserCardForm.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { CardField, useStripe } from "@stripe/stripe-react-native";

export const CreditCardInput = () => {
  const { createToken } = useStripe();
  const [name, setName] = useState("");
  const [cardDetails, setCardDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCreateUser = async () => {
    if (!name) {
      Alert.alert("Vui lòng nhập đầy đủ tên và email");
      return;
    }
    console.log("cardDetails", cardDetails);
    if (!cardDetails?.complete) {
      Alert.alert("Vui lòng nhập đầy đủ thông tin thẻ");
      return;
    }

    setLoading(true);
    const { token, error } = await createToken({ type: "Card" });
    setLoading(false);
    console.log("token", token);
    if (error) {
      console.log("error.message", error.message);
    } else if (token) {
      const newUser = {
        name,
        token: token.id,
      };
      console.log("New user created:", newUser);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Họ và tên"
        value={name}
        onChangeText={setName}
      />

      <CardField
        postalCodeEnabled={false}
        placeholders={{ number: "4242 4242 4242 4242" }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={setCardDetails}
      />

      <Button
        title={loading ? "Đang xử lý..." : "Tạo user & token"}
        onPress={handleCreateUser}
        disabled={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },

  cardContainer: {
    height: 50,
    marginBottom: 20,
  },
});
