import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addressService } from "./addressService";

export const getAddressShipping = createAsyncThunk(
    'address/get-address',
    async (data, thunkAPI) => {
        try {
            const response = await addressService.getAddress(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const addressSlice = createSlice({
    name: 'address',
    initialState: {
        address: null,
        addressDelivery: null,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: ''
    },
    reducers: {
        setAddressDelivery: (state, action) => {
            state.addressDelivery = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAddressShipping.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(getAddressShipping.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.address = action.payload;
            })
            .addCase(getAddressShipping.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = false;
                state.message = action.payload;
            })
    }
})

export const { setAddressDelivery } = addressSlice.actions;
export default addressSlice.reducer;