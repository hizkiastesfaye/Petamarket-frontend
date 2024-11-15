import {createStore, applyMiddleware} from 'redux'
import {persistReducer,persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key:'root',
    storage
}

const initState = {
    token:null
}
const reducer = (state=initState, action)=>{
    switch(action.type){
        case 'SET_TOKEN': return {...state,token:action.payload};
        case 'LOGOUT': return {...state,token:null}
        default: return state
    }
}
const persistreducerr = persistReducer(persistConfig,reducer)
const store = createStore(persistreducerr)
const persistor=persistStore(store)
export {store,persistor};

