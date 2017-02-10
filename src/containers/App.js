import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createStore, renderDevTools } from '../utils/devTools';

import FriendListApp from './FriendListApp';
import { addFriends, deleteFriends, starFriends } from '../actions/FriendsActions';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

store.dispatch(addFriends('Kate Kaschenko'));
store.dispatch(deleteFriends(1));
store.dispatch(starFriends(4));


export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <FriendListApp />}
        </Provider>
        {renderDevTools(store)}
      </div>
    )
  }
}