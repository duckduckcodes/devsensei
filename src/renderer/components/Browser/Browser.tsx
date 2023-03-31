import React, { useState } from "react";
import "../../styles/browser.css";
import Folder from "./Folder";

function Browser() {
  const [projects, setProject] = useState([
    {
      projectName: "project-v1",
      requests: [
        { type: "GET", title: "get one users" },
        { type: "DELETE", title: "get all users" },
      ],
      folders: [
        {
          title: "posts",
          requests: [
            { type: "GET", title: "get one users" },
            { type: "DELETE", title: "get all users" },
          ],
          folders: [],
        },
      ],
    },
  ]);
  return (
    <div className="browser">
      <div className="content"></div>
      {projects.map((project) => (
        <Folder
          key={project.projectName}
          title={project.projectName}
          folders={project.folders}
          requests={project.requests}
        />
      ))}
    </div>
  );
}

export default Browser;
