import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import { View, Text } from "react-native";
import Loading from "../../components/Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

export default function MyAccount(props) {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      !user ? setLogin(false) : setLogin(true);
      console.log(user);
    });
  }, []);

  if (login === null) {
    return <Loading isVisible={true} text="Cargando" />;
  }

  return login ? <UserLogged /> : <UserGuest navigation={props.navigation} />;
}
