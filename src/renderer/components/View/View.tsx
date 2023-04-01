import React from 'react';
import '../../App.css';
import '../../styles/view/view.css';
import Tab from './Tab';
import TabContent from './TabContent';

function View() {
  const activeTabsQueue = [
    { type: 'POST', title: 'create new user user user user' },
    { type: 'GET', title: 'get all users' },
  ];

  return (
    <div className="view">
      <div className="tabs">
        {activeTabsQueue.map((res) => (
          <Tab key={res.title} type={res.type} title={res.title} />
        ))}
      </div>
      <div className="playground">
        <TabContent />
      </div>
    </div>
  );
}

export default View;
