
//css
import styles from "./ItemListContainer.module.css"
//Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemListContainer = ({productsData}) =>{
    
    return(
     <div className={styles.containerCards}>
        {productsData.map((card) => {
            return(
                <Card style={{ width: '18rem' }} key={card.id}>
      <Card.Img variant="top" src={card.thumbnail} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            )
        })}
     </div>
    )
}
export default ItemListContainer;