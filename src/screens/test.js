import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'

import { apply } from '../../theme/styles'

class Test extends Component {
  render() {
    return (
      <View style={apply('flex-1 justify-center items-center')}>
        <Text>Test Screen</Text>
        <Button
          title={'Go Back'}
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}

export default Test
