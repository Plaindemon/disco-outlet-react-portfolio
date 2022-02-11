import React, { useState } from 'react';
import coverImage from "../../assets/images/ben.jpg";
import { Button, Modal } from 'react-bootstrap';




function About() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <h1>Click About me</h1>
        <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>
          <h1 id="about">Who am I?</h1>
          <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
          <p> Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Nunc mattis enim ut tellus elementum sagittis vitae. Amet purus gravida quis blandit turpis. A lacus vestibulum sed arcu non. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Platea dictumst vestibulum rhoncus est. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Sapien et ligula ullamcorper malesuada proin libero. Aliquam ut porttitor leo a diam sollicitudin tempor id. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Tincidunt lobortis feugiat vivamus at augue eget arcu.</p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default About;