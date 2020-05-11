import { axiosWithAuth } from '../utils/axiosWithAuth';
// action types as strings
export const IMAGE_TILE_SELECTED = "IMAGE_TILE_SELECTED";
export const ADD_PLANT = "ADD_PLANT";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const GET_ALL_PLANTS = "GET_ALL_PLANTS";


// action creators
export const imageTileSelected = (tile) => {
    return { type: IMAGE_TILE_SELECTED, payload: tile }
}

export const addPlant = (plant) => (dispatch) => {
    dispatch({ type: ADD_PLANT, payload: plant });
    // think about what kinds of actions i actually 
    // want to dispatch when i add a new plant
    axiosWithAuth().post("api/plants", plant)
    .then(res => dispatch({ type: SUCCESS }))
    .catch(err => {dispatch({ type: ERROR })})
}

export const getAllPlants = () => (dispatch) => {
    axiosWithAuth().get("/api/plants")
    .then(res => dispatch({ type: GET_ALL_PLANTS, payload: res.data }))
    .catch(err => {dispatch({ type: ERROR })})
}


