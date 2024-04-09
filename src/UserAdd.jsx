import React from "react";
import "./App";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function UserAdd({ setdata }) {
  const navigate = useNavigate();
  const [newData, setNewData] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });
  const updateParent = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({ ...prevData, [name]: value }));
  };

  const updateAddress = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({ ...prevData,address:{...prevData.address,[name]: value }}));
  };

  const updateGeo = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({ ...prevData,address:{...prevData.address,geo:{...prevData.address.geo,[name]: value }}}));
  };

  const updateCompany = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({ ...prevData,company:{...prevData.company,[name]: value }}));
  };

  async function submitAll(e) {
    e.preventDefault();
    await axios.post(
      "https://6607c42aa2a5dd477b1364ad.mockapi.io/users",
      newData
    );
    const response = await axios.get(
      "https://6607c42aa2a5dd477b1364ad.mockapi.io/users"
    );
    const axiosdata = response.data;
    setdata(axiosdata);
    navigate("/");
  }
  return (
    <>
      <form
        className="container"
        onSubmit={submitAll}
        style={{ backgroundColor: "salmon" }}
      >
        <h5 className="text-center">USED DETAILS TO ADD</h5>
        <ol>
          <li className="line">
            <label className="formLable" htmlFor="name">
              NAME
            </label>
            <input
              className="formInput"
              type="text"
              id="name"
              name="name"
              placeholder="ENTER NAME"
              value={newData.name}
             onChange={updateParent}
            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="userName">
              USERNAME
            </label>
            <input
              className="formInput"
              type="text"
              id="userName"
              name="username"
              placeholder="ENTER USERNAME"
              value={newData.username}
              onChange={updateParent}
            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="email">
              EMAIL
            </label>
            <input
              className="formInput"
              type="text"
              id="email"
              name="email"
              placeholder="ENTER EMAIL"
              value={newData.email}
              onChange={updateParent}
            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="street">
              STREET
            </label>
            <input
              className="formInput"
              type="text"
              id="street"
              name="street"
              value={newData.address.street}
              placeholder="ENTER STREET"
              onChange={updateAddress}
            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="suite">
              SUITE
            </label>
            <input
              className="formInput"
              type="text"
              id="suite"
              name="suite"
              value={newData.address.suite}
              placeholder="ENTER SUITE"
              onChange={updateAddress}
            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="city">
              CITY
            </label>
            <input
              className="formInput"
              type="text"
              id="city"
              name="city"
              placeholder="ENTER CITY"
              value={newData.address.city}
              onChange={updateAddress}
            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="zipcode">
              ZIPCODE
            </label>
            <input
              className="formInput"
              type="text"
              id="zipcode"
              name="zipcode"
              placeholder="ENTER zipcode"
              value={newData.address.zipcode}
              onChange={updateAddress}
            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="lat">
              LAT
            </label>
            <input
              className="formInput"
              type="text"
              id="lat"
              name="lat"
              placeholder="ENTER LAT"
              value={newData.address.geo.lat}
              onChange={updateGeo}
            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="lng">
              LNG
            </label>
            <input
              className="formInput"
              type="text"
              id="lng"
              name="lng"
              placeholder="ENTER LNG"
              value={newData.address.geo.lng}
              onChange={updateGeo}            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="phone">
              PHONE
            </label>
            <input
              className="formInput"
              type="text"
              id="phone"
              name="phone"
              placeholder="ENTER PHONE"
              value={newData.phone}
              onChange={updateParent}            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="website">
              WEBSITE
            </label>
            <input
              className="formInput"
              type="text"
              id="website"
              name="website"
              placeholder="ENTER WEBSITE"
              value={newData.website}
              onChange={updateParent}            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="cmpname">
              COMPANY NAME
            </label>
            <input
              className="formInput"
              type="text"
              id="cmpName"
              name="name"
              placeholder="ENTER COMPANY NAME"
              value={newData.company.name}
              onChange={updateCompany}
                        />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="catchPhrase">
              CATCHPHRASE
            </label>
            <input
              className="formInput"
              type="text"
              id="catchPhrase"
              name="catchPhrase"
              placeholder="ENTER CATCHPHRASE"
              value={newData.company.catchPhrase}
              onChange={updateCompany}            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="bs">
              BS
            </label>
            <input
              className="formInput"
              type="text"
              id="bs"
              name="bs"
              placeholder="ENTER BS"
              value={newData.company.bs}
              onChange={updateCompany}
            />
          </li>
        </ol>
        <div className="d-flex justify-content-start p-5">
          <div>
            <Link to="/" type="button" className="submitbtn text-center">
              BACK
            </Link>
          </div>
          <div>
            <button type="submit" className="submitbtn text-center">
              SAVE
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default UserAdd;
