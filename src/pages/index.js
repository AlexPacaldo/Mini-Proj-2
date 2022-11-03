import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './home'
import AboutUs from './aboutUs'
import TalentPool from './talentPool'
import FindAjob from './findAjob'
import SignUp from './signUp'
import Login from './login'
import EditProfile from '../components/EditProfile'
import Profile from './profile'
import PostAJob from '../components/PostAJob'
import ApplicantProfile from '../components/ApplicantProfile'
import CompanyInfo from '../components/CompanyInfo'

const Index = () => {
  return (
    <Router>
      <Header/>
       <Routes>
            <Route exact path = "/" element={<Home/>}/>
            <Route exact path = "/talentPool" element={<TalentPool/>}/>
            <Route exact path = "/findAjob" element={<FindAjob/>}/>
            <Route exact path = "/aboutUs" element={<AboutUs/>}/>
            <Route exact path = "/login" element={<Login/>}/>
            <Route exact path = "/signUp" element={<SignUp/>}/>
            <Route exact path = "/EditProfile" element={<EditProfile/>}/>
            <Route exact path = "/profile" element={<Profile/>}/>
            <Route exact path = "/PostAJob" element={<PostAJob/>}/>
            <Route exact path = "/ApplicantProfile" element={<ApplicantProfile/>}/>
            <Route exact path = "/CompanyInfo" element={<CompanyInfo/>}/>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default Index
