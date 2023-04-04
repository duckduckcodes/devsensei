import React from 'react';
import { IRequest } from 'renderer/Data/interfaces';
import requestStyle from 'renderer/utils/requestStyle';
import '../../styles/view/tabs.css';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { removeTabFromQueue, activeTab, makeTabActive } from 'renderer/features/tabSlice';
import { RootState } from 'renderer/Data/types';

function Tab(props: IRequest) {
  const dispatch = useDispatch();
  const currentActiveTab: boolean | undefined = useSelector((state: RootState) => activeTab(state, props.id));
  var style = requestStyle(props.type);
  const handleRemoveTab = (id: string) => {
    console.log('tab viewe', id);
    dispatch(removeTabFromQueue({ id }));
  };

  const makeCurrentTabActive = (id: string) =>{
    dispatch(makeTabActive({ id }))
  }

  return (
    <div onClick={() => makeCurrentTabActive(props.id)} className={`tab_info ${currentActiveTab ? 'active_tab' : ''}`}>
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
      <div onClick={() => handleRemoveTab(props.id)} className="close_tab">
        <IoMdClose color="red" />
      </div>
    </div>
  );
}

export default Tab;
