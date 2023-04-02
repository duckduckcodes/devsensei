import React from 'react';
import { IRequest } from 'renderer/Data/interfaces';
import requestStyle from 'renderer/utils/requestStyle';
import '../../styles/view/tabs.css';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { removeTabFromQueue } from 'renderer/features/tabSlice';

function Tab(props: IRequest) {
  const dispatch = useDispatch();
  var style = requestStyle(props.type);
  const handleRemoveTab = (id: string) => {
    console.log("tab viewe", id);
    dispatch(removeTabFromQueue({ id }));
  };
  
  return (
    <div className="tab_info active_tab">
      <div className="tab_info_text">
        <p className="type" style={style}>
          {props.type}
        </p>
        <p
          className="title"
          style={{
            whiteSpace: 'nowrap',
            wordWrap: 'break-word',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100px',
          }}
        >
          {props.title}
        </p>
      </div>
      <div onClick={() => handleRemoveTab(props.id)} className="close">
        <IoMdClose color="red" />
      </div>
    </div>
  );
}

export default Tab;
