import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './home'
import AboutUs from './aboutUs'
import Developers from './developers'
import Jobs from './jobs'
import SignUp from './signUp'
import Login from './login'
import EditProfile from '../components/EditProfile'
import Profile from './profile'
import PostAJob from '../components/PostAJob'
import DeveloperProfile from '../components/DeveloperProfile'
import CompanyInfo from '../components/CompanyInfo'
import { HashRouter } from "react-router-dom"

const Index = () => {
  return (
    <HashRouter>
    <Router>
      <Header/>
       <Routes>
            <Route exact path = "/" element={<Home/>}/>
            <Route exact path = "/developers" element={<Developers/>}/>
            <Route exact path = "/jobs" element={<Jobs/>}/>
            <Route exact path = "/aboutUs" element={<AboutUs/>}/>
            <Route exact path = "/login" element={<Login/>}/>
            <Route exact path = "/signUp" element={<SignUp/>}/>
            <Route exact path = "/EditProfile" element={<EditProfile/>}/>
            <Route exact path = "/profile" element={<Profile/>}/>
            <Route exact path = "/PostAJob" element={<PostAJob/>}/>
            <Route exact path = "/DeveloperProfile" element={<DeveloperProfile/>}/>
            <Route exact path = "/CompanyInfo" element={<CompanyInfo/>}/>
        </Routes>
      <Footer/>
    </Router>
    </HashRouter>
  )
}

export default Index
