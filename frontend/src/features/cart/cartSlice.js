import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cartService } from "./cartService";
import { toast } from "react-toastify";

export const addCart = createAsyncThunk(
    'cart/addCart',
    async (data, thunkAPI) => {
        try {
            const response = await cartService.addToCart(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const getProductCart = createAsyncThunk(
    'cart/get-product-cart',
    async (data, thunkAPI) => {
        try {
            const response = await cartService.getCart(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const removeProductCart = createAsyncThunk(
    'cart/remove-product-cart',
    async (data, thunkAPI) => {
        try {
            const response = await cartService.RemoveProduct(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const incrementProductCart = createAsyncThunk(
    'cart/increment-product-cart',
    async (data, thunkAPI) => {
        try {
            const response = await cartService.incrementQuantityCart(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const decrementProductCart = createAsyncThunk(
    'cart/decrement-product-cart',
    async (data, thunkAPI) => {
        try {
            const response = await cartService.decrementQuantityCart(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const isSelectedProductCart = createAsyncThunk(
    'cart/isselected-product-cart',
    async (data, thunkAPI) => {
        try {
            const response = await cartService.isSelectedCart(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const allSelected = createAsyncThunk(
    'cart/all-selected',
    async (data, thunkAPI) => {
        try {
            const response = await cartService.updateAllSelected(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: null,
        productCart: null,
        removeCart: null,
        selectedProduct: null,
        isSelected: null,
        isError: false,
        isSuccessCart: false,
        isLoading: false,
        message: ''
    },
    reducers: {
        setSelectedProducts: (state, action) => {
            state.selectedProduct = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addCart.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(addCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessCart = true;
                state.isError = false;
                state.cart = action.payload;

                if (state.isSuccessCart) {
                    toast.success("Product Added To Cart");
                }

            })
            .addCase(addCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessCart = false;
                state.isError = false;
                state.message = action.payload;
            })
            .addCase(getProductCart.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(getProductCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessCart = true;
                state.isError = false;
                state.productCart = action.payload;
            })
            .addCase(getProductCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessCart = false;
                state.isError = false;
                state.message = action.payload;
            })
            .addCase(removeProductCart.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(removeProductCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessCart = true;
                state.isError = false;
                state.removeCart = action.payload;

                if (state.isSuccessCart) {
                    toast.success("Product Remove To Cart");
                }

            })
            .addCase(removeProductCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessCart = false;
                state.isError = false;
                state.message = action.payload;
            })
            .addCase(incrementProductCart.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(incrementProductCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessCart = true;
                state.isError = false;
                // state.removeCart = action.payload;
            })
            .addCase(incrementProductCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessCart = false;
                state.isError = false;
                state.message = action.payload;
            })
            .addCase(decrementProductCart.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(decrementProductCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessCart = true;
                state.isError = false;
                // state.removeCart = action.payload;
            })
            .addCase(decrementProductCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessCart = false;
                state.isError = false;
                state.message = action.payload;
            })
            .addCase(isSelectedProductCart.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(isSelectedProductCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessCart = true;
                state.isError = false;
                state.isSelected = action.payload;
            })
            .addCase(isSelectedProductCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessCart = false;
                state.isError = false;
                state.message = action.payload;
            })
            .addCase(allSelected.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(allSelected.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessCart = true;
                state.isError = false;
            })
            .addCase(allSelected.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessCart = false;
                state.isError = false;
                state.message = action.payload;
            })

    }
})

export const { setSelectedProducts } = cartSlice.actions
export default cartSlice.reducer;