import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [formValues, setFormValues] = useState({});
    let history = useHistory();
    const handleChange = (event) => {
        setFormValues({...formValues, [event.target.name]: event.target.value});
        console.log(formValues);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
        axios.post("http://localhost:5000/api/auth/register", formValues)
        .then(res => {
        
            let token = res.data.token;
            window.localStorage.setItem("token", JSON.stringify(token));

            setFormValues({
                username: "",
                password: "",
                phoneNumber: ""
            })
            history.push("/home");
        })
        .catch(err => console.log(err))

    }
  
  return (
      <div className="register">
          <nav className="front-page-nav">
      <Link to="/register">SIGN UP</Link>
      <Link to="/login">LOG IN</Link>
      </nav>
          <h1>Sign up!</h1>
    <Form onSubmit={handleSubmit} >
        <FormGroup>
            <Label htmlFor="username">Username</Label>
                <Input type="text" placeholder="Username" name="username" id="username" value={formValues.username} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="password">Password</Label>
                <Input type="password" placeholder="Password" name="password" id="password" value={formValues.password} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="phoneNumber">Mobile number</Label>
                <Input type="tel" placeholder="Mobile number" name="phoneNumber" id="phoneNumber" value={formValues.phoneNumber} onChange={handleChange} />
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