import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function UserEdit({ setdata }) {
  const { id } = useParams();
  const [selectedData, setSelectedData] = useState({
    id: id,
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
    setSelectedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const updateAddress = (e) => {
    const { name, value } = e.target;
    setSelectedData((prevData) => ({ ...prevData,address:{...prevData.address,[name]: value }}));
  };

  const updateGeo = (e) => {
    const { name, value } = e.target;
    setSelectedData((prevData) => ({ ...prevData,address:{...prevData.address,geo:{...prevData.address.geo,[name]: value }}}));
  };

  const updateCompany = (e) => {
    const { name, value } = e.target;
    setSelectedData((prevData) => ({ ...prevData,company:{...prevData.company,[name]: value }}));
  };

  const navigate = useNavigate();
  useEffect(() => {
    async function getdata() {
      const response = await axios.get(
        `https://6607c42aa2a5dd477b1364ad.mockapi.io/users/${id}`
      );
      const axiosdata = response.data;
      setSelectedData(axiosdata);
    }
    getdata();
  }, []);

  async function submitAll(e) {
    e.preventDefault();
    await axios.put(
      "https://6607c42aa2a5dd477b1364ad.mockapi.io/users/" + id,
      selectedData
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
        onSubmit={(e) => submitAll(e)}
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
              value={selectedData.name}
              onChange={updateParent}            />
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
              value={selectedData.username}
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
              placeholder="ENTER EMAIL"
              name="email"
              value={selectedData.email}
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
              id="streat"
              placeholder="ENTER STREET"
              name="street"
              value={selectedData.address.street}
              onChange={updateAddress}            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="suite">
              SUITE
            </label>
            <input
              className="formInput"
              type="text"
              id="suite"
              placeholder="ENTER SUITE"
              name="suite"
              value={selectedData.address.suite}
              onChange={updateAddress}            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="city">
              CITY
            </label>
            <input
              className="formInput"
              type="text"
              id="city"
              placeholder="ENTER CITY"
              name="city"
              value={selectedData.address.city}
              onChange={updateAddress}            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="zipcode">
              ZIPCODE
            </label>
            <input
              className="formInput"
              type="text"
              id="zipcode"
              placeholder="ENTER zipcode"
              name="zipcode"
              value={selectedData.address.zipcode}
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
              placeholder="ENTER LAT"
              name="lat"
              value={selectedData.address.geo.lat}
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
              placeholder="ENTER LNG"
              name="lng"
              value={selectedData.address.geo.lng}
              onChange={updateGeo}
                            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="phone">
              PHONE
            </label>
            <input
              className="formInput"
              type="text"
              id="phone"
              placeholder="ENTER PHONE"
              name="phone"
              value={selectedData.phone}
              onChange={updateParent}
            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="website">
              WEBSITE
            </label>
            <input
              className="formInput"
              type="text"
              id="website"
              placeholder="ENTER WEBSITE"
              name="website"
              value={selectedData.website}
              onChange={updateParent}
            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="cmpname">
              COMPANY NAME
            </label>
            <input
              className="formInput"
              type="text"
              id="cmpname"
              placeholder="ENTER COMPANY NAME"
              name="name"
              value={selectedData.company.name}
              onChange={updateCompany}            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="catchPhrase">
              CATCHPHRASE
            </label>
            <input
              className="formInput"
              type="text"
              id="catchPhrase"
              placeholder="ENTER CATCHPHRASE"
              name="catchPhrase"
              value={selectedData.company.catchPhrase}
              onChange={updateCompany}
            />
          </li>
          <li className="line">
            <label className="formLable" htmlFor="bs">
              BS
            </label>
            <input
              className="formInput"
              type="text"
              id="bs"
              placeholder="ENTER BS"
              name="company.bs"
              value={selectedData.company.bs}
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

export default UserEdit;
