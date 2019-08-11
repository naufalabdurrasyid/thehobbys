import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, Container, Row, 
    CardSubtitle, CardBody,
} from 'reactstrap';
import axios from 'axios';
import {Link} from 'react-router-dom'

class InvestasiCardus extends Component {
    constructor(props) {
        super(props);
        this.state = {

            items: [


            ]

        };
    }
    componentDidMount() {
        axios.get('http://reduxblog.herokuapp.com/api/posts?key=tester'
        )
            .then(res => {
                this.setState({
                    items: res.data
                })
            });
    }
    render() {
        console.log('ini data', this.state.items)


        const cards = this.state.items.map((item) => {
            return (
                <div class= 'col-md-4'>

                    
                        <Card >
                            <CardImg top width="100%" height="200px" src={item.categories} alt="Card image cap" />
                           
                           <CardBody>
                                <CardTitle>{item.title}</CardTitle>
                                <CardSubtitle>{item.content}</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                
                                <Button><Link to={`/investasi/${item.id}`}>Button</Link></Button>
                                
                            </CardBody>
                          

                        </Card>
                    

                </div>
            );
        })
        return (
            <div>
                <Container>
                    <h1>INVESTASI</h1>
                    
                        <Row>
                            {cards}
                        </Row>
                 
                </Container>
            </div >
        );
    }
}

export default InvestasiCardus;