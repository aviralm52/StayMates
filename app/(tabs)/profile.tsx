import React from "react";
import { Link } from "expo-router";
import { View, Button, Text } from "react-native";

import { useAuth } from "@clerk/clerk-expo";

const Profile = () => {
  const { signOut, isSignedIn } = useAuth();

  return (
    <View>
      <Button title="Log out" onPress={() => signOut()} />
      {!isSignedIn && (
        <Link href={"/(modals)/login"}>
          <Text>LogIn</Text>
        </Link>
      )}
    </View>
  );
};

export default Profile;
