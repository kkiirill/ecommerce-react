import { rootReducers } from './reducer/index';
import { createStore } from 'redux';

export const store = createStore(rootReducers)