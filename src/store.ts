import {createStore, applyMiddleware} from 'redux';
import reducers from './modules';
import createSagaMiddleware from 'redux-saga';

const store = createStore(reducers, applyMiddleware(createSagaMiddleware()));

export default store;
