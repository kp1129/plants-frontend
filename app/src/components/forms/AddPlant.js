import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { connect } from 'react-redux';
import Image from '../Image';

const Addplant = props => {
    const [formValues, setFormValues] = useState({});
    const [dropDownValue, setDropDownValue] = useState("");
    let history = useHistory();
    const handleChange = (event) => {
        setFormValues({...formValues, [event.target.name]: event.target.value});
        console.log(formValues);
    }
    const handleImgTile = (tile) => {
        setFormValues({...formValues, imageTile: tile});
        // dynamically change selected state so that i can apply and remove activeImgTile?
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
        // axiosWithAuth().post("api/plants", formValues)
        // .then(res => {
        //     setFormValues({
        //         nickname: "",
        //         species: "",
        //         wateringFrequency: "",
        //         imageTile: "",
                // notes: ""
        //     })
        //     history.push("/home");
        // })
        // .catch(err => console.log(err))
    } 
  
    // need 
    // nickname, character limit 50
    // species
    // imageTile
    // notes, character limit 255
    // wateringFrequency
    // foreign key = users_id
    // the only optional field in the db is notes

  return (
      <div className="add-plant">
          <h2>Add new plant!</h2>
          
    <Form onSubmit={handleSubmit} >
    <FormGroup>
        {/* how do i want to label this section and make it accessible? */}
            <Label>Select image tile for your plant </Label>
            <div className="imageTilesContainer">
                {props.plantImages.map(imgObj => <Image selected={imgObj.selected} handleImgTile={handleImgTile} tile={imgObj.tile} src={imgObj.src} alt={imgObj.alt} />)}
          </div>
              
        </FormGroup>

        <FormGroup>
            <Label htmlFor="nickname">Give your plant a nickname</Label>
                <Input required type="text" placeholder="nickname" name="nickname" id="nickname" value={formValues.nickname} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="species">Plant species</Label>
                <Input required type="species" placeholder="species" name="species" id="species" value={formValues.species} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="wateringFrequency">How often does your plant need to be watered?</Label>
                <select onChange={handleChange} name="wateringFrequency" id="wateringFrequency" required>
                    <option selected disabled>Choose watering schedule</option>
                    <option value="1x/day">1x/day</option>
                    <option value="1x/2 days">1x/2 days</option>
                    <option value="1x/3 days">1x/3 days</option>
                    <option value="1x/week">1x/week</option>
                    <option value="1x/2 weeks">1x/2 weeks</option>
                    <option value="1x/3 weeks">1x/3 weeks</option>                    
                </select>
        </FormGroup>
        <FormGroup>
        <Label htmlFor="notes">Notes</Label>
        <Input type="textarea" name="notes" id="notes" placeholder="notes" value={formValues.notes} onChange={handleChange} />
      </FormGroup>
        
        <Button type="submit">Submit</Button>
    </Form>
    <a href="https://www.vecteezy.com/free-vector/potted-plant">Potted Plant Vectors by Vecteezy</a>
    </div>
  );
} 

const mapStateToProps = state => {
    return {
        plantImages: state.plantImages
    }
}

export default connect(mapStateToProps, {})(Addplant);