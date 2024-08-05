/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditForm.css";
import Input from "../../components/Input/Input";
const EditForm = ({ updateCard, allData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    isActive: false,
    lat: "",
    lng: "",
    photo: "",
  });

  useEffect(() => {
    const card = allData.find((card) => card.id === parseInt(id));
    if (card) {
      setFormData(card);
    }
  }, [id, allData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof updateCard === "function") {
      updateCard(formData);
      navigate("/");
    } else {
      console.error("updateCard is not a function", updateCard);
    }
  };

  return (
    <div className="parent-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="header-container">
          <div className="header-content">
            <h1>Edit</h1>
            <p className="p-tag">Edit the information</p>
          </div>
          <div className="form-fields">
            <Input
              placeHolder={formData.name}
              type="text"
              name="name"
              onChange={handleChange}
            />

            <Input
              type="text"
              name="address"
              placeHolder={formData.address}
              onChange={handleChange}
            />

            <Input
              type="email"
              name="email"
              placeHolder={formData.email}
              onChange={handleChange}
            />

            <Input
              type="text"
              name="phone"
              placeHolder={formData.phone}
              onChange={handleChange}
            />
            <label className="img-parent">
              Upload image
              <input
                className="img-container"
                type="text"
                name="photo"
                placeholder={formData.photo}
                onChange={handleChange}
              />
            </label>
            <div className="toggle-container">
              <span className="toggle-label">
                Status
              </span>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  name="isActive"
                  checked={formData.isActive}
                  onChange={handleChange}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <button className="submit-button" type="submit">
              Update Card
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
