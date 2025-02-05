import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";

import { Ionicons } from "@expo/vector-icons";
import { ListingType } from "@/interfaces/listing";
import { defaultStyles } from "@/constants/Styles";

interface PageProps {
  listings: any[];
  category: string;
}

const Listings = ({ listings: items, category }: PageProps) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    console.log("RELOAD LISTINGS: ", items.length);
    setLoading(true);

    setTimeout(() => setLoading(false), 200);
  }, [category]);

  const renderRow: ListRenderItem<ListingType> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <Animated.View
          style={styles.listings}
          entering={FadeInRight}
          exiting={FadeOutLeft}
        >
          <Image source={{ uri: item.medium_url }} style={styles.image} />
          <TouchableOpacity
            style={{ position: "absolute", right: 30, top: 30 }}
          >
            <Ionicons name="heart-outline" size={24} color={"#000"} />
          </TouchableOpacity>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontFamily: "mon-sb", fontSize: 16 }}>
              {item.name}
            </Text>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Ionicons name="star" size={16} />
              <Text style={{ fontFamily: "mon-sb" }}>
                {item.review_scores_rating / 20}
              </Text>
            </View>
          </View>

          <Text style={{ fontFamily: "mon" }}>{item.room_type}</Text>

          <View style={{ flexDirection: "row", gap: 4 }}>
            <Text style={{ fontFamily: "mon-sb" }}>€ {item.price}</Text>
            <Text style={{ fontFamily: "mon" }}>nights</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={defaultStyles.container}>
      <FlatList
        ref={listRef}
        data={loading ? [] : items}
        renderItem={renderRow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listings: {
    padding: 16,
    gap: 10,
    marginVertical: 16,
  },
  image: {
    width: "100%",
    height: 300,
  },
});

export default Listings;
