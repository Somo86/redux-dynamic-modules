import React from 'react';
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { listModule } from '../modules/listModule';
import List from './components/List';

const ListView = () => {
    return (
        <DynamicModuleLoader modules={[listModule()]}>
            <List />
        </DynamicModuleLoader>
    );
}

export default ListView;