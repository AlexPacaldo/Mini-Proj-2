import React, { useState, useEffect } from 'react';
import applicantRecord from '../JSON/applicantRecord';
import { useNavigate } from 'react-router-dom';
import male from '../assets/m.png'
import female from '../assets/f.jpg'
import '../assets/talentPool.css'


let retrieveApplicantData;
retrieveApplicantData = localStorage.getItem('ApplicantRecord') ? JSON.parse(localStorage.getItem('ApplicantRecord')) : retrieveApplicantData = applicantRecord;


let retrieveUsers = localStorage.getItem('Users') ? JSON.parse(localStorage.getItem('Users')) : [];

let isAdmin = localStorage.getItem('isAdmin') ? JSON.parse(localStorage.getItem('isAdmin')) : false;
let isLogin = localStorage.getItem('isActive') ? JSON.parse(localStorage.getItem('isActive')) : false;

const TalentPool = () => {
  const [applicants, setApplicants] = useState(retrieveApplicantData);
  const [loadMore, setLoadMore] = useState(applicants.length - 6);

  const navigate = useNavigate();
  const handleBtn = (e) => { navigate('/ApplicantProfile', { state: e }) };
  const signinBtn = () => { navigate('/Login') };




  const handleDelete = (data, index) => {
    let applicant = applicants;
    let message = window.confirm('Are You Sure You Want To Delete This Data?');
    if (message) {

      console.log(data.email);
      applicant = applicant.reverse().filter((list, i) => i !== index);
      retrieveUsers = retrieveUsers.filter((list) => data.email !== list.email)
      console.log(retrieveUsers);


    }
    setApplicants(applicant.reverse())
  }

  useEffect(() => {
    localStorage.setItem('ApplicantRecord', JSON.stringify(applicants));
    localStorage.setItem('Users', JSON.stringify(retrieveUsers));
  }, [applicants])

  return (
    <div className='py-5 talentMain'>
      <div className='row g-5 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 mx-1 mx-md-5'>
        {
          applicants.slice(loadMore).reverse().map((applicant, index) => {
            return (
              <div className='col'>
                  <div className='card text-center cardStyle'>
                      <div className="card-header cardHeaderStyle"><h4>{applicant.fname} {applicant.lname}</h4></div>
                      {(applicant.gender === "F") ? <img src={female} alt="" /> : <img src={male} alt="" />}

                      <div className='card-body cardBodyStyle'>
                          <div className='title'>
                            <div className='info'>
                              <p className='exp'>{applicant.experience} with {applicant.yearsOfExp} yr(s) of experience</p>
                            </div>
                          </div>
                          <div className='otherInfo'>
                            <div className='skills'>
                              <span><b>Skills:</b> {applicant.skills.map(skill => skill + ", ")}</span><br></br>
                              <span><b>Work:</b> {(applicant.job) ? applicant.job : "none"}</span><br></br>
                              <span><b>School:</b> {applicant.school ? applicant.school : "none"}</span>
                            </div>
                          </div>
                      </div>

                      <div className='card-footer cardFooterStyle'>
                          <div className='buttons'>
                            {isLogin ? <button className='btn cardButtonLeft mx-2' onClick={() => { handleBtn(applicant) }}>See Profile</button> : null}
                            {!isLogin ? <button className='btn cardButtonLeft mx-2' onClick={() => signinBtn(applicant)}>Sign in to see profile</button> : null}
                            <a href={applicant.link} className="btn cardButtonRight mx-2 my-2 my-lg-1">Portfolio</a>
                            {isAdmin ? <button className="btn cardButtonRight my-2 my-lg-1" onClick={() => handleDelete(applicant, index)}>Delete This Data</button> : null}
                          </div>
                      </div>
                  </div>
              </div>
            )
          }

          )
        }
      </div>
      <br></br><br></br>
      <div className='text-center'>
        <button className="btn cardButtonLeft w-25" disabled={loadMore <= 0} onClick={() => setLoadMore(loadMore - 6)}>Load More <i class="fa-solid fa-arrow-down"></i></button>
      </div>
    </div>
  )
}

export default TalentPool