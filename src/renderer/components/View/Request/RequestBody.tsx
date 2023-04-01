import React from 'react';
import RequestOptionTabs from './RequestOptionTabs';
import '../../../styles/view/tabBody.css';

function RequestBody() {
  return (
    <div className="request_container">
      <div className="request_title"></div>
      <div className="request_url_method"></div>
      <RequestOptionTabs />
    </div>
  );
}

export default RequestBody;
