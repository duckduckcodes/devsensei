import React, { useEffect, useRef, useState } from "react";
import "../../styles/browser/browser.css";
import { SlOptions } from "react-icons/sl";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import Request from "./Request";
import { ISubFolderProps } from "../../Data/interfaces";
import FolderOptions from "../../widgets/FolderOptions";

function Subfolder(props: ISubFolderProps) {
  const [projectName, setProjectName] = useState("project");
  const [down, setDown] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
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
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleDropDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    down ? setDown(false) : setDown(true);
  };

  return (
    <div className="folder-container">
      <div onClick={handleClick} className="folder">
        <div  className="p1">
          {isOpen ? (
            <HiChevronDown size={"22px"} />
          ) : (
            <HiChevronRight size={"22px"} />
          )}
          <p className="fileName">{props.title}</p>
        </div>

        <div className="options" onClick={handleDropDown}>
          <SlOptions />
          {down && <div ref={optionsRef}> <FolderOptions /></div>}

        </div>
      </div>
      <div className="content" style={{paddingLeft: "20px"}}>
        {isOpen &&
          props.requests.map((request) => (
            <Request
              key={request.title}
              title={request.title}
              type={request.type}
            />
          ))}
      </div>
    </div>
  );
}

export default Subfolder;
