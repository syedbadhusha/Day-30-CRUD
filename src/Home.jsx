import React from 'react'
import Card from './Card'
import { GrAdd } from "react-icons/gr"; 
import { Link } from 'react-router-dom';


function Home({data,setdata}) {
  return (
    <>
    <div className="container">
    <h3 className="text-center">USERS LIST</h3>
    <Link to={'UserAdd'} className='iconalign d-flex justify-content-end'><GrAdd title = 'ADD' className='iconaddm'/></Link>
      <div className="row">
      {
        data.length!==0?
        data.map((user)=> {
          return (
          <Card key={user.id} user={user} data={data} setdata={setdata}/>
          )
        }):<h3 className='text-center text-danger'>Users Not Available Create User</h3>
      }
      </div>
    </div>
  </>

  )
}

export default Home