import React, { useState } from 'react';
import "./GRCNForm.css";
import axios from 'axios';
import Modal from 'react-modal';
import AddDeleteTableRows from './AddDeleteTableRows';
import './Reusable_components/Overall.css';

const GRCNForm= () => {

    // Master Data
    const [GRCNId, setGRCNId] = useState('');
    const [poNo, setPONo] = useState('');
    const [supplierName, setSupplierName] = useState('');

    // Detail Data
    const [itemId, setItemId] = useState('');
    const [itemName, setItemName] = useState('');
    const [category, setCategory] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [receivedDate, setReceivedDate] = useState('');
    const [batchNo, setBatchNo] = useState('');
    const [orderedQty, setOrderedQty] = useState('');
    const [receivedQty, setReceivedQty] = useState('');
    const [location, setLocation] = useState('');
    const [itemUnit, setItemUnit] = useState('');
    const [status, setStatus] = useState('');
    const [remark, setRemark] = useState('');
    const [isRecordInserted_1, setRecordInserted] = useState(false);

    // Event handler for form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e);
        // Master Data
      console.log('GRCN Id:', GRCNId);
      console.log('PO No:', poNo);
      console.log('Supplier Name:', supplierName);

        // Detail Data
        console.log('item Id:', e.target[2].value);
        console.log('item Name:', e.target[3].value);
        console.log('category:', e.target[4].value);
        console.log('expiry Date:', e.target[5].value);
        console.log('received Date:', e.target[6].value);
        console.log('batch No:', e.target[7].value);
        console.log('order Quantity:', e.target[8].value);
        console.log('received Quantity:', e.target[9].value);
        console.log('location:', e.target[10].value);
        console.log('item Unit:', e.target[11].value);
        console.log('status:', e.target[12].value);
        console.log('remark:', e.target[13].value);

      const formData = {
          "poNo":poNo,
          "supplierName":supplierName,
          "itemId":e.target[2].value,
          "itemName":e.target[3].value,
          "category":e.target[4].value,
          "expiryDate":e.target[5].value,
          "receivedDate":e.target[6].value,
          "batchNo":e.target[7].value,
          "orderedQty":e.target[8].value,
          "receivedQty":e.target[9].value,
          "location":e.target[10].value,
          "itemUnit":e.target[11].value,
          "status":e.target[12].value,
          "remark":e.target[13].value,
    };

      axios.post('http://localhost:8090/goodReceivingNote/add', formData, {
        headers: {
          'Content-Type': 'application/json',
          // Add other headers as needed
        }
      })
        .then((response) => {
          console.log(response.data);
          setRecordInserted(true); // Set the state to indicate successful record insertion
          // Handle successful form submission
        })
        .catch((error) => {
          console.error(error);
          // Handle form submission error
           // alert(error.message);
            console.log(error.toJSON());
        });

    };

              {/* Available category options */}
              const categoryOptions = [
                'Laboratory Equipment- Clean Room Products',
                'Laboratory Equipment- General Laboratory Products',
                'Medical Equipment',
                'Laboratory Consumables'
              ];

              {/* Event handler for category selection */}
              const handleCategoryChange = (e) => {
                setCategory(e.target.value);
                };

              const statusOptions = [
                'Fully Received',
                'Partially Received'
              ];

              {/* Event handler for category selection */}
              const handleStatusChange = (e) => {
                setStatus(e.target.value);
                };

                const MyComponent = () => {
                  const [isOpen, setIsOpen] = useState(false);

                  const handleOpenModal = () => {
                    setIsOpen(true);
                  };

                  const handleCloseModal = () => {
                    setIsOpen(false);
                  };
                }


    return (
        <div className="maincontainer">
      <div class="container py-5">
         <div class="py-5">
           <div class="row">
             <div class="col-lg-6 mb-5">
             </div>
        <div className="body">
        {/* <div className= "green-box">
        <div><img className="mingcute-menu-fill" src="https://cdn.animaapp.com/projects/646d6236319c265fc21daea0/releases/646ddc762d158003af019fdb/img/mingcute-menu-fill.svg" alt="mingcute:menu-fill">
        </img></div>
        <div className="grcn-text">
            GOOD RECEIVING FORM
        </div>
        </div> */}

<form onSubmit={handleSubmit}>
                    <div class="row">

                        {/* Enter Po No */}
                      <div class="form-group col-lg-6">
                        <label class="font-weight-bold text-small" for="PO No:">PO No:<span class="text-primary ml-1">*</span></label>
                        <input class="form-control" type="text"
                            value={poNo}
                            name='poNo'
                            onChange={(e) => {
                            const input = e.target.value;
                            const sanitizedInput = input.replace(/[^0-9]/g, ''); // Remove any non-numeric characters
                            setPONo(sanitizedInput);
                            }}
                            id="poNo" placeholder="Enter PO No" required="" />
                      </div>

                            {/* Select Supplier Name */}
                      <div class="form-group col-lg-6">
                        <label class="font-weight-bold text-small" for="Supplier Name:">Supplier Name:<span class="text-primary ml-1">*</span></label>
                        <input class="form-control" type="text"
                            value={supplierName}
                            name='supplierName'
                            onChange={(e) => {
                            const input = e.target.value;
                            const sanitizedInput = input.replace(/[^A-Za-z]/g, ''); // Remove any non-alphabetical characters
                            setSupplierName(sanitizedInput);
                            }}
                            id="supplierName" placeholder="Enter Supplier Name" required="" />
                      </div>

                      {/* table */}
                      <div class="form-group col-lg-12">
                      <AddDeleteTableRows />
                      </div>
                      </div>
                      <div>
                        <button type="submit" className='button-solid-color' ><div className='button-solid:hover'>
                        Record</div></button>
                        <button type="clear" className='button-with-outline' ><div className='button-with-outline:hover'>
                        Clear</div></button>
                        </div>
                    </form>
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }

  export default GRCNForm;
