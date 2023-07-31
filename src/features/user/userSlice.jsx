import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';

const initialState = {
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/testing/register', user);
      console.log(resp);
    } catch (error) {
      console.log(error.response);
    }
    console.log({ register: JSON.stringify(user) });
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    console.log({ login: JSON.stringify(user) });
  }
);

const userSlice = createSlice({ name: 'user', initialState });

export default userSlice.reducer;
