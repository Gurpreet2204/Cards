/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './Card.css';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineMail, MdOutlineLocalPhone, MdOutlineEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';

const Card = ({ allData, onDelete }) => {
  const GoToAddress = (lat, lng) => {
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {allData.map((data) => (
        <div key={data.id} className="parent-card">
          <div className="card">
            <div className="buttons-container">
              <RiDeleteBinLine className="delete-button" onClick={()=> onDelete(data.id)} />
              <Link to={`/edit/${data.id}`}>
                <MdOutlineEdit className="edit-button" />
              </Link>
            </div>
            <div className="card-content">
              <div className="card-left">
                <div className="avatar-container">
                  <img src={data.photo} className="avatar" alt="Avatar" />
                  <div className={`status ${data.isActive ? 'active' : 'inactive'}`}></div>
                </div>
                <div className="card-info">
                  <h2 className="name">{data.name}</h2>
                  <p
                    className="address"
                    onClick={() => GoToAddress(data.lat, data.lng)}
                    style={{ cursor: 'pointer' }}
                  >
                    <IoLocationOutline className="icon" /> {data.address}
                  </p>
                  <p className="email">
                    <MdOutlineMail className="icon" /> {data.email}
                  </p>
                  <p className="phone">
                    <MdOutlineLocalPhone className="icon" /> {data.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;