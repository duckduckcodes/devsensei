import React from 'react';
import { IRequest } from 'renderer/Data/interfaces';
import requestStyle from 'renderer/utils/requestStyle';
import '../../styles/view/tabs.css';
import { IoMdClose } from 'react-icons/io';

function Tab(props: IRequest) {
  var style = requestStyle(props.type);

  return (
    <div className="tab_info active_tab">
      <div className="tab_info_text">
        <p className="type" style={style}>
          {props.type}
        </p>
        <p className="title" style={{
              whiteSpace: 'nowrap',
              wordWrap: 'break-word',
              overflow: 'hidden',
              textOverflow: "ellipsis",
              width: '100px'
        }}>{props.title}</p>
      </div>
      <div className="close">
        <IoMdClose color='red'/>
      </div>
    </div>
  );
}

export default Tab;
