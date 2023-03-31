import React, { useEffect, useRef, useState } from "react";
import "../../styles/browser.css";
import { GET, PUT, POST, PATCH, DELETE } from "../../Data/reaquest-type";
import { RequestMethod } from "../../Data/types";
import { SlOptions } from "react-icons/sl";
import RequestOptions from "../../widgets/RequestOptions";

function Request(props: { title: string; type: string }) {
  const [down, setDown] = useState(false);
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
  var style = {};
  switch (props.type) {
    case "GET":
      style = GET;
      break;
    case "PUT":
      style = PUT;
      break;
    case "POST":
      style = POST;
      break;
    case "PATCH":
      style = PATCH;
      break;
    case "DELETE":
      style = DELETE;
      break;

    default:
      break;
  }

  const handleDropDown = () => {
    down ? setDown(false) : setDown(true);
  };

  return (
    <div className="request">
      <div className="info">
        <p className="type" style={style}>
          {props.type}
        </p>
        <p className="title">{props.title}</p>
      </div>
      <div className="options" onClick={handleDropDown}>
        <SlOptions />
        {down && (
          <div ref={optionsRef}>
            {" "}
            <RequestOptions />
          </div>
        )}
      </div>
    </div>
  );
}

export default Request;
