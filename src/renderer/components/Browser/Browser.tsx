import React, { useState } from 'react';
import '../../styles/browser/browser.css';
import Folder from './Folder';
import { useSelector } from 'react-redux';
import { selectFiles } from 'renderer/features/fileSlice';

function Browser({ setOpenAddRequest }: any) {
  const project = useSelector(selectFiles);

  return (
    <div className="browser">
      <div className="content"></div>
      <Folder
        id={project.id}
        key={project.id}
        title={project.title}
        folders={project.folders}
        requests={project.requests}
        setOpenAddRequest={setOpenAddRequest}
      />
    </div>
  );
}

export default Browser;
