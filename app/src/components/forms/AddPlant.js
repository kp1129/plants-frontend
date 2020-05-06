import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from 'react-router-dom';
// import { axiosWithAuth } from '../../utils/axiosWithAuth';

const Addplant = () => {
    const [formValues, setFormValues] = useState({});
    const [dropDownValue, setDropDownValue] = useState("");
    let history = useHistory();
    const handleChange = (event) => {
        setFormValues({...formValues, [event.target.name]: event.target.value});
        console.log(formValues);
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
        //         image: "",
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
      <div className="addplant">
          <h2>Add new plant!</h2>
    <Form onSubmit={handleSubmit} >
    <FormGroup>
        {/* how do i want to handle image tile? */}
            <Label htmlFor="image">Select image tile for your plant </Label>
                <Input type="text" placeholder="image URL" name="image" id="image" value={formValues.image} onChange={handleChange} />
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
    </div>
  );
} 

export default Addplant;
