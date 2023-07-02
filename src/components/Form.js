import React, { useState} from "react";
import { useNavigate} from "react-router-dom";
import signstyle from "../pages/Signuppage/Signup.module.css";



function Form() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checked: ""
  })

  function validateForm() {
    if (inputs.name.length === 0 || inputs.username.length === 0 || inputs.email.length ===0 || inputs.mobile.length === 0 || inputs.checked.length === 0)   {
        setError(true);
        
    }
    else {
        setError(false);
        setValid(true);
        
    }
};
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
    
    
  };

  function handleSubmit(e) {
    e.preventDefault();
    validateForm();
    localStorage.setItem("name", inputs.name)
    localStorage.setItem("username", inputs.username)
    localStorage.setItem("email", inputs.email)
    localStorage.setItem("mobile", inputs.mobile)
    localStorage.setItem("terms", inputs.checked)
  
     if(valid){
         navigate("/category")
       }
  };

  return (
    <div className={signstyle.formpage}>
      <div className={signstyle.top}>
        <h2 className={signstyle.head}>Super app</h2>
        <p className={signstyle.ptop}>Create your new account</p>
      </div>
      <form className={signstyle.form}>
        <input type="text" placeholder="Name" id={signstyle.name} name="name" value={inputs.name} onChange={handleChange}/>
        <label className={signstyle.label}>{error && inputs.name.length <= 0 ? "Field is required" : "" }</label>
        <input type="text" placeholder="UserName" id={signstyle.username} name="username" 
        value={inputs.username} onChange={handleChange}/>
        <label className={signstyle.label}>{error && inputs.username.length <= 0 ? "Field is required" : "" }</label>
        <input type="text" placeholder="Email" id={signstyle.email} name="email"  
        value={inputs.email} onChange={handleChange}/>
        <label className={signstyle.label}>{error && inputs.email.length <= 0 ? "Field is required" : "" }</label>
        <input type="text" placeholder="Mobile" id={signstyle.mobile} name="mobile" 
        value={inputs.mobile} onChange={handleChange} />
        <label className={signstyle.label}>{error && inputs.mobile.length <= 0 ? "Field is required" : "" }</label>
        <div className={signstyle.checkbox}>
          <input type="checkbox" id=""  name="checked" value="checked" onChange={handleChange} />
          <p className={signstyle.boxtext}>Share my registration data with Superapp</p>
        </div>
        <label className={signstyle.label}>{error && inputs.checked.length === 0 ? "Check this box if you want to proceed" : "" }
         </label>  
        <div className={signstyle.link}>
          
            <button className={signstyle.btn} onClick={handleSubmit}>SIGN UP</button>
         
        </div>
      </form>
      <div className={signstyle.bottom}>
        <p className={signstyle.para}>
          By clicking on Sign up. you agree to Superapp
          <span className={signstyle.inner}>Terms and Conditions of Use</span>
        </p>
        <p className={signstyle.para}>
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp{" "}
          <span className={signstyle.inner}>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

export default Form;
