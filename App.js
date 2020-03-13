import React from 'react';
import MealsNavigator from './navigation/MealsNavigator';
import { useScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import mealsReducer from './store/reducers/meals';
import { Provider } from 'react-redux';

useScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
};


export default App;
