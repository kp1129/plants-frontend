import React, {useState, useEffect} from 'react';
//import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';
// import PlantContainer from './PlantContainer';

const Dashboard = () => {
    const [plants, setPlants] = useState([]);
    const logout = () => {
        window.localStorage.removeItem('token');
    }
    // useEffect(() => {
    //     axiosWithAuth().get("/api/plants")
    //     .then(res => setPlants(res.data))
    //     .catch(err => console.log(err));
    // });
    return( 
        <div className="dashboard-component">
            <h2>Welcome to Water My Plants!</h2>
            <nav>
            <Link to="/home">VIEW ALL</Link>
            <Link to="/home/addnew">ADD PLANT</Link>
            <Link onClick={logout} to="/login">LOG OUT</Link>
            </nav>
            <div>plants will go here</div>
            {/* <PlantContainer plants={plants} />             */}
        </div>
    )
}

export default Dashboard;