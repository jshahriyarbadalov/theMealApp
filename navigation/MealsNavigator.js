import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions = {
  headerTitle: 'A Screen',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
   
  },
  headerTitleStyle:{
    fontFamily: 'OpenSans-Bold',
    fontSize: 17
  },
  headerBackTitleStyle:{
    fontFamily:'OpenSans-Regular'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor

};


const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: MealDetailScreen

}, {
  defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
});


const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Icon
            name="ios-restaurant"
            size={20}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS==='android'? 
      <Text style={{fontFamily:'OpenSans-Bold'}}>Meals</Text>:'Meals'
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Icon
            name="ios-star"
            size={20}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: Platform.OS==='android'? 
      <Text style={{fontFamily:'OpenSans-Bold'}}>Favorites</Text>:'Favorites'
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabScreenConfig, {
      activeTintColor: Colors.accentColor,
      shifting: true,
      barStyle: {
        backgroundColor: Colors.primaryColor
      }
    })
    : createBottomTabNavigator(tabScreenConfig, {
      tabBarOptions: {
        labelStyle:{
          fontFamily:'OpenSans-Regular'
        },
        activeTintColor: Colors.accentColor,
      }
    });

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator({
  MealsFavs:
  {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals'
    }
  },
  Filters: FiltersNavigator
},
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily:'OpenSans-Bold'
      }
    }
  }
);

export default createAppContainer(MainNavigator);