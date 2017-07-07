import React, { Component } from 'react';

import { AppRegistry, Text } from 'react-native';

import ModuleList from './src/views/module-list';
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
    if (this.state.currentView === ModuleList) {
      return (
        <ModuleList modules={modules} addHook={this.addHook} />
      );
    }
    return (<Text>summat else</Text>);
  }
}

AppRegistry.registerComponent('AwesomeProject', () => App);
