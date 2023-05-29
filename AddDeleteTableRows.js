import React, { useState } from 'react';
import "./GRCNForm.css";
import axios from 'axios';

const Table = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      itemId: '',
      itemName: '',
      category: '',
      expiryDate: '',
      receivedDate: '',
      batchNo: '',
      partNo: '',
      orderedQty: '',
      receivedQty: '',
      location: '',
      itemUnit: '',
      status: '',
      remark: ''
    }
  ]);
  

  // Function to add a new row
  const addRow = () => {
    const newRow = {
      id: Date.now(), // Generate a unique ID for each row
      itemId: '',
      itemName: '',
      category: '',
      expiryDate: '',
      receivedDate: '',
      batchNo: '',
      partNo: '',
      orderedQty: '',
      receivedQty: '',
      location: '',
      itemUnit: '',
      status: '',
      remark: ''
    };              
    setRows([...rows, newRow]);
  };
              
    // Define category state and its setter function
    const [category, setCategory] = useState('');

  // Function to delete a row by ID
  const deleteRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  // Function to submit the data
  const submitData = () => {
    axios.post('YOUR_API_ENDPOINT', rows)
      .then((response) => {
        console.log(response.data);
        // Do something with the response if needed
      })
      .catch((error) => {
        console.error(error);
        // Handle the error if needed
      });
  };

            {/* Available category options */}
            const categoryOptions = [
              'Laboratory Equipment- Clean Room Products',
              'Laboratory Equipment- General Laboratory Products',
              'Medical Equipment',
              'Laboratory Consumables'
            ];

  // Function to handle status change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const [status, setStatus] = useState('');

  {/* Available status options */}
  const statusOptions = [
    'Fully Received',
    'Partially Received'
  ];

// Function to handle category change
const handleStatusChange = (e) => {
setStatus(e.target.value);
};

  // Function to handle input change in a row
const handleInputChange = (id, field, value) => {
  let sanitizedValue = value; // Initialize sanitized value with the input value

  // Validation logic based on field name
  if (field === 'itemId') {
    sanitizedValue = sanitizedValue.replace(/[^0-9]/g, ''); // Sanitize input to allow only numeric characters
  } else if (field === 'itemName') {
    sanitizedValue = sanitizedValue.replace(/[^a-zA-Z ]/g, ''); // Sanitize input to allow only alphabets and spaces
  } else if (field === 'batchNo') {
    sanitizedValue = sanitizedValue.replace(/[^0-9]/g, '');
  } else if (field === 'partNo') {
    sanitizedValue = sanitizedValue.replace(/[^0-9]/g, ''); // Sanitize input to allow only alphabets and spaces
  } else if (field === 'orderedQty') {
    sanitizedValue = sanitizedValue.replace(/[^0-9]/g, ''); 
  } else if (field === 'receivedQty') {
    sanitizedValue = sanitizedValue.replace(/[^0-9]/g, ''); // Sanitize input to allow only alphabets and spaces
  } else if (field === 'location') {
    sanitizedValue = sanitizedValue.replace(/[^0-9]/g, ''); 
  } else if (field === 'itemUnit') {
    sanitizedValue = sanitizedValue.replace(/[^a-zA-Z ]/g, ''); // Sanitize input to allow only alphabets and spaces
  }

  const updatedRows = rows.map((row) => {
    if (row.id === id) {
      return { ...row, [field]: sanitizedValue };
    }
    return row;
  });

  setRows(updatedRows);
};

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>itemId</th>
            <th>itemName</th>
            <th>category</th>
            <th>expiryDate</th>
            <th>receivedDate</th>
            <th>batchNo</th>
            <th>partNo</th>
            <th>orderedQty</th>
            <th>receivedQty</th>
            <th>location</th>
            <th>itemUnit</th>
            <th>status</th>
            <th>remark</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <input
                  type="text"
                  value={row.itemId}
                  name='itemId'
                  onChange={(e) => handleInputChange(row.id, 'itemId', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.itemName}
                  name='itemName'
                  onChange={(e) => handleInputChange(row.id, 'itemName', e.target.value)}
                />
              </td>
              <td>
              <select value={category} onChange={handleCategoryChange}>
              <option value="" disabled hidden>
                Select a category
              </option>
              {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
              </td>
              <td>
                <input
                  type="date"
                  value={row.expiryDate}
                  name='expiryDate'
                  onChange={(e) => handleInputChange(row.id, 'expiryDate', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="date"
                  value={row.receivedDate}
                  name='receivedDate'
                  onChange={(e) => handleInputChange(row.id, 'receivedDate', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.batchNo}
                  name='batchNo'
                  onChange={(e) => handleInputChange(row.id, 'batchNo', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.partNo}
                  name='partNo'
                  onChange={(e) => handleInputChange(row.id, 'partNo', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.orderedQty}
                  name='orderedQty'
                  onChange={(e) => handleInputChange(row.id, 'orderedQty', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.receivedQty}
                  name='receivedQty'
                  onChange={(e) => handleInputChange(row.id, 'receivedQty', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.location}
                  name='location'
                  onChange={(e) => handleInputChange(row.id, 'location', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.itemUnit}
                  name='itemUnit'
                  onChange={(e) => handleInputChange(row.id, 'itemUnit', e.target.value)}
                />
              </td>
              <td>
              <select value={status} onChange={handleStatusChange}>
              <option value="" disabled hidden>
                Select the status
              </option>
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
              </td>
              <td>
                <input
                  type="text"
                  value={row.remark}
                  name='remark'
                  onChange={(e) => handleInputChange(row.id, 'remark', e.target.value)}
                />
              </td>
              <td>
              <button onClick={addRow}>Add Row</button>
              </td>
              <td>
                {rows.length > 1 && (
                  <button onClick={() => deleteRow(row.id)}>Delete</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;