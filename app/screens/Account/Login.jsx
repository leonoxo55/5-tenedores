import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider, Button } from "react-native-elements";

export default function Login(props) {
  const { navigtation } = props;

  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewContainer}>
        <Text>From Login</Text>
        <Text>Create Account</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.viewContainer}>
        <Text>Login FAcebook</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40
  }
});
