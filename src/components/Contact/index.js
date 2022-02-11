import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <Form className="contact">
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="name">Name:</Form.Label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email address:</Form.Label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="message">Message:</Form.Label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </Form.Group>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button data-testid="button" type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default ContactForm;
