// imports
import plant1 from '../images/plant1.jpg';
import plant2 from '../images/plant2.jpg';
import plant3 from '../images/plant3.jpg';
import plant4 from '../images/plant4.jpg';
import plant5 from '../images/plant5.jpg';
import plant6 from '../images/plant6.jpg';

// initial state
const initialState = {
    plantImages: [
        { tile: 1, src: plant1, selected: false, alt: "plant with flowers - variant 1" },
        { tile: 2, src: plant2, selected: false, alt: "plant with leaves - variant 1" },   
        { tile: 3, src: plant3, selected: false, alt: "succulent - variant 1" },
        { tile: 4, src: plant4, selected: false, alt: "plant with leaves - variant 2" },
        { tile: 5, src: plant5, selected: false, alt: "plant with flowers - variant 2" },
        { tile: 6, src: plant6, selected: false, alt: "succulent - variant 2"},
    ]
}

// reducer function
export const plantsReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}