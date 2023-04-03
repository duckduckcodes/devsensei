import React from 'react';
import '../styles/general/options.css';
import { useDispatch } from 'react-redux';
import { addRequest, addSubFolder } from 'renderer/features/fileSlice';

function FolderOptions(props: { id: string | undefined }) {
  const dispatch = useDispatch();
  const addNewRequest = (id: string | undefined) => {
    dispatch(addRequest({id}));
  };

  const addNewFolder = (id: string | undefined) => {
    dispatch(addSubFolder({id}));
  };


  return (
    <div className="project-options">
      <div className="op Add-request">
        <p  onClick={() => addNewRequest(props.id)} >Add request</p>
      </div>
      <div onClick={() => addNewFolder(props.id)} className="op add-folder">
        <p>Add folder</p>
      </div>
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

export default FolderOptions;
