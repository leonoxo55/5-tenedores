import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import MyAccountScreen from "../screens/Account/MyAccount";
import RestaurantsScreen from "../screens/Restaurants";
import SearchScreen from "../screens/Search";
import TopRestaurantsScreen from "../screens/TopRestaurants";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TopRestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TopRestaurants" component={TopRestaurantsScreen} />
    </Stack.Navigator>
  );
}

function RestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
    </Stack.Navigator>
  );
}

function MyAccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mi Cuenta" component={MyAccountScreen} />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Mi Cuenta">
        <Tab.Screen
          name="Restaurantes"
          component={RestaurantsStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Top 5 Restaurantes"
          component={TopRestaurantsStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="star-outline"
                color={color}
                size={size}
              />
            )
          }}
        />
        <Tab.Screen
          name="Buscar"
          component={SearchStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="magnify"
                color={color}
                size={size}
              />
            )
          }}
        />
        <Tab.Screen
          name="Mi Cuenta"
          component={MyAccountStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
