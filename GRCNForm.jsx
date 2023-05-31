import React, { useState } from 'react';
import "./GRCNForm.css";
import axios from 'axios';
import Modal from 'react-modal';
import AddDeleteTableRows from './AddDeleteTableRows';

const GRCNForm= () => {
        
    // Master Data
    const [GRCNId, setGRCNId] = useState('');
    const [PONo, setPONo] = useState('');
    const [SupplierName, setSupplierName] = useState('');

    // Detail Data
    const [Category, setCategory] = useState('');
    const [Status, setStatus] = useState('');
    const [isRecordInserted_1, setRecordInserted] = useState(false);

    // Event handler for form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e);
        // Master Data
      console.log('GRCN Id:', GRCNId);
      console.log('PO No:', PONo);
      console.log('Supplier Name:', SupplierName);

        // Detail Data
      console.log('Item Id:', e.target[2].value);
      console.log('Item Name:', e.target[3].value);
        console.log('Category:', e.target[4].value);
      console.log('Expiry Date:', e.target[5].value);
        console.log('Received Date:', e.target[6].value);
        console.log('Batch No:', e.target[7].value);
        console.log('Order Quantity:', e.target[8].value);
        console.log('Received Quantity:', e.target[9].value);
        console.log('Location:', e.target[10].value);
        console.log('Item Unit:', e.target[11].value);
      console.log('Status:', e.target[12].value);
        console.log('Remark:', e.target[13].value);

      const formData = {
        "PONo":PONo,
        "supplierName":SupplierName,
        "category":Category,
        "location":Location,
        "status":Status,
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
                            pattern="[0-9]+"
                            value={PONo}
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
                            value={SupplierName}
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
