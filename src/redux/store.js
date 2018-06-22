import { createStore, applyMiddleware } from 'redux';
import promiseMiddlware from 'redux-promise-middleware';
import houseReducer from './ducks/houseReducer';

const middleware = applyMiddleware(promiseMiddlware());

const store = createStore(houseReducer, middleware);

export default store;
