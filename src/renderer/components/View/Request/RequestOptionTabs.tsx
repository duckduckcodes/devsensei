import React, { useState } from 'react';
import '../../../styles/view/tabBody.css';
import Authorization from './utils/Authorization';
import Body from './utils/Body';
import Headers from './utils/Headers';
import Params from './utils/Params';

function RequestOptionTabs() {
  const [toggled, setToggled] = useState(1);

  const toggleTab = (index: number) => {
    setToggled(index);
  };
  return (
    <div className="request_option_tabs">
      <div className="request_tabs">
        <div
          onClick={() => toggleTab(1)}
          className={`params ${toggled === 1 ? 'active_request_tab' : ''}`}
        >
          <p>Params</p>
        </div>
        <div
          onClick={() => toggleTab(2)}
          className={`Auth ${toggled === 2 ? 'active_request_tab' : ''}`}
        >
          <p>Auth</p>
        </div>
        <div
          onClick={() => toggleTab(3)}
          className={`Headers ${toggled === 3 ? 'active_request_tab' : ''}`}
        >
          <p>Headers</p>
        </div>
        <div
          onClick={() => toggleTab(4)}
          className={`Body ${toggled === 4 ? 'active_request_tab' : ''}`}
        >
          <p>Body</p>
        </div>
      </div>
      <div className="request_tab_content">
        {toggled === 1 && <Params />}
        {toggled === 2 && <Authorization />}
        {toggled === 3 && <Body />}
        {toggled === 4 && <Headers />}
      </div>
    </div>
  );
}

export default RequestOptionTabs;
