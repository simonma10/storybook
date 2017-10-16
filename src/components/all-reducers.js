import { combineReducers } from 'redux';

import NavigationReducer from './navigation-component/navigation-reducer';
import PageReducer from './page-component/page-reducer';
import AppReducer from './app-component/app-reducer';

const rootReducer = combineReducers({
  app: AppReducer,
  navigation: NavigationReducer,
  page: PageReducer
});

export default rootReducer;