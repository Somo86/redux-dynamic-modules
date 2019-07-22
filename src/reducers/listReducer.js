import {INITIALIZE_LIST} from '../actions/listActions';
import markers from '../services/responses/markers';

const listReducer = (state = [], action) => {
    switch(action.type) {
        case INITIALIZE_LIST:
            return markers;
        default:
            return state;
    }
}

export default listReducer;