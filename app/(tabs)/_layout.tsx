import { Image } from "react-native";
import React, { useEffect } from "react";
import { Tabs, useRouter } from "expo-router";

import Colors from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: "mon-sb",
        },
        tabBarStyle: {
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarIconStyle: {
          marginTop: 3,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlists"
        options={{
          tabBarLabel: "Wishlists",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("@/assets/icons/vsround.png")}
              style={{
                width: 40,
                height: 40,
                marginTop: "auto",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          tabBarLabel: "Trips",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="airplane-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
