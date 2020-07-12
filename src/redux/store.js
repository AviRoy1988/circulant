import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import RootReducer from './root-reducer'


const middlewares = [logger];

const Store = createStore(RootReducer, applyMiddleware(...middlewares));



export default Store;