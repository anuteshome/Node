import React, { useState } from 'react';
import axios from 'axios';

function Creact() {
  const [values, setValue] = useState({
    name: '',
    age: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/insert', values)
      .then((response) => {
        console.log('Data inserted successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error inserting data:', error);
      });
  };

  return (
    <div>
        <h1>Student</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" name="name" onChange={handleChange} />
        </div>
        <br />
        <div>
          <label htmlFor="age">Age:</label>
          <input id="age" type="number" name="age" onChange={handleChange} />
        </div>
        <br />
        <div>
          <label htmlFor="gender">Gender:</label>
          <input id="gender" type="text" name="gender" onChange={handleChange} />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Creact;
