import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContact, removeContact, filterContact } from './actions';
import { nanoid } from 'nanoid';

const items = createReducer([], {
  [addContact]: (state, { payload: { name, number } }) => {
    return [...state, { id: nanoid(5), name, number }];
  },
  [removeContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [filterContact]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
