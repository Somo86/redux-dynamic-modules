import usersReducer from '../reducers/usersReducer';
import {initializeUsers, finalizeUsers} from '../actions/userActions';

export function getUsersModule() {
    return {
        id: "users",
        reducerMap: {
            users: usersReducer,
        },
        initialActions: [initializeUsers()],
        finalActions: [finalizeUsers()]
    };
}