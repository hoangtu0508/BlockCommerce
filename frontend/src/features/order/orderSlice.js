import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { orderService } from '../order/orderService';
import { toast } from 'react-toastify';

export const addOrderUser = createAsyncThunk(
    'order/add-order',
    async (data, thunkAPI) => {
        try {
            return await orderService.addOrder(data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)


export const orderSkice = createSlice({
    name: 'order',
    initialState: {
        order: null,
        isConnect: false,
        isSuccessCart: null
    },
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(addOrderUser.pending, (state) => {
                state.isConnect = true
            })
            .addCase(addOrderUser.fulfilled, (state, action) => {
                state.isSuccessCart = true;
                state.isError = false;
                state.order = action.payload;
                if (state.isSuccessCart) {
                    toast.success("Order Product Succer");
                }

            })
            .addCase(addOrderUser.rejected, (state, action) => {
                state.isConnect = false
            })
    }
})

// Action creators are generated for each case reducer function
export default orderSkice.reducer