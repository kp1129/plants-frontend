import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const Login = () => {
    const [formValues, setFormValues] = useState({});
    let history = useHistory();
    const handleChange = (event) => {
        setFormValues({...formValues, [event.target.name]: event.target.value});
        console.log(formValues);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/api/auth/login", formValues)
        .then(res => {
       
          let token = res.data.token;
        
          window.localStorage.setItem("token", JSON.stringify(token));
          setFormValues({ username: "", password: ""});
          history.push("/home");
        })
        .catch(err => console.log(err));
    }
  return (
      <div className="login">
        <nav className="auth-nav">
      <Link to="/signup">SIGN UP</Link>
      <Link to="/login">LOG IN</Link>
      </nav>
          <h1>Welcome back!</h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input type="text" placeholder="Username" name="username" id="username" value={formValues.username} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input type="password" placeholder="Password" name="password" id="password" value={formValues.password} onChange={handleChange} /> 
           </FormGroup> 
           <Button type="submit">Submit</Button>
          </Form>
      </div>
  );
}

export default Login;