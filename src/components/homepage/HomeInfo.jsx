import React, { Component } from 'react';
import {
     Container
} from 'reactstrap';


class HomeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        
                
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Layanan Booking The Hobbys...</h1>
                <Container style={{ textAlign: 'center' }} >
                    
                        
                            <p >Silahkan Kontak Kami Via WA ( 085719190084)</p>
                        
                 
                </Container>
                <br/>
                <br/>
            </div >
        );
    }
}

export default HomeInfo;