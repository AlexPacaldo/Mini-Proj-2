 
import {useNavigate} from 'react-router-dom';
import male from '../assets/m.png'
import female from '../assets/f.jpg'
import '../assets/profile.css'


let retrieveJobRecord;
let isAdmin=localStorage.getItem('isAdmin')?JSON.parse(localStorage.getItem('isAdmin')):false;
let isLogin = localStorage.getItem('isActive')?JSON.parse(localStorage.getItem('isActive')):false;


let accounts =localStorage.getItem('ApplicantRecord')?JSON.parse(localStorage.getItem('ApplicantRecord')):[];
let loginEmail = localStorage.getItem('LoginEmail')?JSON.parse(localStorage.getItem('LoginEmail')):[];
let acctLogin = [{fname:"Admin"}];

if(loginEmail!=="admin"){
  acctLogin = accounts.filter(account=>account.email === loginEmail);
}

const Profile = () => {
  console.log(retrieveJobRecord)
  
  const navigate = useNavigate();

  const handlePostAJob = () =>navigate('/PostAJob');
  const handleEditProfile =() => navigate('/EditProfile');
 
  return (
    <div className='d-flex justify-content-center maindiv py-4 px-4 py-md-5'>
      <div className='profMainDiv py-4 d-flex flex-column justify-content-center'>
            {
            isLogin?
            <div>
              <div className='text-center profPic'>
                {(acctLogin[0].gender==="F")? <img src={female} alt=""/>:<img src={male} alt=""/>}
              </div>
              <div className='text-center'>
                <h1>{acctLogin[0].fname} {acctLogin[0].lname}</h1>
                <p>{acctLogin[0].job}</p>
              </div>
              <br></br><br></br>
              <div className='mx-4'>
                <h3>Email</h3>
                <span>{acctLogin[0].email}</span>
              </div>
              <br></br>
              <div className='mx-4'>
                <h3>Gender</h3>
                <span>{acctLogin[0].gender}</span>
              </div>
              <br></br>
              <div className='mx-4'>
                <h3>Portfolio Link</h3>
                <span>{acctLogin[0].link}</span>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <div className='text-center'>
                <button className='btn cardButtonLeft mx-2' onClick={()=>handlePostAJob()}>Post A job</button>
                {!isAdmin?<button className='btn cardButtonRight' onClick={()=>handleEditProfile()}>Edit Profile</button>:null}
              </div>
            </div>
            :null
            }
      </div>    
    </div>
   
  )
}

export default Profile