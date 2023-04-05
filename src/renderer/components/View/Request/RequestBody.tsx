import React from 'react';
import RequestOptionTabs from './RequestOptionTabs';
import '../../../styles/view/tabBody.css';
import Search from 'renderer/components/Browser/Search';
import Tab from '../Tab';
import Request from 'renderer/components/Browser/Request';
import { IRequest } from 'renderer/Data/interfaces';

function RequestBody() {

  //should get the selected tab, from state


  return (
    <div className="request_container">
      <div className="request_title">
        <div className="request_title">
          
        </div>
      </div>
      <div className="request_url_method">
        <Search />
      </div>
      <RequestOptionTabs />
    </div>
  );
}

export default RequestBody;
