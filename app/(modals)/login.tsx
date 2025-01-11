import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import Colors from "@/constants/Colors";
import { useOAuth } from "@clerk/clerk-expo";
import { defaultStyles } from "@/constants/Styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";

enum OAuthStrategy {
  Google = "oauth_google",
  Apple = "oauth_apple",
}

const Login = () => {
  useWarmUpBrowser();

  const router = useRouter();

  const { startOAuthFlow: googleAuth } = useOAuth({
    strategy: OAuthStrategy.Google,
  });

  const { startOAuthFlow: appleAuth } = useOAuth({
    strategy: OAuthStrategy.Apple,
  });

  // Select OAuth Provider
  const onSelectAuth = async (strategy: OAuthStrategy) => {
    const selectedAuth = {
      [OAuthStrategy.Google]: googleAuth,
      [OAuthStrategy.Apple]: appleAuth,
    }[strategy];
    console.log(selectedAuth);
    try {
      const { createdSessionId, setActive } = await selectedAuth();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        router.back();
        console.log("user logged in");
        console.error("signed in");
      }
    } catch (error) {
      console.error("OAuth error: ", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* email input */}
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        style={[defaultStyles.inputField, { marginBottom: 30 }]}
      />

      {/* continue button */}
      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>

      {/* separator */}
      <View style={styles.seperatorView}>
        <View
          style={{
            flex: 1,
            borderBottomColor: "#000",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text style={styles.separator}>or</Text>
        <View
          style={{
            flex: 1,
            borderBottomColor: "#000",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>

      {/* continue with phone button  */}
      <View style={{ gap: 20 }}>
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons
            name="call-outline"
            size={24}
            style={defaultStyles.btnIcon}
          />
          <Text style={styles.btnOutlineText}>Continue with Phone</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(OAuthStrategy.Apple)}
        >
          <Ionicons name="logo-apple" size={24} style={defaultStyles.btnIcon} />
          <Text style={styles.btnOutlineText}>Continue with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(OAuthStrategy.Google)}
        >
          <Ionicons
            name="logo-google"
            size={24}
            style={defaultStyles.btnIcon}
          />
          <Text style={styles.btnOutlineText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 26,
  },
  seperatorView: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 30,
  },
  separator: {
    fontFamily: "mon-sb",
    color: Colors.gray,
  },
  btnOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.gray,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "mon-sb",
  },
});

export default Login;
