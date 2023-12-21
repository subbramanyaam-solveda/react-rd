const redux =require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const CAKE_ORDERED ='CAKE_ORDERERED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

function orderCake(){
 return {
    type:CAKE_ORDERED,
    quantity: 1,
 }
}
function orderIceCream(qty=1) {
    return{
        type:ICECREAM_ORDERED,
        payload:qty,
    }
}

function restockIceCream(qty=1) {
    return {
       type: ICECREAM_RESTOCKED,
       payload:qty,
    }
}

const initialState ={
numOfCakes:10,
numOfIceCreams:20,
}

//(previousState,action) => newState

const reducer = (state = initialState,action) =>{
switch(action.type){
    case CAKE_ORDERED:
        return {
            ...state,
            numOfCakes:state.numOfCakes -1,
        }
       
    
    case ICECREAM_ORDERED:
        return {
            ...state,
            numOfIceCreams:state.numOfIceCreams + action.payload
        }

    case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams:state.numOfIceCreams + action.payload
                
            }
        default:
            return state
    }
}
const store = createStore(reducer)


console.log('Initial state',store.getState())

 const unsubscribe = store.subscribe(()=>
  console.log('Update state',store.getState())
 )

// store.dispatch(orderCake())
// store.dispatch(orderCake())

const actions = bindActionCreators(
    {orderCake,orderIceCream,restockIceCream},
    store.dispatch
    )
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(2)

unsubscribe()