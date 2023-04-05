import React, { useState } from 'react';
import '../../App.css';
import '../../styles/view/view.css';
import Tab from './Tab';
import TabContent from './TabContent';
import { useSelector, useDispatch } from 'react-redux';
import { selectTabs } from 'renderer/features/tabSlice';
import { IRequest, ITabs } from 'renderer/Data/interfaces';

function View() {
  const activeTabsQueue: ITabs = useSelector(selectTabs);
  // const [activeTabsQueue, setActiveTabsQueue] = useState();



  return (
    <div className="view">
      <div className="tabs">
        {activeTabsQueue.requests.map((res) => (
          <Tab id={res.id} key={res.id} type={res.type} title={res.title} />
        ))}
      </div>
      <div className="playground">
        <TabContent />
      </div>
    </div>
  );
}

export default View;
