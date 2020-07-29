import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import RootReducer from './root-reducer';
import {persistStore} from 'redux-persist';


const middlewares = [logger];

export const Store = createStore(RootReducer, applyMiddleware(...middlewares));

export const Persistor = persistStore(Store);

export default {Store, Persistor};