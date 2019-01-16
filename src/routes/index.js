import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from '../screens/home'
import Test from '../screens/test'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: navigation => {
      return {
        title: 'Home'
      }
    }
  },
  Test: {
    screen: Test,
    navigationOptions: navigation => {
      return {
        title: 'Test'
      }
    }
  }
})

export default createAppContainer(AppNavigator)
