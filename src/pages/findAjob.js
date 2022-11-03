import React, { useState,useEffect} from 'react';
import JobRecord from '../JSON/companyRecord';
import {useNavigate} from 'react-router-dom';


let retrieveJobRecord;
retrieveJobRecord = localStorage.getItem('JobRecord')? JSON.parse(localStorage.getItem('JobRecord')):retrieveJobRecord = JobRecord;
let isAdmin=localStorage.getItem('isAdmin')?JSON.parse(localStorage.getItem('isAdmin')):false;

const FindAjob = () => {
  console.log(retrieveJobRecord)
  
  const [jobs,setJobs]=useState(retrieveJobRecord);
  const [loadMore , setLoadMore] = useState(jobs.length-8);
  const navigate = useNavigate();


  const handleOnClick = (job) => {navigate('/CompanyInfo',{state:job})};

  const handleDelete=(index)=>{
    let job = jobs;

    let message = window.confirm('Are You Sure You Want To Delete This Data?') ;

    if (message) {
      job = job.reverse().filter((list,i)=>i !== index);
    }
    setJobs(job.reverse())
  }
  useEffect(()=>{
    localStorage.setItem('JobRecord',JSON.stringify(jobs));
},[jobs])
 
  return (
    <div className='py-4 py-lg-5'>
      <div className='row row-cols-1 row-cols-lg-2 g-5 mx-1 mx-lg-5'>
            {
              jobs.slice(loadMore).reverse().map((job,index)=>{
                return (
                <div className='col'>
                  <div className='card cardStyle'>
                    <div className='card-header cardHeaderStyle'><h4>{job.job}</h4></div>
                    <div className='card-body bg-light'>
                      <span><b><i class="bi bi-building"></i> {job.company}</b></span><br></br><br></br>
                      <span className='position' ><i class="bi bi-people-fill"></i> {job.position} Position</span><br></br><br></br>
                      <span className='sal'>
                        <b>
                          <i class="bi bi-coin"></i>
                           {" " + (job.salStart) + " - " + (job.salEnd)}
                        </b>
                      </span><br></br><br></br>
                      <span className='intro'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem culpa doloribus impedit iusto! Iure, vitae illum quisquam magni numquam similique, autem ducimus veniam, nobis eligendi quasi corporis dolorem doloribus non!</span><br></br><br></br>
                      <span className='skills'><i class="bi bi-pc-display-horizontal"></i> <b>Skills Required:</b> {job.skills}</span>
                    </div>
                    <div className='card-footer text-center'>
                      <button className='btn cardButtonLeft mx-2 w-25' onClick={()=>handleOnClick(job)}>View</button>
                      {isAdmin?<button className='btn cardButtonRight w-25' onClick={()=>handleDelete(index)}>Delete this Data</button>:null}
                    </div>
                  </div>
                </div>
              )
              })
            }
      </div>
      <br></br><br></br>
      <div className='text-center'>
      <button className='btn cardButtonLeft w-25' disabled={loadMore<=0} onClick={()=>setLoadMore(loadMore-6)}>Load More</button>
      </div>
    </div>  
   
  )
}

export default FindAjob