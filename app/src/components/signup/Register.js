import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// This component holds the user registration form and its logic
const Register = ({ setIsLoading }) => {
    const history = useHistory();
    // controls form input values
    const [formValues, setFormValues] = useState({});    
    // regex to validate phone number in the form
    const phoneNumRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i;
    // update formValues with user input
    const handleChange = (event) => {
        setFormValues({...formValues, [event.target.name]: event.target.value});
    }
    // register new user
    const handleSubmit = (event) => {
        event.preventDefault();
        // load the spinner
        setIsLoading(true);
        // standardize phone number format
        const re = /\D/g;
        const cleanPhoneNumber = formValues.phoneNumber.replace(re, "");
        // update state with reformatted phone number
        setFormValues({...formValues, phoneNumber: cleanPhoneNumber});
        // create new user object
        const newUser = {
            username: formValues.username,
            password: formValues.password,
            phoneNumber: formValues.phoneNumber
        }
        // register new user in the database
        axios.post("http://localhost:5000/api/auth/register", newUser)
        .then(res => {
            // grab the token sent back by the server
            // save it to localStorage
            let token = res.data.token;
            window.localStorage.setItem("token", JSON.stringify(token));
            // clear form values
            setFormValues({
                username: "",
                password: "",
                confirmPassword: "",
                phoneNumber: ""
            });
            // remove the loading spinner
            setIsLoading(false);
            // route user to dashboard
            history.push("/home");
        })
        .catch(err => console.log(err))
    }  
  return (      
      <div>
          <h1>Sign up!</h1>
    <Form onSubmit={handleSubmit} >
        <FormGroup>
            <Label htmlFor="username">Username</Label>
                <Input required type="text" placeholder="Username" name="username" id="username" value={formValues.username} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="password">Password</Label>
                <Input required type="password" placeholder="Password" name="password" id="password" value={formValues.password} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input required type="password" placeholder="Confirm password" name="confirmPassword" id="confirmPassword" value={formValues.confirmPassword} onChange={handleChange} />
                {!formValues.confirmPassword ? <p></p> : formValues.password === formValues.confirmPassword ? <p></p> : <p>Passwords must match</p>}
        </FormGroup>
        <FormGroup>
            <Label htmlFor="phoneNumber">Mobile number</Label>
                <Input required type="tel" placeholder="Mobile number" name="phoneNumber" id="phoneNumber" value={formValues.phoneNumber} onChange={handleChange} />
                {!formValues.phoneNumber ? <p></p> : phoneNumRegex.test(formValues.phoneNumber) ? <p></p> : <p>Please provide a 10-digit phone number</p>}
        </FormGroup>
        <Button type="submit">Submit</Button>
    </Form>
    </div>
    
  );
} 

export default Register;

// refactor this
// SAVE THE VALIDATION STUFF FROM HERE

// can the form control stuff be refactored into a hook? maybe useFormController? it's identical, other than the api call

{/* <div className="signup">
          <h1>Sign up!</h1>
    <Form >
        <FormGroup>
            <Label htmlFor="username">Username</Label>
      <Input type="text" placeholder="Username" name="Username" id="username"  ref={register({ name: 'Username' },{required: true, maxLength: 80})} />
      </FormGroup>
      <FormGroup>
      <Label htmlFor="password">Password</Label>
      <Input type="password" placeholder="Password" name="Password" id="password" ref={register({ name: 'Password' },{required: true})} />
      </FormGroup>
      <FormGroup>
      <Label htmlFor="mobile-number">Mobile number</Label>
      <Input type="tel" placeholder="Mobile number" name="Mobile number" id="mobile-number" ref={register({ name: 'Mobile number' },{required: true, pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i})} />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
    </div> */}