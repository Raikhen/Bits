import { createStore }      from 'redux';
import { combineReducers }  from 'redux';

import reducer              from './reducer';

let store = createStore(reducer, { friends: [] });

export default store;
