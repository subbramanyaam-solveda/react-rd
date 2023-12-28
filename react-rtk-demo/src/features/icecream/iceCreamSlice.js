import {createSlice} from '@reduxjs/toolkit'

import {ordered as cakeOrdered} from '../cake/cakeSlice'


const initialState ={
    numOfIceCreams:20
}

const iceCreamSlice = createSlice({
    name:'iceCream',
    initialState,
    reducers:{
        ordered:state=>{
            state.numOfIceCreams--
        },
        restocked:(state,actions) =>{
            state.numOfIceCreams += actions.payload
        }
    },
  extraReducers:(builder) =>{
    builder.addCase(cakeOrdered,state=>{
        state.numOfIceCraems--
    })
  }
})

export default iceCreamSlice.reducer
export const {ordered,restocked} = iceCreamSlice.actions