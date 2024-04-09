import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserAdd from './UserAdd';
import UserEdit from './UserEdit';

function App() {

  const [data,setdata] = useState([])
  useEffect(()=>{
    async function getdata(){
      const response = await axios.get('https://6607c42aa2a5dd477b1364ad.mockapi.io/users');
      const axiosdata = response.data;
      setdata(axiosdata);
    }
    getdata();
  },[]
    )
  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home data={data} setdata={setdata}/>}/>
            <Route path='/useradd' element={<UserAdd setdata={setdata}/>}/>
            <Route path='/useredit/:id' element={<UserEdit setdata={setdata}/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
