import { useState ,useEffect} from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Display from './components/Display'
import Related from './components/Related'
import Signup from './components/Signup'
import Footer from './components/Footer'

function App() {
  const [data ,setdata] = useState([]);
  useEffect(() =>{
      fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(products => setdata(products.products));
    
  },[]);

  return (
    <>
      <Navbar />
      <div className='pl-[20px] pr-[20px] md:pl-[100px] md:pr-[100px]'>
        <Header />
        <Display data ={data}/>
        <Related data={data}/>
        <Signup />
        
      </div>
      <Footer />
      
    </>
  )
}

export default App
