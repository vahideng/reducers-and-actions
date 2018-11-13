import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//--import reducers

import authReducer from './store/reducers/auth-reducer/auth-reducer';
import dashboardReducer from './store/reducers/dashboard-reducer/dashboard-reducer';
import homeFeaturedReducer from './store/reducers/homeFeatured-reducer/homeFeatured-reducer';
import homeProductReducer from './store/reducers/homeProducts-reducer/homeProduct-reducer';
import homeSegmentReducer from './store/reducers/homeSegment-reducer/homeSegment-reducer';
import searchReducer from './store/reducers/search-reducer/search-reducer';
import generalReducer from './store/reducers/general-reducer/general-reducer';

//reducer--//

import './index.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  authReducer,
  dashboardReducer,
  homeFeaturedReducer,
  homeProductReducer,
  homeSegmentReducer,
  searchReducer,
  generalReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
