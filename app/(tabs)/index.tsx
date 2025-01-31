import React from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import Listings from "@/components/Listings";
import ExploreHeader from "@/components/ExploreHeader";

const Index = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader />,
        }}
      />
      <Listings />
    </View>
  );
};

export default Index;
