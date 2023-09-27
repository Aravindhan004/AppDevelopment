import {configureStore} from '@reduxjs/toolkit';
import adminReducer from './admin';

export default configureStore({
  reducer : {
    admin : adminReducer
  }
})