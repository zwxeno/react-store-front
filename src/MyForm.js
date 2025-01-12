import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./assets/css/Form.css";

const MyForm = () => {
    return (
        <div className="form-class">
            <Form>
                <Form.Group className="mb-1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group className="mb-1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" placeholder="Your message..."/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
        </div>
    );
}

export default MyForm;