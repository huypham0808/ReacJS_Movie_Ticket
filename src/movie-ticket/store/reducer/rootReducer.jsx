import {combineReducers} from 'redux';
import seatReducer from './seatReducer';
import DatveReducer from './reducerDatVe';
const rootReducer = combineReducers({
    seatReducer,
    DatveReducer,
})

export default rootReducer;
