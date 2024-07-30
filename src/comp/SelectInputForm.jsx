import React, { useState } from 'react';

const SelectInputForm = () => {
  const [formData, setFormData] = useState({
    favoriteColor: ''
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ favoriteColor: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Favorite Color:
            <select
              name="favoriteColor"
              value={formData.favoriteColor}
              onChange={handleChange}
            >
              <option value="">Select a color</option>
              <option value="Red">Red</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h3>Selected Color</h3>
          <p>Favorite Color: {submittedData.favoriteColor}</p>
        </div>
      )}
    </div>
  );
};

export default SelectInputForm;
