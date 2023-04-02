import React, { useEffect, useRef, useState } from 'react';
import '../../styles/browser/browser.css';
import { GET, PUT, POST, PATCH, DELETE } from '../../Data/reaquest-type';
import { RequestMethod } from '../../Data/types';
import { SlOptions } from 'react-icons/sl';
import RequestOptions from '../../widgets/RequestOptions';
import requestStyle from 'renderer/utils/requestStyle';
import { IRequest } from 'renderer/Data/interfaces';
import { useDispatch } from 'react-redux';
import { addTab } from 'renderer/features/tabSlice';

function Request(props: IRequest) {
  const [down, setDown] = useState(false);
  const dispatch = useDispatch();
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
    window.addEventListener('mousedown', handleClickOutside);

    // Unbind the event listener on clean up
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [optionsRef]);
  var style = requestStyle(props.type);

  const handleDropDown = (event: Event | undefined) => {
    // event?.stopPropagation()
    down ? setDown(false) : setDown(true);
  };
  const handleRequestClick = (id: string, title: string, type: string) => {
    dispatch(addTab({ id, title, type }));
    console.log('clicked');
  };
  return (
    <div
      onClick={() => handleRequestClick(props.id, props.title, props.type)}
      className="request"
    >
      <div className="info">
        <p className="type" style={style}>
          {props.type}
        </p>
        <p className="title">{props.title}</p>
      </div>
      <div className="options" onClick={() => handleDropDown(event)}>
        <SlOptions />
        {down && (
          <div ref={optionsRef}>
            {' '}
            <RequestOptions id={props.id} title={props.title} type={props.type}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Request;
