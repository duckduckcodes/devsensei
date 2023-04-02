import React from 'react';
import '../../styles/view/tabBody.css';
import RequestBody from './Request/RequestBody';
import ResponseBody from './Response/ResponseBody';

function TabContent() {


  return (
    <div className="tab_content">
      <RequestBody />
      <ResponseBody />
    </div>
  );
}

export default TabContent;
