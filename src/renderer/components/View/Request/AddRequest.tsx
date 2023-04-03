import { useState } from 'react';
import { addRequest } from 'renderer/features/fileSlice';
import { useDispatch } from 'react-redux';
import '../../../styles/view/AddRequest.css';
import '../../../styles/view/request.css';
import { IoMdClose } from 'react-icons/io';

export default function AddRequest({ setOpenAddRequest }: any) {
  const [requestMethod, setRequestMethod] = useState('GET');
  const [name, setName] = useState('New Request');  // we gotta set a character limit to this
  const dispatch = useDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const requestObj = {
      id: Math.random().toString(36).substring(2, 12),
      type: requestMethod,
      title: name,
    };

    dispatch(addRequest({ folderIndex: 0, content: requestObj }));
    setOpenAddRequest(false);
    // Add your own logic here to handle the form submission
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="requestMethod">Request Method: </label>
    <div id="container">
      <div className="close">
        <IoMdClose size={"24px"} color="red" onClick={() => setOpenAddRequest(false)}/>
      </div>
      <form className="form_container" onSubmit={handleSubmit}>
        <h1 className='request_title'>{name}</h1>
        <div className='request_method'>
          <label htmlFor="requestMethod">Request Method</label>
          <select
            id="requestMethod"
            value={requestMethod}
            onChange={(e) => setRequestMethod(e.target.value)}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
            <option value="DELETE">PATCH</option>
          </select>
        </div>
        <div className="input">
          <label htmlFor="name">Name: </label>
        <div>
          <input
          className='request_name'
            type="text"
            id="name"
            placeholder='request name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button
            type="button"
            className="modalBtn"
            onClick={() => setOpenAddRequest(false)}
          >
            Go Back
          </button>
          <button type="submit" className="modalBtn">
            Add Request
          </button>
        <div className="buttons">
          <button className='cancel' type="button" onClick={() => setOpenAddRequest(false)}>
            Go Back
          </button>
          <button className='add' type="submit">Add Request</button>
        </div>
      </form>
    </div>
  );
}
