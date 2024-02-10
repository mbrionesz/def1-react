import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({ name, image, description, colorTag, textTag }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Tags colorTag={colorTag} textTag={textTag}/>
      </Card.Body>
    </Card>
  )
};

export default MyCard