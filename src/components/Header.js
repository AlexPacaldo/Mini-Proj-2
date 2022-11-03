import React, { useEffect, useState } from 'react';
import {Link,useNavigate} from "react-router-dom";
import styled from 'styled-components';
import '../assets/navFooter.css'
import web from '../assets/spider-web.png'


const NavList = styled.a`
  text-decoration: none;
  `;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 1rem;
  font-weight: 500;
  &:hover, &:focus {
    color: #88BDBC;
    font-weight: 800;
  }
  &:active{
    color: #88BDBC;
  }
`

let isLogin = localStorage.getItem('isActive')?JSON.parse(localStorage.getItem('isActive')):false;

let Header= () => {

  const [show,setShow]=useState(false)
  const [showBtn, setShowBtn] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    isLogin? setShowBtn(false):setShowBtn(true);
  },[showBtn]);

  const loginBtn = () => navigate('/login');
    const regBtn = () => {
        navigate('/signUp');
        setShowBtn(false);
    }

  const profileBtn =  () => {
      localStorage.setItem("isActive", JSON.stringify(false))
      localStorage.setItem("isAdmin", JSON.stringify(false))
      navigate('/login')
      window.location.reload(true);
  };

  const editProfileBtn = () => navigate('/profile')


  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark px-4 px-md-5">
              <button type="button" className="navbar-toggler" onClick={()=>setShow(!show)}>
                  {show ? <i class="bi bi-x-lg"></i> : <span className="navbar-toggler-icon"></span> }
              </button>
              <div class="navName d-flex">
                  <img src={web} alt='web' className='webIco'></img>
                  <h4><i>Araña</i></h4>
              </div>

              <div className="collapse navbar-collapse justify-content-center" >
                  <NavList>
                    <StyledLink to = '/'>Home</StyledLink>
                    <StyledLink to = '/talentPool'>Developers</StyledLink> 
                    <StyledLink to = '/findAjob'>Jobs</StyledLink>   
                    <StyledLink to = '/aboutUs'>About Us</StyledLink>                  
                  </NavList> 
              </div>
              <div class="navSocialMedia d-none d-lg-block">
                  {showBtn?<input className='btn btn-dark mx-2' type="button" value="Login" onClick={()=>loginBtn()}/>:null}
                  {showBtn?<input className='btn btn-primary'type="button" value="Sign Up" onClick={()=>regBtn()}/>:null}
                  {!showBtn?<input className='btn btn-dark mx-2'type="button" value="Profile" onClick={()=>editProfileBtn()}/>:null}
                  {!showBtn?<input className='btn btn-primary'type="button" value="Logout" onClick={()=>profileBtn()}/>:null}
              </div>
          </nav>
          <div className={show ? 'mainNavMob active': 'mainNavMob'}>
            {
              show?
              <div className='navMob py-5'>
                  <NavList className='d-flex flex-column align-items-center'>
                    <StyledLink to = '/' onClick={()=>setShow(false)}>Home</StyledLink>
                    <StyledLink to = '/talentPool' onClick={()=>setShow(false)}>Developers</StyledLink> 
                    <StyledLink to = '/findAjob' onClick={()=>setShow(false)}>Jobs</StyledLink>   
                    <StyledLink to = '/aboutUs' onClick={()=>setShow(false)}>About Us</StyledLink>                  
                  </NavList>
                  <br></br><br></br>
                  <div class="navSocialMedia text-center">
                      {showBtn?<input className='btn cardButtonLeft mx-2' type="button" value="Login" onClick={()=>{ loginBtn(); setShow(false) }}/>:null}
                      {showBtn?<input className='btn btn-primary'type="button" value="Sign Up" onClick={()=>{ regBtn(); setShow(false) }}/>:null}
                      {!showBtn?<input className='btn cardButtonLeft mx-2'type="button" value="Profile" onClick={()=>{ editProfileBtn(); setShow(false) }}/>:null}
                      {!showBtn?<input className='btn btn-primary'type="button" value="Logout" onClick={()=>{ profileBtn(); setShow(false) }}/>:null}
                  </div>
              </div>
              :null
            }
              </div>
     </>
  );
}
export default Header


