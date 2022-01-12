import {createStore, applyMiddleware} from 'redux';
import reducers from './modules';

const store = createStore(reducers, applyMiddleware());

export default store;
