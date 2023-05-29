import React, { useState } from 'react';
import "./GRCNForm.css";
import axios from 'axios';
import Modal from 'react-modal';
import AddDeleteTableRows from './AddDeleteTableRows';

const GRCNForm= () => {
        
    // Define state variables for form inputs
    const [GRCNId, setGRCNId] = useState('');
    const [PONo, setPONo] = useState('');
    const [ReceivedDate, setReceivedDate] = useState('');
    const [SupplierId, setSupplierId] = useState('');
    const [SupplierName, setSupplierName] = useState('');
    const [ItemId, setItemId] = useState('');
    const [ItemName, setItemName] = useState('');
    const [Category, setCategory] = useState('');
    const [ExpiryDate, setExpiryDate] = useState('');
    const [BatchNo, setBatchNo] = useState('');
    const [PartNo, setPartNo] = useState('');
    const [OrderedQty, setOrderedQty] = useState('');
    const [ReceivedQty, setReceivedQty] = useState('');
    const [Location, setLocation] = useState('');
    const [ItemUnit, setItemUnit] = useState('');
    const [Status, setStatus] = useState('');
    const [Remark, setRemark] = useState('');
    const [isRecordInserted, setRecordInserted] = useState(false);
  
    // Event handler for form submission
    const handleSubmit = (e) => {
      e.preventDefault(); 
      console.log('GRCN Id:', GRCNId);
      console.log('PO No:', PONo);
      console.log('Received_Date:', ReceivedDate);
      console.log('Supplier Id:', SupplierId);
      console.log('Supplier Name:', SupplierName);
      console.log('Item Id:', ItemId);
      console.log('Item Name:', ItemName);
      console.log('Category:', Category);
      console.log('Expiry Date:', ExpiryDate);
      console.log('Batch No:', BatchNo);
      console.log('Part No:', PartNo);
      console.log('Ordered Qty:', OrderedQty);
      console.log('Received Qty:', ReceivedQty);
      console.log('Location:', Location);
      console.log('Item Unit:', ItemUnit);
      console.log('Status:', Status);
      console.log('Remark:', Remark);

      const formData = {
        "PONo":PONo,
        "supplierId":SupplierId,
        "supplierName":SupplierName,
        "receivedDate":ReceivedDate,
        "itemId":ItemId,
        "itemName":ItemName,
        "category":Category,
        "batchNo":BatchNo,
        "partNo":PartNo,
        "receivedQty":ReceivedQty,
        "orderedQty":OrderedQty,
        "location":Location,
        "itemUnit":ItemUnit,
        "expiryDate":ExpiryDate,
        "status":Status,
        "remark":Remark,
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
                        <button type="submit" className='button-solid-color'><div className='button-solid:hover'>
                        Record</div></button>
                        <button type="clear" className='button-with-outline'><div className='button-with-outline:hover'>
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
