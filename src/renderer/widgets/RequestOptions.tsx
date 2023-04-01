import React from "react";
import "../styles/general/options.css";

function RequestOptions() {
  return (
    <div className="project-options">
      <div className="op Add-request">
        <p>Open</p>
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

export default RequestOptions;
