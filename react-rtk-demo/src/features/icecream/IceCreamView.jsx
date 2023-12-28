import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered,restocked } from './iceCreamSlice'

export const IceCreamView = () => {
const numOfIceCreams = useSelector((state)=> state.iceCream.numOfIceCreams)
const dispatch = useDispatch()
    return (
    <div>
        <h2>Number of ice creams-{numOfIceCreams}</h2>
        <button onClick={()=>dispatch(ordered())}>Order ice cream</button>
        <button onClick={()=>dispatch(restocked(4))}>Restock ice creams</button>
    </div>
  )
}
