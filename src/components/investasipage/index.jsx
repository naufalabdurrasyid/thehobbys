import React, {Component} from 'react';
import AppHeader from '../common/AppHeader';
import {
    Card, CardImg,  Container, Row, 
    CardBody
} from 'reactstrap';
import axios from 'axios';
import AppFooter from '../common/AppFooter';
//import {Link} from 'react-router-dom'

class InvestasiAnda extends Component {
    constructor(props) {
        super(props);
        this.state = {

            items: [


            ]

        };
    }
    
    componentDidMount() {
        axios.get(`https://historic-acadia-33199.herokuapp.com/api/user/investor/${localStorage.getItem('USER_ID')}` ,
        {
            headers: {
                Authorization: localStorage.getItem('JWT_TOKEN')
              }
          
        }
        )
            .then(res => {
                this.setState({
                    items: res.data.result
                })
            });
            
    }
 
    render() {
        console.log('ini data', this.state.items)

    // // this.state.items.map(item) 

    // //     axios.get(`https://historic-acadia-33199.herokuapp.com/api/komoditas/data/${item.posts}`
    //     )
    //         .then(res => {
    //            this.setState({
    //                 items: res.data.data
    //             })
    //             console.log(res , "sgs")
    //         });

        const cardData = this.state.items.map((item) => {
            return (
                <div class= 'col-md-4' style={{ textAlign: 'left' }}>

                    
                        <Card >
                            <CardImg top width="100%" height="200px" src={item.foto} alt="Card image cap" />
                           
                           <CardBody style={{ textAlign: 'left' }}>
                           <tr>

<th>Nama Ternak </th>
<tr ></tr>
<th>: {item.nama_ternak}</th>



</tr>
<tr>
<th>Jumlah Lot</th>
<tr></tr>
<th>: {item.jumlah_lot}</th>

</tr>
<tr>
<th >Status</th>
<th></th>
<th>: {item.status}</th>

</tr>
<tr>
<th >Email Konfirmasi</th>
<th></th>
<th>: {item.email_konfirmasi}</th>

</tr>

                    
                                
                                
                            </CardBody>
                          

                        </Card>
                    

                </div>
            );
        })
        return (
            <div>
                            <AppHeader />

                <Container style={{ margin: 'auto', textAlign: 'center' , paddingTop: '10px' }}>
                    <h1>Investasi Anda</h1>
                    <hr/>
                        <Row>
                            {cardData}
                        </Row>
                 
                </Container>
                <br/>
                <AppFooter />
            </div >
        );
    }
}

export default InvestasiAnda;