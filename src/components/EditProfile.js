import React, { useEffect, useState } from "react";


let accounts =localStorage.getItem('ApplicantRecord')?JSON.parse(localStorage.getItem('ApplicantRecord')):[];
let loginEmail = localStorage.getItem('LoginEmail')?JSON.parse(localStorage.getItem('LoginEmail')):[];
let acctLogin = [{fname:"Admin"}];

if(loginEmail!=="admin"){
  acctLogin = accounts.filter(account=>account.email === loginEmail);
}

function EditProfile() {

    function capitalized(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const [errors, setErrors] = useState({});
    const [formEdit, setFormEdit] = useState({ 
      fname:capitalized(acctLogin[0].fname), 
      lname:capitalized(acctLogin[0].lname),
       email:acctLogin[0].email,
       gender:capitalized(acctLogin[0].gender),
       link:acctLogin[0].link, 
       skill1:acctLogin[0].skills[0],
       skill2:acctLogin[0].skills[1],
       skill3:acctLogin[0].skills[2],
       skill4:acctLogin[0].skills[3],
       skill5:acctLogin[0].skills[4],
       skill6:acctLogin[0].skills[5], 
       yearsOfExp:acctLogin[0].yearsOfExp, 
       experience:acctLogin[0].experience, 
       job:acctLogin[0].job, 
       school:acctLogin[0].school
      });
      
    
    const [isSuccess, setIsSuccess] = useState(false);
  
    const handleSubmit = (e) => {
      console.log("saving...", formEdit);
      setIsSuccess(true);

      const editedProfile = {
        fname:capitalized(formEdit.fname),
        lname:capitalized(formEdit.lname),
        email:formEdit.email,
        gender:capitalized(formEdit.gender),
        link:formEdit.link,
        skills:[formEdit.skill1, formEdit.skill2, formEdit.skill3, formEdit.skill4, formEdit.skill5, formEdit.skill6],
        yearsOfExp:formEdit.yearsOfExp,
        experience:formEdit.experience,
        job:formEdit.job,
        school:formEdit.school
      }

      accounts = accounts.filter(account=>account.email!== loginEmail);
      accounts.push(editedProfile);
      localStorage.setItem("ApplicantRecord",JSON.stringify(accounts));
      window.location.reload(true);
    };

  
    const validate = (e) => {
      setErrors({
        fnameError:
          formEdit.fname === ""
            ? "First Name is required."
            : "",

        lnameError: 
            formEdit.lname === "" 
            ? "Last Name is required." 
            : "",
        
      });
    };
    

  
    useEffect(() => {
      if (errors.fnameError === "" && errors.lnameError === "")
            handleSubmit();
            // eslint-disable-next-line
    }, [errors]);
  
    const handleChange = (e) => {
      setFormEdit({ ...formEdit, [e.target.name]: e.target.value });
    };




  return (
    <div className="d-flex justify-content-center align-items-center maindiv py-4 px-3 py-md-5">
       <div className="container-fluid registForm p-4">
        <h1 className="display-4"><b>Edit Profile</b></h1>
        <br></br>
      
       <label htmlFor= "fname"><h4>First Name</h4></label>
        <input
          name="fname"
          type="text"
          className="form-control"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].fname}
        />
        <small className="errorMsg">{errors.fnameError}</small>
        <br></br><br></br>
      
        <label htmlFor= "lname"><h4>Last Name</h4></label>
        <input
          name="lname"
          type="text"
          className="form-control"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].lname}

        />
        <small className="errorMsg">{errors.lnameError}</small>
        <br></br><br></br>
      
        <label htmlFor= "gender"><h4>Gender</h4></label>
        <input
          name="gender"
          type="text"
          className="form-control"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].gender}

        />
        <small className="errorMsg">{errors.lnameError}</small>
        <br></br><br></br>
  
        <label htmlFor= "link"><h4>Porfolio Link</h4></label>
        <input
          name="link"
          type="text"
          className="form-control"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].link}
          placeholder="Optional"
        />
        <br></br><br></br>

        <label htmlFor= "skills"><h4>Skills</h4></label>
        <input
          name="skill1"
          type="text"
          className="form-control"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].skills[0]}

        /><br></br>
         <input
          name="skill2"
          type="text"
          className="form-control"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].skills[1]}

        /><br></br>
         <input
          name="skill3"
          type="text"
          className="form-control"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].skills[2]}

        /><br></br>
        <input
          name="skill4"
          type="text"
          className="form-control"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].skills[3]}

        /><br></br>
        <input
          name="skill5"
          type="text"
          className="form-control"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].skills[4]}

        /><br></br>
        <input
          name="skill6"
          type="text"
          className="form-control"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].skills[5]}

        />
        <br></br><br></br>
        
        <label htmlFor= "job"><h4>Job Experienced</h4></label>
                <input
                  name="experience"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  autoComplete="off"
                  defaultValue={acctLogin[0].experience}
                  placeholder="Optional"
        />
        <br></br>

        <label htmlFor= "yearsOfExp"><h4>Years of Experience</h4></label>
        <input
          name="yearsOfExp"
          type="number"
          className="form-control"
          placeholder="Input number here"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].yearsOfExp}

        />
        <br></br>
         {/* Job */}
        <label htmlFor= "job"><h4>Current Job</h4></label>
        <input
          name="job"
          type="text"
          className="form-control"
          placeholder="Optional"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].job}

        />
        <br></br>
        <label htmlFor= "job"><h4>School</h4></label>
        <input
          name="school"
          type="text"
          className="form-control"
          placeholder="Optional"
          onChange={handleChange}
          autoComplete="off"
          defaultValue={acctLogin[0].school}

        />
         <p className="errorMsg">{errors.schoolError}</p>

         {isSuccess && <p className="successMsg">Edited Successfully!</p>}
         <br></br>
         <div className="text-center">
          <button onClick={validate} className="btn cardButtonLeft">Save Changes</button>
         </div>
    </div>
    </div>
  )
}

export default EditProfile