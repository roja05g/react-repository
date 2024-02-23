import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Reactboot = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    carmodel:''
});
const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let getData=JSON.parse(localStorage.getItem("userData"));
    console.log(getData);
    console.log(userDetails);
    getData.push(userDetails);
    localStorage.setItem('userData', JSON.stringify(getData));
   setFormSubmitted(true);
  };

  return (
    <div className='container w-50 border p-5'>
    <Form>
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name='name' value={formSubmitted ? '': userDetails.name} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={formSubmitted ? '': userDetails.email} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Car Model</Form.Label>
        <Form.Control type="text" placeholder="car model"name='carmodel' value={formSubmitted ? '': userDetails.carmodel} onChange={handleInputChange}/>
      </Form.Group>
    </Form>
    <Button variant="primary" onClick={handleSubmit} >Submit</Button>{' '}
    <Button variant="primary" onClick={()=>{
        localStorage.clear()
        localStorage.setItem('userData','[]');
      }} >Reset</Button>{' '}
    </div>
  );
};

export default Reactboot;
