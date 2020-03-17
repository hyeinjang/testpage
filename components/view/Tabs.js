import React from 'react';
import Tablists from "./Tablists";
import TabContent1 from "./TabContent1";
import TabContent2 from './TabContent2';
import TabContent3 from './TabContent3';

const Tabs = () => {

    return (
        <>
            <h1>Tabs</h1>
            <container>
                <Tablists>
                    <div label={"tab1"}>
                        <TabContent1/>
                    </div>
                    <div label={"tab2"}>
                        <TabContent2/>
                    </div>
                    <div label={"tab3"}>
                        <TabContent3/>
                    </div>
                </Tablists>

            </container>
        </>
    )
}

export default Tabs;