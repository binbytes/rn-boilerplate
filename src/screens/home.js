import React, { Component } from 'react'
import { View, Button, Text, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { apply } from '../../theme/styles'
import { inject } from 'mobx-react'

@inject('User')
class Home extends Component {
  render() {
    return (
      <View style={apply('flex-1 justify-center items-center')}>
        <Icon name={'home'} size={32} />
        <Text style={apply('text-lg text-blue mb-4')}>
          Welcome To Home Screen
        </Text>
        <Text style={apply('text-base text-teal mb-4')}>
          User from Mobx : {this.props.User.name}
        </Text>
        <Button
          title={'Go to Test Screen'}
          onPress={() => this.props.navigation.navigate('Test')}
        />
      </View>
    )
  }
}

export default Home
