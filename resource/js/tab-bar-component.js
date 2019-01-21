import React, {Component} from 'react';
import {BottomTabBar} from 'react-navigation';

class TabBarComponent extends Component {
  theme = {
    tintColor: 'pink',
    updateTime: Date.now()
  }
  
  render () {
    const {routes, index} = this.props.navigation.state;
    const {params} = routes[index];
  
    if (params && params.theme.updateTime > this.theme.updateTime) {
      this.theme = params.theme
    }
    
    return (
      <BottomTabBar
        {...this.props}
        activeTintColor={this.theme.tintColor || this.props.activeTintColor}
      />
    )
  }
}

export default TabBarComponent;