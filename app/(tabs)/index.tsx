import { View } from "react-native";
import { Stack } from "expo-router";
import React, { useMemo, useState } from "react";
import listingData from "@/assets/data/airbnb-listings.json";

import Listings from "@/components/Listings";
import ExploreHeader from "@/components/ExploreHeader";

const Index = () => {
  const [category, setCategory] = useState("Tiny homes");

  const items = useMemo(() => listingData as any, []);

  const onDataChanges = (category: string) => {
    console.log("CHANGED: ", category);
    setCategory(category);
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanges} />,
        }}
      />
      <Listings listings={items} category={category} />
    </View>
  );
};

export default Index;
