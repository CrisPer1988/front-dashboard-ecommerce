import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usersSlices = createSlice({
    name: "users",
    initialState: null,
    reducers: {
        setUsers: (state, action) => action.payload
    }
})

export const {setUsers} = usersSlices.actions

export default usersSlices.reducer

export const getUsersThunk = () => (dispatch:any) => {

    const url = "http://localhost:4100/api/v1/users/"
  
    axios.get(url)
    .then(res => dispatch(setUsers(res.data)))
    .catch(err => console.log(err))
}


