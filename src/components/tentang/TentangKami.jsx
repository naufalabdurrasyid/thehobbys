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
                <h1 style={{ width: '100%', margin: 'auto', textAlign: 'center' }}> The Hobby's</h1>
                   <hr/>
                  <p  class="textalign">
The Hobby's adalah tempat membantu anda dalam merawat kandaraan pribadi anda.
<br/> <li class="textalign"> Instagram @thehobbys15 </li> <li class="textalign">
 WA Booking (085719190084)</li>
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