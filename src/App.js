import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from "react-bootstrap/Card";
import {Nav, NavLink} from 'react-bootstrap';

import './css/App.css';
import Heading from "./Heading";
import Product from "./Product";

const App = () => {
    return (
        // fragment
        <>

            <div className={App}>

                <Navbar className="bg-dark-subtle">
                    <Heading>Perfume store</Heading>
                    <Nav>
                        <NavLink href="#">Home</NavLink>
                        <NavLink href="#">FAQ</NavLink>
                        <NavLink href="#">About Us</NavLink>
                    </Nav>
                </Navbar>

                <div className="products">
                    <Product productName="Sauvage" productDescription="30 €" imgFileName="sauvage.jpeg"
                             altText="Le parfum Sauvage."/>

                    <Product productName="Nuit de l'homme" productDescription="78 €"
                             imgFileName="ndh.jpeg"
                             altText="Le parfum Nuit de l'homme."/>

                    <Product productName="Tom Ford" productDescription="98.25 €" imgFileName="tf.jpg"
                             altText="Le parfum Tom Ford."/>

                </div>

            </div>
        </>
    );
}

export default App;
