const {cakeActions} = require('../cake/cakeSlice')
const createSlice =require('@reduxjs/toolkit').createSlice

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
    builder.addCase(cakeActions.ordered,state=>{
        state.numOfIceCraems--
    })
  }
})

module.exports =iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions