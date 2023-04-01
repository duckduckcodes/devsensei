import React, { useEffect, useRef, useState } from "react";
import "../../styles/browser/browser.css";
import { SlOptions } from "react-icons/sl";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import Subfolder from "./Subfolder";
import { IFolderProps } from "../../Data/interfaces";
import ProjectOptions from "../../widgets/ProjectOptions";

function Folder(props: IFolderProps) {
  const [projectName, setProjectName] = useState("project");
  const [down, setDown] = useState(true);


  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const optionsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
        setDown(false);
      }
    }

    // Bind the event listener
    window.addEventListener("mousedown", handleClickOutside);

    // Unbind the event listener on clean up
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [optionsRef]);

  const handleDropDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    down ? setDown(false) : setDown(true);
  };
  return (
    <div className="folder-container">
      <div onClick={handleClick}  className="folder">
        <div className="p1">
          {isOpen ? (
            <HiChevronDown size={"22px"} />
          ) : (
            <HiChevronRight size={"22px"} />
          )}
          <p className="fileNmae">{props.title}</p>
        </div>

        <div className="options" onClick={handleDropDown}>
          <SlOptions />

          {down && <div ref={optionsRef}> <ProjectOptions/></div>}
        </div>
      </div>

      <div className="content" style={{ paddingLeft: "8px" }}>
        {isOpen &&
          props.folders.map((request) => (
            <Subfolder title={request.title} requests={request.requests} />
          ))}
      </div>
    </div>
  );
}

export default Folder;
