import {createStore} from 'react-redux';
import appReducer from './reducer';

const store = createStore(appReducer);

export default store;
