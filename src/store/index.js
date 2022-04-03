import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// Reducer
export const reducer = combineReducers({});

// Sagas

export function* saga() {
  yield all([])
}