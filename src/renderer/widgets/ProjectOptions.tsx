import React from "react";
import "../styles/general/options.css";

function ProjectOptions() {
  return (
    <div className="project-options">
      <div className="op Add-request">
        <p>Add request</p>
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
