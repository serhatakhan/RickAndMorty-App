import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {Provider} from 'react-redux';
// import store from './example/store';
import RootNavigator from './src/router/rootNavigator';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Example /> */}
        {/* <Todo /> */}

        {/* Bottom Tabs Navigatoru, Native Stack'in içinde kullandık -> Nested yaptık */}
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
