import React, { Component } from 'react';
import { AppRegistry, BackHandler } from 'react-native';
import { StyleProvider } from 'native-base';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Provider } from 'react-redux';

import getTheme from './native-base-theme/components';

import ModuleList from './src/views/module-list';
import ModuleEdit from './src/views/module-edit';
import store from './src/store';

class App extends Component {
  render() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      Actions.pop();
      return true;
    });
    return (
      <StyleProvider style={getTheme()}>
        <Provider store={store}>
          <Router>
            <Scene key="root" hideNavBar>
              <Scene
                key="moduleList"
                component={ModuleList}
              />
              <Scene
                key="moduleEdit"
                component={ModuleEdit}
              />
            </Scene>
          </Router>
        </Provider>
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('GradeCalculator', () => App);
