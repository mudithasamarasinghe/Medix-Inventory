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
            orderedQty: '',
            receivedQty: '',
            location: '',
            itemUnit: '',
            status: '',
            remark: '',
        }
    ]);


    // Function to add a new row
    const addRow = () => {
        const newRow = {
            id: rows.length + 1, // Generate a unique ID for each row
            itemId: '',
            itemName: '',
            category: '',
            expiryDate: '',
            receivedDate: '',
            batchNo: '',
            orderedQty: '',
            receivedQty: '',
            location: '',
            itemUnit: '',
            status: '',
            remark: '',
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
        console.log(rows)
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
                    <th className="th-text">itemId</th>
                    <th className="th-text">itemName</th>
                    <th className="th-text">category</th>
                    <th className="th-text">expiryDate</th>
                    <th className="th-text">receivedDate</th>
                    <th className="th-text">batchNo</th>
                    <th className="th-text">orderedQty</th>
                    <th className="th-text">receivedQty</th>
                    <th className="th-text">location</th>
                    <th className="th-text">itemUnit</th>
                    <th className="th-text">status</th>
                    <th className="th-text">remark</th>
                </tr>
                </thead>
                <tbody>
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td>
                            <input
                                type="text"
                                value={row.itemId}
                                name={`itemId_${row.id}`}
                                onChange={(e) => handleInputChange(row.id, 'itemId', e.target.value)}
                            />
                        </td>
                        <td>
                            <input className="input-text"
                                   type="text"
                                   value={row.itemName}
                                   name={`itemName_${row.id}`}
                                   onChange={(e) => handleInputChange(row.id, 'itemName', e.target.value)}
                            />
                        </td>
                        <td>
                            <select value={category} onChange={handleCategoryChange}  name={`category_${row.id}`}>
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
                                name={`expiryDate_${row.id}`}
                                onChange={(e) => handleInputChange(row.id, 'expiryDate', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="date"
                                value={row.receivedDate}
                                name={`receivedDate_${row.id}`}
                                onChange={(e) => handleInputChange(row.id, 'receivedDate', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={row.batchNo}
                                name={`batchNo_${row.id}`}
                                onChange={(e) => handleInputChange(row.id, 'batchNo', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={row.orderedQty}
                                name={`orderedQty_${row.id}`}
                                onChange={(e) => handleInputChange(row.id, 'orderedQty', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={row.receivedQty}
                                name={`receivedQty_${row.id}`}
                                onChange={(e) => handleInputChange(row.id, 'receivedQty', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={row.location}
                                name={`location_${row.id}`}
                                onChange={(e) => handleInputChange(row.id, 'location', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={row.itemUnit}
                                name={`itemUnit_${row.id}`}
                                onChange={(e) => handleInputChange(row.id, 'itemUnit', e.target.value)}
                            />
                        </td>
                        <td>
                            <select value={status} onChange={handleStatusChange} name={`status_${row.id}`}>
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
                                name={`remark_${row.id}`}
                                onChange={(e) => handleInputChange(row.id, 'remark', e.target.value)}
                            />
                        </td>
                        <td>
                            <button className="button-solid-color" onClick={addRow}>Add Row</button>
                        </td>
                        <td>
                            {rows.length > 1 && (
                                <button className="button-solid-color" onClick={() => deleteRow(row.id)}>Delete</button>
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



