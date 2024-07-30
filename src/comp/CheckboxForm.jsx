import React, { useState } from 'react';

const CheckboxForm = () => {
  const [formData, setFormData] = useState({
    termsAccepted: false
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      setError('You must accept the terms and conditions');
      return;
    }
    setSubmittedData(formData);
    setFormData({ termsAccepted: false });
    setError('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            I accept the terms and conditions
          </label>
          {error && <p className="error">{error}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h3>Form Submission</h3>
          <p>Terms Accepted: {submittedData.termsAccepted ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
};

export default CheckboxForm;
