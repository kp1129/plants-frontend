// imports
import plant1 from '../images/plant1.jpg';
import plant2 from '../images/plant2.jpg';
import plant3 from '../images/plant3.jpg';
import plant4 from '../images/plant4.jpg';
import plant5 from '../images/plant5.jpg';
import plant6 from '../images/plant6.jpg';

import { 
    IMAGE_TILE_SELECTED,
    SUCCESS,
    ADD_PLANT,
    ERROR,
    GET_ALL_PLANTS
 } from '../actions/plantActions';

// initial state
const initialState = {
    plantImages: [
        { tile: 1, src: plant1, selected: false, alt: "plant with flowers - variant 1" },
        { tile: 2, src: plant2, selected: false, alt: "plant with leaves - variant 1" },   
        { tile: 3, src: plant3, selected: false, alt: "succulent - variant 1" },
        { tile: 4, src: plant4, selected: false, alt: "plant with leaves - variant 2" },
        { tile: 5, src: plant5, selected: false, alt: "plant with flowers - variant 2" },
        { tile: 6, src: plant6, selected: false, alt: "succulent - variant 2"},
    ],
    userPlants: [
        
    ],
    message: ""
}

// reducer function
export const plantsReducer = (state = initialState, action) => {
    switch(action.type){
        case IMAGE_TILE_SELECTED:
            let toggleSelected = state.plantImages.map(imgObj => {
                if(imgObj.tile === action.payload){
                    return {...imgObj, selected: !imgObj.selected}
                } else {
                    return {...imgObj, selected: false};
                }
            })
            return {...state, plantImages: toggleSelected};
        case ADD_PLANT:
            let newPlant = action.payload;
            return {...state, userPlants: [...state.userPlants, newPlant]}    
        case GET_ALL_PLANTS: 
            return {...state, userPlants: action.payload }
            case SUCCESS:
            return {...state, message: "success!"}    
        case ERROR:
            return {...state, message: "Uh oh! Something went wrong."}    
        default:
            return state;
    }
}