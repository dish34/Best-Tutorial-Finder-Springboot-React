import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function SubmitTutorial() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Tutorial Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.Paid">
              <Form.Label>Paid</Form.Label>
              <Form.Check
                type="checkbox"
                placeholder=""
                autoFocus
              />
              
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Provider</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="..."
                    autoFocus
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="https://"
                autoFocus
              />
            </Form.Group>
            </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add Tutorial</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default SubmitTutorial;
