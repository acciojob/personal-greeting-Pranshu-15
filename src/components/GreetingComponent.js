import React, { useState } from 'react';

const GreetingComponent = () => {
  // State to store the user's name
  const [name, setName] = useState('');
  // State to track whether the user has submitted the form
  const [submitted, setSubmitted] = useState(false);

  // Event handler for input change
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Personalized Greeting</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <p>Hello, {name}! Welcome to our website.</p>
      )}
    </div>
  );
};

export default GreetingComponent;
