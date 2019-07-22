import { createStore } from "redux-dynamic-modules";
import {getUsersModule} from './modules/userModule';

const store = createStore(
    {},
    [],
    [],
    getUsersModule()
);

export default store;