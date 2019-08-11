import React, { Component } from 'react';
import {
    Card, Button, CardImg,  Container,  Row,
     CardBody
} from 'reactstrap';
import axios from 'axios';
import {Link} from 'react-router-dom'
//import { Col } from 'antd';

class HomeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

            items: [


            ]

        };
    }
    componentDidMount() {
        axios.get('https://historic-acadia-33199.herokuapp.com/api/komoditas/data'
        )
            .then(res => {
                this.setState({
                    items: res.data.result
                })
            });
    }
    render() {
        console.log('ini data', this.state.items)


        const cards = this.state.items.slice(0,3).map((item) => {
            return (
                <div class= 'col-md-4'>

                    
                        <Card >
                            <CardImg top width="100%" height="200px" src={item.foto} alt="Card image cap" />
                            <CardBody style={{ textAlign: 'left' }}>
                            <tr>

<th>Nama Ternak </th>
<tr ></tr>
<th>: {item.nama_ternak}</th>



</tr>
<tr>
<th>Asal</th>
<tr></tr>
<th>: {item.asal}</th>

</tr>
<tr>
<th >Harga/Lot</th>
<th></th>
<th>: Rp. {item.harga}</th>

</tr>

                              
                               
                            </CardBody>
                            <div style={{ margin: 'auto', textAlign: 'center' }}>
                        <Link style={{textDecoration:'none', color:'black'}} to={`/investasi/${item._id}`}><Button color="info">Invest</Button></Link>
                        </div>
                        <br/>
                        </Card>
                    

                </div>
            );
        })
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Layanan Booking</h1>
                <Container style={{ textAlign: 'center' }} >
                    
                        
                            <p >Silahkan Kontak Kami Via WA ( 085719190084)</p>
                        
                 
                </Container>
                <br/>
                <br/>
            </div >
        );
    }
}

export default HomeCard;