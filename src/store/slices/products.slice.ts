import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsSlices = createSlice({
    name: "products",
    initialState: null,
    reducers: {
        setProducts: (state, action) => action.payload
    }
})

export const {setProducts} = productsSlices.actions

export default productsSlices.reducer

export const getProductsThunk = () => (dispatch:any) => {

    const url = "http://localhost:4100/api/v1/products/"
  
    axios.get(url)
    .then(res => dispatch(setProducts(res.data)))
    .catch(err => console.log(err))
}


