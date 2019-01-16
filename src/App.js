import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'mobx-react'

import Routes from './routes/index'
import { apply } from '../theme/styles'
import stores from './store'

class APP extends Component {
  render() {
    return (
      <Provider {...stores}>
        <View style={apply('flex-1')}>
          <Routes />
        </View>
      </Provider>
    )
  }
}

export default APP
