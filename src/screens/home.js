import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { apply } from '../../theme/styles'

class Home extends Component {
  render() {
    return (
      <View style={apply('flex-1 justify-center items-center')}>
        <Icon name={'home'} size={32} />
        <Text>Home Screen</Text>
        <Button
          title={'Go to Test Screen'}
          onPress={() => this.props.navigation.navigate('Test')}
        />
      </View>
    )
  }
}

export default Home
