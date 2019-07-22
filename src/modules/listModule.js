import listReducer from '../reducers/listReducer';
import {initializeList, finalizeList} from '../actions/listActions';

export function listModule() {
    return {
        id: "list",
        reducerMap: {
            list: listReducer,
        },
        initialActions: [initializeList()],
        finalActions: [finalizeList()]
    };
}