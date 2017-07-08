import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StyleProvider } from 'native-base';

import getTheme from './native-base-theme/components';

import ModuleList from './src/views/module-list';
import ModuleAdd from './src/views/module-add';
import { modules } from './src/model';

class App extends Component {
  constructor() {
    super();
    this.state = {
      modules,
      currentView: ModuleList,
    };
    this.addHook = this.addHook.bind(this);
  }

  addHook() {
    this.setState(() => ({
      currentView: null,
    }));
  }

  render() {
    return (
      <StyleProvider style={getTheme()}>
        <ModuleAdd />
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => App);
