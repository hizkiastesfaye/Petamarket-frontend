import {createStore} from 'redux'
import {persistReducer,persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
const persistConfig = {
    key:'root',
    storage
}

const initState = {
    token:null,
    firstname:'',
    role:''
}
const reducer = (state=initState, action)=>{
    switch(action.type){
        case 'SET_TOKEN': return {...state,token:action.payload.token, firstname:action.payload.firstname,role:action.payload.role};
        case 'LOGOUT': return {...state,token:null, firstname:''}
        default: return state
    }
}
const persistreducerr = persistReducer(persistConfig,reducer)
const store = createStore(persistreducerr)
const persistor=persistStore(store)
export {store,persistor};

