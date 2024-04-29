import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFormData } from '../redux/actions/formActions';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    postalCode: '',
    phoneNumber: '',
    highestEducation: '',
    passingYear: '2020',
  });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
    console.log(formData);
    alert(JSON.stringify(formData));

    e.preventDefault();
    if (formIsValid()) {
      dispatch(addFormData(formData));
      
    }
  };

  const formIsValid = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = 'Full Name must contain only letters and spaces';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    } else if (!/^[a-zA-Z0-9\s,-]+$/.test(formData.address.trim())) {
      newErrors.address = 'Address must contain only letters, numbers, spaces, commas, and hyphens';
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal Code is required';
    } else if (!/^[a-zA-Z0-9]+$/.test(formData.postalCode.trim())) {
      newErrors.postalCode = 'Postal Code must contain only letters and numbers';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^[0-9]+$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Phone Number must contain only numbers';
    }

    if (!formData.highestEducation.trim()) {
      newErrors.highestEducation = 'Highest Education is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.highestEducation.trim())) {
      newErrors.highestEducation = 'Highest Education must contain only letters and spaces';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <div className="error">{errors.fullName}</div>}
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <div className="error">{errors.address}</div>}
        </label>
        <br />
        <label>
          Postal Code:
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
          {errors.postalCode && <div className="error">{errors.postalCode}</div>}
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
        </label>
        <br />
        <label>
          Highest Education:
          <input
            type="text"
            name="highestEducation"
            value={formData.highestEducation}
            onChange={handleChange}
          />
          {errors.highestEducation && (
            <div className="error">{errors.highestEducation}</div>
          )}
        </label>
        <br />
        <label>
          Passing Year:
          <select name="passingYear" value={formData.passingYear} onChange={handleChange}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
