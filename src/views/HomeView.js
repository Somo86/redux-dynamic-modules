import React, {useState} from 'react';
import ListView from './ListView';

const HomeView = () => {
    const [showList, setShowList] = useState(false);
    const [DynamicList, setDynaicList] = useState(null);

    return (
        <>
            { showList ? <ListView /> : null }
            { DynamicList ? <DynamicList /> : null }
            <button onClick={handleClick(showList, setShowList)}>
                Open list Dinamically
            </button>
            <button onClick={handleDinamicImport(DynamicList, setDynaicList)}>
                call Dinamic Import
            </button>
        </>
    );
};

function handleDinamicImport(DynamicList, setDynaicList) {
    return async () => {
        const module = DynamicList ? null : await dinamycImport();
        setDynaicList(module);
    }
}

async function dinamycImport() {
    const {default: module} = await import('./components/DynamicImport');
    return () => module;
}

function handleClick(showList, setShowList) {
    return () => {
        setShowList(!showList);
    }
}

export default HomeView;
