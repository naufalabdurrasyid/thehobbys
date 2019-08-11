import React, {Component} from 'react';
import AppHeader from '../common/AppHeader';
import {
    Card, CardImg,  Container, Row, 
     CardBody,
} from 'reactstrap';
import axios from 'axios';
import AppFooter from '../common/AppFooter';

class KomoditasAnda extends Component {
    constructor(props) {
        super(props);
        this.state = {

            items: [


            ]

        };
    }
    componentDidMount() {
        axios.get(`https://historic-acadia-33199.herokuapp.com/api/user/peternak/${localStorage.getItem('USER_ID')}` ,
        {
            headers: {
                Authorization: localStorage.getItem('JWT_TOKEN')
              }
          
        }
        )
            .then(res => {
                this.setState({
                    items: res.data.data
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
<tr>
<th >Lot Tersedia</th>
<th></th>
<th>: {item.lot_tersedia}</th>

</tr>
                                
                                
                            </CardBody>
                          

                        </Card>
                    

                </div>
            );
        })
        return (
            <div>
                            <AppHeader />

                <Container className='bodylogin' style={{ textAlign: 'center' }}>
                    <br/>
                    <h1>Komoditas Anda</h1>
                    <hr/>
                        <Row>
                            {cards}
                        </Row>
                 
                </Container>
                <AppFooter />
            </div >
        );
    }
}

export default KomoditasAnda;