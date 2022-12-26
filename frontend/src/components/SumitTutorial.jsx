import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function SubmitTutorial({tutorialId}) {
  const [show, setShow] = useState(false);
  const [isPaid, setPaid] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePaid = () => setPaid(!isPaid);
  

  const handleSubmit = (event) => {

    event.preventDefault();
    const formData = new FormData(event.target);

    let formdata = {};
    for (const [key, value] of formData) {
        console.log("KEY and Value:", key, value);
        formdata[key] = value;
    }

    fetch(`http://localhost:8080/tutorials/${tutorialId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(formdata),
    })
    .then((response) => {
      if(response.status === 200) {
        handleClose();
        window.location.reload();
      }
      console.log(response);
    });
    handleClose();

  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Tutorial
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit A Tutorial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit} id="myform">
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Tutorial Name"
                name="name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formPaid">
              <Form.Label>Paid</Form.Label>
              <Form.Check
                type="checkbox"
                placeholder=""
                autoFocus
                name="paid"
                value={isPaid}
                onChange={handlePaid}
              />
              
              </Form.Group>
              <Form.Group className="mb-3" controlId="formProvider">
                <Form.Label>Provider</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="..."
                    autoFocus
                    name="provider"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formURL">
              <Form.Label>URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="https://"
                autoFocus
                name="url"
              />
            </Form.Group>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit" form="myform">Add Tutorial</Button>
            </Form>
        </Modal.Body>
        
          
      </Modal>
    </>
  );
}


export default SubmitTutorial;
