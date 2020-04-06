import React from 'react';

import { Feather, Foundation } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Search from './Search';
import MyLibrary from './MyLibrary';

import colors from '../utils/colors.json';

const Tab = createBottomTabNavigator();

const style = {
    backgroundColor: colors["terciary"],
    maxHeight: 80,
    padding: 5
};

export default function Main() {
  return (
    <Tab.Navigator
        tabBarOptions={{ style, activeTintColor: '#fff',
                         inactiveTintColor: 'gray', showIcon: true }}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Início') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'Buscar') {
                iconName = focused ? 'search' : 'search';
              } else if (route.name === 'Sua Biblioteca') {
                iconName = focused ? 'list' : 'list'
              }
  
              if (iconName === 'home') {
                return <Foundation name={iconName} size={size} color={color} />;
              }

              return <Feather name={iconName} size={size} color={color} />;
            },
          })}
    >
        <Tab.Screen name="Início" component={Home}/>
        <Tab.Screen name="Buscar" component={Search} />
        <Tab.Screen name="Sua Biblioteca" component={MyLibrary} />
    </Tab.Navigator>
  );
}
