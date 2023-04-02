import React, { useState } from 'react';
import '../../styles/browser/browser.css';
import Folder from './Folder';
import { useSelector } from 'react-redux';
import { selectFiles } from 'renderer/features/fileSlice';

function Browser() {
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
      />
    </div>
  );
}

export default Browser;
