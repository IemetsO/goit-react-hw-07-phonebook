import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://62dfcf2d98dd9c9df6070365.mockapi.io';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContact',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts/', { name, number });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (itemId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${itemId}`);
      return itemId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// export const removeContact = id => dispatch => {
//   dispatch (removeContactRequest())
//   axios
//   .delete(`/contacts/${id}`)
//   .then(() => dispatch(removeContactSuccess(id)))
//   .catch(error =>
//     dispatch(removeContactError(error))
//   );
// }

// export const fetchContact = () => async dispatch =>{
//   dispatch(fetchContactRequest());
//     try {
//     const {data} = await axios.get("/contacts");
//   dispatch(fetchContactSuccess(data))}
//   catch(error){
//     dispatch(fetchContactError(error))
// }
// }

// export const addContact = ({name, number}) => dispatch => {
//   const contact = { name, number};

//   dispatch(addContactRequest())
//   axios
//     .post('/contacts', contact)
//     .then((data) =>
//       dispatch(addContactSuccess(data)
//     ))
//     .catch(error =>
//       dispatch(addContactError(error))
//     );
// };
