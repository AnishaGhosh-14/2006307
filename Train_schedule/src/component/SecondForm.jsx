import React from 'react'

export default function SecondForm(props) {
  const { clientSecret, companyName, ownerName, ownerEmail, rollNo } = props.formData;
  return (
    <div>
      <div>
      <h2>Form Data:</h2>
      <p>Client Secret: {clientSecret}</p>
      <p>Company Name: {companyName}</p>
      <p>Owner Name: {ownerName}</p>
      <p>Owner Email: {ownerEmail}</p>
      <p>Roll No: {rollNo}</p>
    </div>
    </div>
  )
}
