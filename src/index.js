import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import AppComponent from './components/app-component/app-component';
//import NavigationComponent from './components/navigation-component/navigation-component';
import rootReducer from './components/all-reducers';



//========================================================================================
// Create redux store using thunk middleware & Chrome devToolsExtension
// export store, so that phaser components can update status when changing states
//========================================================================================
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
  )
);

//========================================================================================
// Render app
//
//========================================================================================
ReactDOM.render(
  <Provider store={store}>
    <div>
    <AppComponent/>

    </div>
  </Provider>
  , document.querySelector('.container')

);

