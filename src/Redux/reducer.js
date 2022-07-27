import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { fetchContact } from './contacts-operation';
import { removeContact } from './contacts-operation';
import { addContact } from './contacts-operation';
import {filterContact } from './actions';

const items = createReducer([], {
  [fetchContact.fulfilled]: (_, action) => action.payload,

  [addContact.fulfilled]: (state, action) => {
    return [...state, action.payload];
  },
  [removeContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [addContact.pendingt]: () => true,
[addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [removeContact.pending]: () => true,
  [removeContact.fulfilled]: () => false,
    [removeContact.rejected]: () => false,
    [fetchContact.pending]: () => true,
  [fetchContact.fulfilled]: () => false,
    [fetchContact.rejected]: () => false,
})

const filter = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

const error = createReducer (null, {
  [addContact.rejected]: (_, action) => action.payload,
  [removeContact.rejected]: (_, action) => action.payload,
[fetchContact.rejected]: (_, action) => action.payload, 
[addContact.pending]: () => null,
[removeContact.pending]: () => null,
[fetchContact.pending]: () => null,
}); 
export default combineReducers({
  items,
  filter,
  loading,
  error,
});
