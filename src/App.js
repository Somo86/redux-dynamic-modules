import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import HomeView from './views/HomeView';

function App() {
  return (
    <Provider store={store}>
      <HomeView/>
    </Provider>
  );
}

export default App;
