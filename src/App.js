import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavLink} from 'react-bootstrap';
import Heading from "./Heading";
import Product from "./Product";

import './assets/css/App.css';

import Sauvage from "./assets/img/sauvage.jpeg";
import TomFord from "./assets/img/tf.jpg";
import NuitDeLhomme from "./assets/img/ndh.jpeg";


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

                    <Product productName="Sauvage" productDescription="30 €" imgFileName={Sauvage}
                             altText="Le parfum Sauvage."/>

                    <Product productName="Nuit de l'homme" productDescription="78 €"
                             imgFileName={NuitDeLhomme}
                             altText="Le parfum Nuit de l'homme."/>

                    <Product productName="Tom Ford" productDescription="98.25 €" imgFileName={TomFord}
                             altText="Le parfum Tom Ford."/>

                </div>

            </div>
        </>
    );
}

export default App;
