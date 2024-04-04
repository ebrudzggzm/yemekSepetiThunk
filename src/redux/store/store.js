import {applyMiddleware,createStore,combineReducers} from 'redux';
import { thunk } from 'redux-thunk';
import productReducer from '../reducers/productReducer';
import basketReducer from '../reducers/basketReducer';
import restaurantReducer from '../reducers/restaurantReducer';




const rootReducer = combineReducers ({
products: productReducer,
cart:basketReducer,
restaurants:restaurantReducer

})

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;