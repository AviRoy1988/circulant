import React, {useState} from 'react';
import "./sign-up.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.componet";
import { auth, createUserfromAuth } from "../firebase/firebase.utils";

const SignUp = () =>{
  const [userInfo, setUserInfo] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const { displayName, email, password, confirmPassword } = userInfo;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({...userInfo, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(displayName);
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserfromAuth(user, { displayName });
      setUserInfo({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("Error sign up", error.message);
    }
  };

  
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span className="title">Sign Up with email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          onChange={handleChange}
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
}

export default SignUp;
