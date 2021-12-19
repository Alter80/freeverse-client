import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import AddGame from './AddGame/AddGame';
import RemoveGame from './RemoveGame/RemoveGame';

const Dashboard = () => {
    return (
        <Container className='my-5 '>
            <h2>Welcome ADMIN!</h2>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row >
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link className='text-light' eventKey="first">Add Games</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='text-light' eventKey="second">Delete Games</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <AddGame></AddGame>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <RemoveGame></RemoveGame>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default Dashboard;