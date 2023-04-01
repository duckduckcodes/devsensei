import React, { useState, ChangeEvent } from 'react';
import { IoMdTrash } from 'react-icons/io';

interface InputObject {
  id: number;
  key: string;
  value: string;
}

function Params(): JSX.Element {
  const [inputValues, setInputValues] = useState<InputObject[]>([
    { id: 1, key: 'sdfgsdfg', value: '' },
    { id: 2, key: 'sdfgsfg', value: '' },
    { id: 3, key: '', value: '' },
    { id: 4, key: '', value: '' },
    { id: 5, key: '', value: '' },
    { id: 6, key: '', value: '' },
    { id: 7, key: '', value: '' },

    { id: 8, key: 'qsdf', value: 'qsdf' },
    { id: 9, key: 'qdsfq', value: 'qsdfqsdf' },
    { id: 10, key: 'qsdf', value: 'qsfd' },
  ]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: number
  ): void => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) =>
      prevInputValues.map((inputValue) => {
        if (inputValue.id === id) {
          return { ...inputValue, [name]: value };
        }
        return inputValue;
      })
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {inputValues.map((inputValue) => (
          <tr key={inputValue.id}>
            {inputValue.id !== 1 &&
            inputValue.id !== 2 &&
            inputValue.id !== 3 &&
            inputValue.id !== 4 &&
            inputValue.id !== 5 &&
            inputValue.id !== 6 &&
            inputValue.id !== 7 ? (
              <div>
                {' '}
                <th>
                  <input type="checkbox" />
                </th>
                <td>
                  <input
                    type="text"
                    name="key"
                    placeholder="key"
                    value={inputValue.key}
                    onChange={(e) => handleInputChange(e, inputValue.id)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="value"
                    placeholder="value"
                    value={inputValue.value}
                    onChange={(e) => handleInputChange(e, inputValue.id)}
                  />
                </td>
              </div>
            ) : (
              <div>
                <p>{inputValue.key}</p>
                <p>{inputValue.value}</p>
              </div>
            )}

            <IoMdTrash />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Params;
