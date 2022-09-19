import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home.js'
import Schedule from './screens/schedule.js';

// The stack allows us to do page navigation with the back arrow
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home"
        component={Home}
        options={{ title: "My Daily Schedule"}}
        />
        <Stack.Screen 
        name="Schedule"
        component={Schedule}
        options={{ title: "Today's Schedule"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
