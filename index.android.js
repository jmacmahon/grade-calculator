import React, { Component } from 'react';
import { AppRegistry, BackHandler } from 'react-native';
import { StyleProvider } from 'native-base';
import { Scene, Router, Actions } from 'react-native-router-flux';

import getTheme from './native-base-theme/components';

import ModuleList from './src/views/module-list';
import ModuleEdit from './src/views/module-edit';
import { modulesListStore } from './src/model';

class App extends Component {
  constructor() {
    super();
    this.saveModule = this.saveModule.bind(this);
  }

  saveModule(module) {
    modulesListStore.dispatch({
      type: 'ADD',
      module,
    });
    // this.setState(state => ({ modules: state.modules.concat(module) }));
    // this.state.modules.push(module);
    this.forceUpdate();
  }

  render() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      Actions.pop();
      return true;
    });
    return (
      <StyleProvider style={getTheme()}>
        <Router>
          <Scene key="root" hideNavBar>
            <Scene
              key="moduleList"
              component={ModuleList}
              modules={modulesListStore.getState()}
            />
            <Scene
              key="moduleEdit"
              component={ModuleEdit}
              saveModule={this.saveModule}
            />
          </Scene>
        </Router>
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('GradeCalculator', () => App);
