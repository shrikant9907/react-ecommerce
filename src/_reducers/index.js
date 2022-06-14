import { combineReducers } from 'redux';
import authModalReducer from './authModalReducer';

const reducer = combineReducers({
    authModal: authModalReducer
}); 

export default reducer;