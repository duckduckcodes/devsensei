import React from 'react';
import '../styles/general/options.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addRequest } from 'renderer/features/fileSlice';
import '../styles/general/options.css';

function ProjectOptions(props: {
  id: string | undefined;
  setOpenAddRequest: any;
}) {
  const dispatch = useDispatch();
  const addNewRequest = (id: string | undefined) => {
    dispatch(addRequest({ id }));
  };

  return (
    <div className="project-options">
      <div className="op Add-request">
        <p onClick={() => props.setOpenAddRequest(true)}>Add request</p>
      </div>
      <div className="op add-folder">
        <p>Add folder</p>
      </div>
      <div className="op rename">
        <p>Rename</p>
      </div>
      <div className="op duplicate">
        <p>Duplicate</p>
      </div>
      <div className="op Export">
        <p>Export</p>
      </div>
      <div className="op delete">
        <p>Delete</p>
      </div>
    </div>
  );
}

export default ProjectOptions;
