import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addRequest } from 'renderer/features/fileSlice';
import { useDispatch } from 'react-redux';

export default function AddRequest() {
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
    // Add your own logic here to handle the form submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div>
        <label htmlFor="requestMethod">Request Method:</label>
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
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Link to="/">Go Back</Link>
      <button type="submit">Add Request</button>
    </form>
  );
}
