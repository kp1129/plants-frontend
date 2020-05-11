import React, {useState, useEffect} from 'react';
//import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';
import PlantsContainer from './PlantsContainer';

const Dashboard = () => {
    
    const logout = () => {
        window.localStorage.removeItem('token');
    }
   
    return( 
        <div className="dashboard-component">
            <h2>Welcome to Water My Plants!</h2>
            <nav>
            <Link to="/home">VIEW ALL</Link>
            <Link to="/home/addnew">ADD PLANT</Link>
            <Link onClick={logout} to="/login">LOG OUT</Link>
            </nav>
            <div>plants will go here</div>
            <PlantsContainer />
        </div>
    )
}

export default Dashboard;