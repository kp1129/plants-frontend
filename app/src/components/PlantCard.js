import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

// This component displays the individual plant cards
// Includes plant tile and update button to make changes
const PlantCard = (props) => {
    let history = useHistory();
    // allow users to update the info on the plant card
    const handleUpdate = (event) => {
        event.preventDefault();
        history.push(`home/update/${props.plant.id}`)
    }
    // this is just to grab the relevant image tile
    const [selectImg] = props.plantImages.filter(obj => obj.tile === props.plant.imageTile);

  return (
    <div>
      <Card className="plant-card">
        <CardImg className="" top width="100%" src={selectImg.src} alt={selectImg.alt} />
        <CardBody>
          <CardTitle>{props.plant.nickname}</CardTitle>
          <CardSubtitle>{props.plant.species}</CardSubtitle>
          <CardSubtitle>Water me {props.plant.wateringFrequency}</CardSubtitle>
          <CardText>Notes: {props.plant.notes}</CardText>          
        </CardBody>
        <Button className="update-btn" onClick={handleUpdate}>Update</Button>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    plantImages: state.plantImages
  }
}

export default connect(mapStateToProps, { })(PlantCard);
