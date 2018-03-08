import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';
//import Main from './app/Main';
import './index.css';
import 'typeface-roboto';

import ErrorBoundary from './ErrorBoundary';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { lightBlue500 } from 'material-ui/colors';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';

// Page
import { CounterViewRoute } from 'components/CounterView/counterViewRoute';
import StatusView from 'components/StatusView';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//import { /* Router, Route, */ Link } from 'react-router-dom';
import { Route, Redirect, Switch, /* hashHistory, browserHistory */} from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { syncHistoryWithStore, routerMiddleware, routerReducer, push } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { createHashHistory } from 'history';

/* middleware */
import { logger, thunk, promise } from 'middleware';
import { createEpicMiddleware } from 'redux-observable';
import epics from './epics';
import reducers from './reducers';

//const history = createHashHistory();
const history = createBrowserHistory();

const store = createStore(
    combineReducers({
      reducers,
      // use routerReducer as routing reducer
      routing: routerReducer
    }),
    applyMiddleware(logger, thunk, promise,
                  createEpicMiddleware(epics),
                  routerMiddleware(history)));

//const history = syncHistoryWithStore(createBrowserHistory(), store);

/*
const theme = createMuiTheme({
	palette: {
		paccent1Color: lightBlue500,
	}
});
*/
const theme = createMuiTheme();
/*
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});
*/
/*
const Root = () => {
  return (
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
  );
}
*/

const AppRoute = () => {
  return(
      <MuiThemeProvider theme={theme}>
        <App>
          <Switch>
            <Route path='/status' component={StatusView}/>
            <Route path='/counter/:action' component={CounterViewRoute}/>
            <Redirect from='/counter' to='/counter/inc'/>

            <Route path='/contact' render={() => <h1>Contact Us</h1>}/>
            <Redirect from='*' to='/status'/>
          </Switch>
        </App>
      </MuiThemeProvider>
  );
}

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
         <Switch>
          <Route path='/' component={AppRoute}/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  , document.getElementById('root'));
