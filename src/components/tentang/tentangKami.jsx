import React, { Component } from 'react';
import AppHeader from '../common/AppHeader';
import AppFooter from '../common/AppFooter';

import { Container } from 'reactstrap';
class TentangKami extends Component {
    render() {
        return (
            <div >
                <AppHeader />
                <Container>
              <div className="body" >
                <h1 style={{ width: '100px', margin: 'auto', textAlign: 'center' }}> The Hobby's</h1>
                   <hr/>
                  <p  class="textalign">
The Hobby's adalah tempat membantu anda dalam mawat kandaraan pribadi anda.
<br/> <p class="textalign">Instagram @thehobbys15 ,

Booking : WA ( 085719190084)</p>
                  </p>

                
              </div>
              </Container>
             <AppFooter />
            </div>
          );
    }
}

// border


export default TentangKami;