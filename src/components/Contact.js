import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./contact.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [inputvalue, setInputvalue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: ""
  });

  const getvalue = (e) => {
    const { name, value } = e.target;
    setInputvalue(() => {
      return {
        ...inputvalue,
        [name]: value
      }
    })

  }

  const sentUserdata = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, mobile, message } = inputvalue;
    if (firstName === "") {
      toast.error("firstName is require")
    } else if (lastName === "") {
      toast.error("lastName is require")
    } else if (email === "") {
      toast.error("email is require")
    } else if (!email.includes("@")) {
      toast.error("invalid email")
    } else if (mobile === "") {
      toast.error("mobile is require")
    } else {
      const res = await fetch("http://localhost:6002/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName, lastName, email, mobile, message
        })
      });
      const data = await res.json();

      if (data.status === 201) {
        toast.success("Your Response Submitted");
        setInputvalue({
          ...inputvalue,
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          message: ""
        })
      }
    }
  }

  return (
    <>
      <div className="container mb-3 contact">
        <h2 className='text-center'>ContactUS</h2>
        <div className="container mt-2">
          <Form className='row mt-2'>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>firstName</Form.Label>
              <Form.Control type="text" name='firstName' value={inputvalue.firstName} onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6"  controlId="formBasicEmail">
              <Form.Label>lastName</Form.Label>
              <Form.Control type="text" name='lastName' value={inputvalue.lastName}  onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name='email' value={inputvalue.email}  onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" name='mobile' value={inputvalue.mobile}  onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} onChange={getvalue} value={inputvalue.message}  name="message" />
            </Form.Group>
            <div className='d-flex justify-content-center'>
              <Button variant="primary" className='col-lg-6' type="submit" onClick={sentUserdata}>
                Submit
              </Button>
            </div>

          </Form>
          <ToastContainer />
        </div>
      </div>
    </>
  )
}

export default Contact