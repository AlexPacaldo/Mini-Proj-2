import React, { useEffect, useState } from "react";
import '../assets/postAjob.css'
import JobRecord from '../JSON/companyRecord';


let retrieveJobRecord;
retrieveJobRecord = localStorage.getItem('JobRecord')? JSON.parse(localStorage.getItem('JobRecord')):retrieveJobRecord = JobRecord;

function PostAJob() {
    const [errors, setErrors] = useState({});
    const [jobs, setJobs] = useState(retrieveJobRecord);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formJob, setFormJob] = useState({
       position: "",
       jobTitle: "", 
       company: "", 
       skills: "", 
       startSalary: 0, 
       endSalary: 0, 
       email: ""
      });

  
    const handleSubmit = (e) => {
      console.log("saving...", formJob);
      let newJob = {
        email:"emal@mail.m",
        company:formJob.company,
        job:formJob.jobTitle,
        skills:[formJob.skills],
        salStart:parseInt(formJob.startSalary),
        salEnd:parseInt(formJob.endSalary),
        position:formJob.position
      }
      console.log(newJob);
      setJobs([...jobs,newJob])
      setIsSuccess(true);
      alert("Registered Successfully!")
      window.location.reload(true)

      
      
    };
    useEffect(() => {
      localStorage.setItem('JobRecord',JSON.stringify(jobs));
    }, [jobs]);

    const checkValidEmail = (email) => {
        const regRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!regRegex.test(email)){
            return `Invalid email format`;
        } 
    }


    const validate = (e) => {
      setErrors({
        jobTitleError:
          formJob.jobTitle === ""
            ? "Job Title is required."
            : "",

        companyError: 
            formJob.company === "" 
            ? "Company is required." 
            : "",

        skillsError: 
            formJob.skills === "" 
            ? "At least one skill is needed." 
            : "",

        positionError: 
            formJob.position < 1
            ? "At least one position is needed." 
            : "",

        emailError:
            formJob.email !== ""
            ? checkValidEmail(formJob.email)
            : "",
            
      });
    };
  
   
  
    useEffect(() => {
      if (errors.jobTitleError === "" && errors.companyError === "" && errors.skillsError === "" && errors.positionError === "")
        handleSubmit();
        // eslint-disable-next-line
    }, [errors]);
  
    const handleChange = (e) => {
      setFormJob({ ...formJob, [e.target.name]: e.target.value });
    };
  return (
    <div className="d-flex justify-content-center align-items-center maindiv py-4 px-3 py-md-5">
      <div className="container-fluid registForm p-4">
         <h1 className="display-4"><b>Post a Job</b></h1>
        <br></br>
        <label htmlFor= "jobTitle"><h4>Job Title</h4></label>
        <input
          name="jobTitle"
          type="text"
          className="form-control"
          onChange={handleChange}
          autoComplete="off"
        />
        <small className="errorMsg">{errors.jobTitleError}</small>
        <br></br><br></br>

        {/* Company */}
        <label htmlFor= "company"><h4>Company</h4></label>
        <input
          name="company"
          type="text"
          className="form-control"
          onChange={handleChange}
          autoComplete="off"
        />
        <small className="errorMsg">{errors.companyError}</small>
        <br></br><br></br>

        {/* Skills */}
        <label htmlFor= "skills"><h4>Skills</h4></label>
        <input
          name="skills"
          type="text"
          className="form-control"
          onChange={handleChange}
          autoComplete="off"
        />
        <small className="errorMsg">{errors.skillsError}</small>
        <br></br><br></br>

        <label htmlFor= "position"><h4>Number of Positions Available</h4></label>
        <input
          name="position"
          type="number"
          className="form-control"
          placeholder="Input number here"
          onChange={handleChange}
          autoComplete="off"
        />
        <small className="errorMsg">{errors.positionError}</small>

        <br></br><br></br>

        <label htmlFor= "position"><h4>Start Salary</h4></label>
        <input
          name="startSalary"
          type="number"
          className="form-control"
          placeholder="$"
          onChange={handleChange}
          autoComplete="off"
        />
        
        <br></br><br></br>
        <label htmlFor= "position" className="labelOptional"><h4>End Salary</h4></label>
        <input
          name="endSalary"
          type="number"
          className="form-control"
          placeholder="$"
          onChange={handleChange}
          autoComplete="off"
        />
    
        <br></br><br></br>
        {isSuccess && <p className="successMsg"> Job Posted!</p>}
        <div className="text-center">
          <button onClick={validate} className="btn cardButtonLeft">Post Job</button>
        </div>
    </div>
    </div>
  )
}

export default PostAJob