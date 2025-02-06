import { View } from "react-native";
import { Stack } from "expo-router";
import React, { useMemo, useState } from "react";
import listingData from "@/assets/data/airbnb-listings.json";

import Listings from "@/components/Listings";
import ListingsMap from "@/components/ListingsMap";
import ExploreHeader from "@/components/ExploreHeader";
import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";

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
      {/* <Listings listings={items} category={category} /> */}
      <ListingsMap listings={listingsDataGeo} />
    </View>
  );
};

export default Index;
