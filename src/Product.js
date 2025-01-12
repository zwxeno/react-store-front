import Card from "react-bootstrap/Card";

import './css/Product.css';

const Product = ({productName, productDescription, imgFileName, altText}) => {
    return (
        <Card className="Product bg-body-secondary">
            <Card.Img variant="top" src={`img/${imgFileName}`} alt={altText}/>
            <Card.Body>
                <Card.Title>{productName}</Card.Title>
                <Card.Text>
                    {productDescription}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Product;
