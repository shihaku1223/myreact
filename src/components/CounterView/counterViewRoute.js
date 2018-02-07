import React from 'react';
import { Route, Switch } from 'react-router';

import CounterView from 'components/CounterView';
import CounterIncButton from 'components/CounterView/CounterIncButton';
import CounterDecButton from 'components/CounterView/CounterDecButton';

const CounterViewRoute = ({ match }) => {
  let action = match.params.action;
  let rootPath = match.url.substr(0, match.url.length - action.length);
  console.log(rootPath, action);
  return (
    <CounterView action={action}>
      <Switch>
        <Route path={rootPath + 'inc'} component={CounterIncButton} />
        <Route path={rootPath + 'dec'} component={CounterDecButton} />
      </Switch>
    </CounterView>
  );
}

export { CounterViewRoute };
