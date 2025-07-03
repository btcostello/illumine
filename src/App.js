import './App.css';
import { Amplify } from 'aws-amplify'

import React from 'react'
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import { Footer } from './components/footer';
import Home from './pages/index';
import About from './pages/about';
import Why from './pages/why';
import Pricing from './pages/pricing';
import Services from './pages/services';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Calculator from './pages/calculator';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Tutorial from './pages/tutorial';
import DesignTest from './pages/DesignTest'


Amplify.configure(awsconfig)

const App = () => {

  return (
    <>
    <Router>
    <Navbar />
    <div className="BTCContainer">
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/why' element={<Why/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/calculator' element={<Calculator/>} />
        <Route path='/tutorial' element={<Tutorial/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/DesignTest' element={<DesignTest/>} />
    </Routes>
    </div>
    </Router>

    <Footer/>
    </>
  )
}

export default App;
