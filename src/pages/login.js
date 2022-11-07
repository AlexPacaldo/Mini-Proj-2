import { useState, useEffect } from 'react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/signUp.css'

let loginData = localStorage.getItem("Users")? JSON.parse(localStorage.getItem("Users")):[];
function Login() {
    const initialValues = { email: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        

    }
    const handleToReg = ()=>{
        navigate('/Register');
    }
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
            localStorage.setItem("isActive", JSON.stringify(true));
            localStorage.setItem("LoginEmail", JSON.stringify(formValues.email));
            navigate('/');
            window.location.reload(true);

        } // eslint-disable-next-line
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const emailInput = formValues.email;
        const passwordInput = formValues.password;
        const getEntries = loginData;

        const filteredEntries = getEntries.filter((item) => {
            return emailInput === item.email && passwordInput === item.password;
        });






        if(emailInput === "admin" && passwordInput === "admin"){
            localStorage.setItem("isAdmin", JSON.stringify(true));
            return errors;

        }
        else{
            
            if (!values.email){
                errors.email = `Please provide an email.`
            } else if (!regex.test(values.email)){
                errors.email = "Please provide a valid email format.";
            } 
            if (!values.password){
                errors.password = "Please provide a password.";
            } else if (values.password.length < 4) {
                errors.password = "Password must be more than 4 characters";
            }
            if (filteredEntries.length === 0){
                errors.filteredEntries = "Record not found";
                console.log(`error`)
            } 
            return errors;
        }


        


        
    }


    return (
        <div className="d-flex justify-content-center align-items-center maindiv  px-4">
            <div className="container-fluid registForm p-4">
                    <form className="loginForm" onSubmit={handleSubmit} noValidate>
                    <h1 className="display-4"><b>Login</b></h1>
                    <br></br>
                        <label htmlFor="email" className="emailLabel"><h3 className="loginLabels">Email</h3></label><br></br>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="form-control"
                            value={formValues.email}
                            onChange={handleChange}
                            autoComplete="off"/>
                        <small className="errorMsg">{formErrors.email}</small>
                        <br></br><br></br>
                        <label htmlFor="password"><h3 className="loginLabels loginLabelPassword">Password</h3></label><br></br>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className="form-control"
                            value={formValues.password}
                            onChange={handleChange}
                            autoComplete="off" />
                        <small className="errorMsg">{formErrors.password}</small>
                        <br></br><br></br><br></br>
                        <small className="errorMsg">{formErrors.filteredEntries}</small>
                        {Object.keys(formErrors).length === 0 && isSubmit ? (
                            <p className="successMsg">Signed in successfully</p>
                        ) : (
                            console.log('login error')
                        )}
                        <div className='text-center'>
                            <button type="submit" className=" btn btn-primary w-25">Login</button>
                        </div>

                            
                        <br /> <br />
                        <p className='text-center'><b>Not yet a member?</b> <span onClick={()=>{handleToReg()}} className='clickToLogin'>Register Here</span></p>
                    </form>
            </div>
        </div>
      );
}

export default Login