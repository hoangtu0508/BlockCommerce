import { configureStore } from '@reduxjs/toolkit';
import metamaskReducer from '../features/metamask/metamaskSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer: {
        metamask: metamaskReducer,
        auth: authReducer,
    },
});