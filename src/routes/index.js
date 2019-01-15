import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from '../screens/home'
import Test from '../screens/test'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Test: {
    screen: Test
  }
})

export default createAppContainer(AppNavigator)
