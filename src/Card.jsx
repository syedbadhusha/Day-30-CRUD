import axios from "axios";
import React from "react";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
// import { UserDetailsSet } from "./Context";
function Card({user,setdata}) {
    async function deleteUser(userId){
        await axios.delete(`https://6607c42aa2a5dd477b1364ad.mockapi.io/users/${userId}`)
        const response = await axios.get('https://6607c42aa2a5dd477b1364ad.mockapi.io/users');
        const axiosdata = response.data;
        setdata(axiosdata);      
    }
  return (
    <div className="col-md-12">
      <div className="card text-white bg-dark mb-3">
        <h5 className="card-header">{user.name}</h5>
        <div className="card-body">
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul>
                            <li>{`USERNAME  :   ${user.username}`}</li>
                            <li>{`EMAIL  :   ${user.email}`}</li>
                            <li>{`PHONE  :   ${user.phone}`}</li>
                            <li>{`WEBSITE  :   ${user.website}`}</li>
                            <li>{`COMPANY  :   ${user.company.name}`}</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <h6>USER ADDRESS</h6>
                        <ul>
                            <li>{`STREET  :   ${user.address.street}`}</li>
                            <li>{`SUITE  :   ${user.address.suite}`}</li>
                            <li>{`CITY  :   ${user.address.city}`}</li>
                            <li>{`ZIPCODE  :   ${user.address.zipcode}`}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="iconalign">
                <Link to={ `/useredit/${user.id}`} ><GrEdit title = 'EDIT' className="iconEdit"/></Link>
                <RiDeleteBin5Line title = 'DELETE' className="iconEdit" onClick={()=>deleteUser(user.id)}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
