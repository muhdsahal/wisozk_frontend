import  React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import UserNavbar from './components/Navbar'
import Banner from './components/Banner'
import Vision from './components/Vision'
import Mision from './components/Mission'
import Mission from './components/Mission'
import Footer from './components/Footer'
import Achievements from './components/Achievements'
// import Test from './test'
import WorkDone from './components/WorkDone'
import Momentum from './components/Momentum'

function App() {
  const [data,setData] = useState({})

  useEffect(() => {
     axios.get('http://127.0.0.1:8000/api/company/')
    .then((response) => {
      setData(response.data[0])
    })
    .catch((error) => {
      console.error(error,"error fetching data");
    })
  
    
  }, [])
  console.log(data,'get dataaaa');
  return (
    <>
    <UserNavbar />
    <Banner data={data} />
    <Vision data={data} />
    <Mission data={data} />
    <Achievements data={data} />
    <Momentum data={data}/>
    <WorkDone data={data}/>
    <Footer data={data} />
    {/* <Test/> */}

    </>
  
  )
}

export default App
