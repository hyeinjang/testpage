import React, { useState } from "react";
import TabContents from "./TabContents";

const Tablists = props => {
  const { children } = props;
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabList = tab => {
    setActiveTab(tab);

    console.log(activeTab);
  };

  return (
    <>
      <ul>
        {children.map(list => {
          const { label } = list.props;

          return (
            <>
              <TabContents label={label} key={label} onClick={onClickTabList} />
            </>
          );
        })}
      </ul>
      <hr />
      <div className={"tab-content"}>
        {children.map(tab => {
          if (tab.props.label !== activeTab) {
            return undefined;
          }
          return tab.props.children;
        })}
      </div>
    </>
  );
};

export default Tablists;
