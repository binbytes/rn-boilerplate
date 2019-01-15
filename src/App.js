import React, { Component } from 'react'
import { View } from 'react-native'

import Root from './routes/index'
import { apply } from '../theme/styles'

class APP extends Component {
  render() {
    return (
      <View style={apply('flex-1')}>
        <Root />
      </View>
    )
  }
}

export default APP
