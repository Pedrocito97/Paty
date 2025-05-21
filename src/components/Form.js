import React from 'react';
import './Form.css';

function Form() {
  return (
    <form className="form-container">
      <input type="text" placeholder="Your name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
