import React, { useState } from 'react';
import '../../styles/browser/browser.css';
import Folder from './Folder';
import { useSelector } from 'react-redux';
import { selectFiles } from 'renderer/features/fileSlice';
import { GoBook } from "react-icons/go";

function Browser({ setOpenAddRequest }: any) {
  const project = useSelector(selectFiles);

  return (
    <div className="browser">
      <div className="env">
        <div className="environement_variables">
          <GoBook />
        </div>
      </div>
      <div className="content">
        <Folder
          id={project.id}
          key={project.id}
          title={project.title}
          folders={project.folders}
          requests={project.requests}
          setOpenAddRequest={setOpenAddRequest}
        />
      </div>
    </div>
  );
}

export default Browser;
