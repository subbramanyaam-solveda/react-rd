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
    }
})

module.exports =iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions