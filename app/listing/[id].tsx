import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router/build/hooks";

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Listing Detail Page {id}</Text>
    </View>
  );
};

export default Page;
