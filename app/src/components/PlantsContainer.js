import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PlantCard from './PlantCard';

import { getAllPlants } from '../actions/plantActions';

const PlantsContainer = props => {
    useEffect(() => {
        props.getAllPlants();
    }, [])
    return (
        <div className="plants-container">
            {props.userPlants.map(plant => <PlantCard plant={plant}  />)}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        userPlants: state.userPlants
    }
}

export default connect(mapStateToProps, {getAllPlants})(PlantsContainer);