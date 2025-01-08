import React from "react";
import { Link } from "expo-router";
import { View } from "react-native";

const Index = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/(modals)/booking"}>Bookings</Link>
      <Link href={"/listing/1331"}>Listing Details</Link>
    </View>
  );
};

export default Index;
