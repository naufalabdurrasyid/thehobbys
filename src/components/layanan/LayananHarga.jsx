import React, { Component } from 'react';
import AppHeader from '../common/AppHeader';
import {
    Container, Row,  
} from 'reactstrap';

import AppFooter from '../common/AppFooter';

class LayananHarga extends Component {
  
    render() {
        
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

export default LayananHarga;