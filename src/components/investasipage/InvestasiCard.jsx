import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, Container, Row, 
    CardSubtitle, CardBody,
} from 'reactstrap';
import axios from 'axios';
import {Link} from 'react-router-dom'

class InvestasiCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

            items: [


            ]

        };
    }
    componentDidMount() {
        axios.get('https://historic-acadia-33199.herokuapp.com/api/user/komoditas'
        )
            .then(res => {
                this.setState({
                    items: res.data.result
                })
            });
    }
    render() {
        console.log('ini data', this.state.items)


        const cards = this.state.items.map((item) => {
            return (
                <div class= 'col-md-4'>

                    
                        <Card >
                            <CardImg top width="100%" height="200px" src={item.foto} alt="Card image cap" />
                           
                           <CardBody>
                                <CardTitle>{item.nama_ternak}</CardTitle>
                                <CardSubtitle>{item.harga}</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                
                                <Button color="info"><Link to={`/investasi/${item._id}`}>Invest</Link></Button>
                                
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

export default InvestasiCard;