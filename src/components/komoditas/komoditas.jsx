import React, { Component } from 'react';
import AppHeader from '../common/AppHeader';
import {
    Card, Button, CardImg,  Container, Row,
    CardBody,
} from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'
import AppFooter from '../common/AppFooter';

class KomoditasList extends Component {
    constructor(props) {
        super(props);
        this.state = {

            items: [


            ]

        };
    }
    componentDidMount() {
        axios.get('https://historic-acadia-33199.herokuapp.com/api/komoditas/data')
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
                <div  class='col-md-4' >

                    
                    <Card >
                        

                        <CardBody>
                    

                        </CardBody>
                      
<br/>
                    </Card>
                    <br/>
                    
                </div>
            );
        })
        return (
            <div>
                <AppHeader />

                <Container>
                <div className="body">
                    <h1 style={{ margin: 'auto', textAlign: 'center' }}>Layanan Kami</h1>
                    <hr />
                    <Row>
                    <div style={{margin: 'auto' , textAlign: 'center'}}>
            <br/>
       
          
            <img src='https://res.cloudinary.com/dcnhkq6qt/image/upload/v1565080778/OnPaste.20190806-153917_drz0mf.jpg' alt=''></img>
           
      </div>

                    </Row>
                    </div>
                </Container>

                <AppFooter />

            </div >
        );
    }
}

export default KomoditasList;