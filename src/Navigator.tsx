import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feed from './screens/Feed';

const Tab = createBottomTabNavigator();

const MenuNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Feed">
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color}) => <Icon name="home" size={30} color={color} />,
        }}
      />

      <Tab.Screen
        name="AddPhoto"
        component={Feed}
        options={{
          tabBarLabel: 'Add picture',
          tabBarIcon: ({color}) => (
            <Icon name="camera" size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Feed}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <Icon name="user" size={30} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

// const MenuRoutes = {
//   Feed: {
//     name: 'Feed',
//     screen: Feed,
//     navigationOptions: {
//       title: 'Feed',
//       tabBarIcon: ({tintColor}) => (
//         <Icon name="home" size={30} color={tintColor} />
//       ),
//     },
//   },
//   Add: {
//     name: 'AddPhoto',
//     screen: Feed,
//     navigationOptions: {
//       title: 'Add picture',
//       tabBarIcon: ({tintColor}) => (
//         <Icon name="camera" size={30} color={tintColor} />
//       ),
//     },
//   },
//   Profile: {
//     name: 'Profile',
//     screen: Feed,
//     navigationOptions: {
//       title: 'Profile',
//       tabBarIcon: ({tintColor}) => (
//         <Icon name="user" size={30} color={tintColor} />
//       ),
//     },
//   },
// };

// const MenuConfig = {
//   initialRouteName: 'Feed',
//   tabBarOptions: {
//     showLabel: false,
//   },
// };

// const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig);

export default MenuNavigator;
