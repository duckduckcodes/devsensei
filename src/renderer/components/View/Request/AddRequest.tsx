import { useState } from 'react';
import { addRequest } from 'renderer/features/fileSlice';
import { useDispatch } from 'react-redux';
import '../../../styles/view/AddRequest.css';

export default function AddRequest({ setOpenAddRequest }: any) {
  const [requestMethod, setRequestMethod] = useState('GET');
  const [name, setName] = useState('');
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
          <input
            type="text"
            id="name"
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
        </div>
      </form>
    </div>
  );
}
