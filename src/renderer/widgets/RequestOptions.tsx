import React from 'react';
import { IRequest } from 'renderer/Data/interfaces';
import '../styles/general/options.css';

function RequestOptions(props: IRequest) {
  return (
    <div className="project-options">
      <div className="op rename">
        <p>Rename</p>
      </div>
      <div className="op duplicate">
        <p>Duplicate</p>
      </div>
      <div className="op delete">
        <p>Delete</p>
      </div>
    </div>
  );
}

export default RequestOptions;
