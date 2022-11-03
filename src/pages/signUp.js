import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import applicantRecord from '../JSON/applicantRecord';
import '../assets/signUp.css'


 let retrieveApplicantData;
 retrieveApplicantData = localStorage.getItem('ApplicantRecord')?JSON.parse(localStorage.getItem('ApplicantRecord')): retrieveApplicantData = applicantRecord;

const SignUp = () => {
  const [errors, setErrors] = useState({});
  const [formUser, setFormUser] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "", job: "", link: "", gender:""});
  const [users, setUsers] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const applicants = retrieveApplicantData;
  const navigate = useNavigate();

  const handleLogin = () =>navigate('/login');

  function capitalized(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleSubmit = (e) => {
    const newApplicant = {
      fname:capitalized(formUser.firstName),
      lname:capitalized(formUser.lastName),
      email:formUser.email,
      skills:["none","none","none","none","none","none"],
      yearsOfExp:0,
      experience:"",
      school:null,
      job:formUser.job,
      link:formUser.link,
      gender:capitalized(formUser.gender)
    };
    applicants.push(newApplicant);
    localStorage.setItem('ApplicantRecord',JSON.stringify(applicants))
    users.push(formUser);
    localStorage.setItem("Users", JSON.stringify(users));
    setIsSuccess(true);
    alert('You are now Registered!');
    window.location.reload(true);
    
  };

const checkValidEmail = (email) => {
  const regRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if(!regRegex.test(email)){
      return `Invalid email format`;
  } else if (
      users.length > 0 &&
      users.filter((user) => user.email === email).length > 0
    ) {
      return `Email already exists. Sign in instead`;
    } else {
    return "";
  }
}

const checkPasswordFormat = (password) => {
  if(password.length < 4) {
      return `Password must be more than 4 characters`
  } 
  return "";
}

const checkMatchPassword = (password, confirmPassword) => {
  if (
      confirmPassword !== password
  ) {
      return `Passwords did not match`;
  }
  return "";
}

const validate = (e) => {
  setErrors({
    firstNameError:
      formUser.firstName === ""
        ? "First Name is required."
        : "",

    lastNameError: 
        formUser.lastName === "" 
        ? "Last Name is required." 
        : "",

    emailError:
        formUser.email === ""
        ? "Email is required."
        : checkValidEmail(formUser.email),  
        
    passwordError:
        formUser.password === ""
        ? "Password is required."
        : checkPasswordFormat(formUser.password),

    confirmPasswordError:
        formUser.confirmPassword === ""
        ? "Password confirmation is required."
        : checkMatchPassword(formUser.password,formUser.confirmPassword),
    jobError:
        formUser.job === ""
        ? "Gender is Required."
        : "",

    genderError:
        formUser.gender === ""
        ? "Gender is Required."
        : "",
  });

};


useEffect(() => {
  const storedUsers = localStorage.getItem("Users")
    ? JSON.parse(localStorage.getItem("Users"))
    : [];
  setUsers(storedUsers);
}, []);

useEffect(() => {
  if (errors.firstNameError === "" && errors.lastNameError === "" && errors.emailError === "" && errors.passwordError === "" && errors.confirmPasswordError === "" && errors.genderError === "" && errors.jobError === "")
    handleSubmit();
    // eslint-disable-next-line
}, [errors]);

const handleChange = (e) => {
  setFormUser({ ...formUser, [e.target.name]: e.target.value });
};

  return (
    <article className="d-flex justify-content-center align-items-center maindiv py-4 px-3 py-md-5">
        <div className="container-fluid registForm p-4">
            <h1 class="display-4"><b>Registration Form</b></h1>
            <br></br>
                    <label htmlFor="firstName"><h4>First Name:</h4></label><br></br>
                    <input type="text" name="firstName" className="form-control" onChange={handleChange}/>
                    <small className="errorMsg">{errors.firstNameError}</small>
                <br></br>
                <br></br>
                    <label htmlFor="lastName"><h4>Last Name:</h4></label><br></br>
                    <input type="text" name="lastName" class="form-control" onChange={handleChange}/>
                    <small className="errorMsg">{errors.lastNameError}</small>
                <br></br>
                <br></br>
                    <label htmlFor="gender"><h4>Gender:</h4></label><br></br>
                    <input type="text" name="gender" class="form-control" onChange={handleChange} autoComplete="off" placeholder="M or F"/>
                    <small className="errorMsg">{errors.genderError}</small>
                <br></br>
                <br></br>
                    <label htmlFor="email"><h4>Email:</h4></label><br></br>
                    <input type="text" name="email" class="form-control" onChange={handleChange} placeholder="example@gmail.com"/>
                    <small className="errorMsg">{errors.emailError}</small>
                <br></br>
                <br></br>
                    <label htmlFor="password"><h4>Password:</h4></label><br></br>
                    <input type="password" name="password" class="form-control" onChange={handleChange} autoComplete="off"/>
                    <small className="errorMsg">{errors.passwordError}</small>
                <br></br>
                <br></br>
                    <label htmlFor="confirmPassword"><h4>Confirm Password:</h4></label><br></br>
                    <input type="password" name="confirmPassword" class="form-control" onChange={handleChange} autoComplete="off"/>
                    <small className="errorMsg">{errors.confirmPasswordError}</small>
                <br></br>
                <br></br>
                    <label htmlFor="job"><h4>Job:</h4></label><br></br>
                    <input type="text" name="job" class="form-control" onChange={handleChange} autoComplete="off" placeholder="Job that you want to apply to"/>
                    <small className="errorMsg">{errors.confirmPasswordError}</small>
                <br></br>
                <br></br>
                    <label htmlFor="link"><h4>Porfoliolink:</h4></label><br></br>
                    <input type="text" name="link" class="form-control" onChange={handleChange} autoComplete="off" placeholder="Optional"/>
                <br></br>
                <br></br>
                {isSuccess && <p className="successMsg">Registered Successfully!</p>}
                <div class="text-center button">
                <button onClick={validate} className="btn btn-primary">Register</button>
                </div>
      
                <br></br>
                <p className="text-center"><b>Already Have an account?</b> <span className="clickToLogin" onClick={()=>handleLogin()}>Log-In Here</span></p>    
        </div>
    </article>
  )
}

export default SignUp
