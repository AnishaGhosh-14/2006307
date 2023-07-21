import React, { useState } from 'react';
import axios from 'axios'
import SecondForm from './SecondForm';

const Input = () => {
    const [showData,setshowdata]=useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    ownerName: '',
    rollNo: '',
    ownerEmail: '',
    accessCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const SubmitChange=()=>{
    setshowdata(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://20.244.56.144/train/register', formData);
  
      
      const { clientSecret, companyName, ownerName, ownerEmail, rollNo } = response.data;
  
      console.log("Client Secret:", clientSecret);
      console.log("Company Name:", companyName);
      console.log("Owner Name:", ownerName);
      console.log("Owner Email:", ownerEmail);
      console.log("Roll No:", rollNo);
  
    } catch (err) {
      if (err.response) {
        console.log("Error Status:", err.response.status);
        console.log("Error Data:", err.response.data);
      } else {
        console.log("Error:", err.message);
      }
    }
  
    //Reset the form after submission
    setFormData({
      companyName: '',
      ownerName: '',
      rollNo: '',
      ownerEmail: '',
      accessCode: '',
    });
    
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="ownerName">Owner Name:</label>
        <input
          type="text"
          id="ownerName"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="rollNo">Roll No:</label>
        <input
          type="text"
          id="rollNo"
          name="rollNo"
          value={formData.rollNo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="ownerEmail">Owner Email:</label>
        <input
          type="email"
          id="ownerEmail"
          name="ownerEmail"
          value={formData.ownerEmail}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="accessCode">Access Code:</label>
        <input
          type="text"
          id="accessCode"
          name="accessCode"
          value={formData.accessCode}
          onChange={handleChange}
          required
        />
      </div>
      <button onClick={SubmitChange} type="submit">Submit</button>
    </form>
    {showData && (
  <SecondForm
    formData={formData} // Pass the formData object as props
  />
)}
      </>
  );
};

export default Input;
