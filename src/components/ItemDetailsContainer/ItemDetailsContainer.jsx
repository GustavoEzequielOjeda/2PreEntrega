import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetailsContainer = ({productData}) =>{

    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productData.thumbnail} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>
          ${productData.price}
        </Card.Text>
        <Button variant="success">Comprar</Button>
      </Card.Body>
    </Card>
    )
};
export default ItemDetailsContainer;