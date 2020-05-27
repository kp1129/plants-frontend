import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';
import LoadingSpinner from './LoadingSpinner';

// This component acts as a container to display
// the navigation (Sign Up and Log In links)
// and either the user registration form or 
// the loading spinner while the form is submitting
const Signup = () => {
    // controls whether to display the form or the loading spinner
    const [isLoading, setIsLoading] = useState(false);

  return (
      <div className="signup">
          <nav className="front-page-nav">
      <Link to="/register">SIGN UP</Link>
      <Link to="/login">LOG IN</Link>
      </nav>
      {isLoading ? <LoadingSpinner /> : <Register setIsLoading={setIsLoading}/>}      
    </div>
  );
} 

export default Signup;

