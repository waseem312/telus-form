// store.js
import { createStore } from 'redux';
import rootReducer from '././redux/reducers/formReducer';

const store = createStore(rootReducer);

export default store;
