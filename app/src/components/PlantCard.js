import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useHistory } from 'react-router-dom';

const PlantCard = ({ plant }) => {
    let history = useHistory();
    const handleUpdate = (event) => {
        event.preventDefault();
        history.push(`home/update/${plant.id}`)
    }
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{plant.nickname}</CardTitle>
          <CardSubtitle>{plant.species}</CardSubtitle>
          <CardSubtitle>{plant.wateringFrequency}</CardSubtitle>
          <CardText>{plant.notes}</CardText>
          <Button onClick={handleUpdate}>Update</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default PlantCard;
