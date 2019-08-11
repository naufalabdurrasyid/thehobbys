import React, { Component } from 'react';
import AppFooter from '../common/AppFooter';
import AppHeader from '../common/AppHeader';
import {Container} from 'reactstrap';
class Stream extends Component {
    render() {
        return (
            <div >
                             <div> <AppHeader /></div>   
                                  <Container >
                             <div className= "body">
<div style={{ margin: 'auto', textAlign: 'center' , paddingTop: '10px' }}> <h1 >Konsul Dong</h1></div>
                
               
                <hr/>
           
                   
                        
                    
                <p style={{ margin: 'auto', textAlign: 'center' , paddingTop: '10px' }}>Konsul Dong merupakan media sharing ilmu dari ahli-ahli tamu dan tim Monggovest dalam bentuk Live Stream tiap selasa dan kamis.
                    <br/>    
                    Anda dapat memberikan pertanyaan secara langsung dengan mengirim pesan ke whatsapp kami di nomor 082291875122.
                </p>
              <p style={{ margin: 'auto', textAlign: 'center' , paddingTop: '10px' }}>
          {/* eslint-disable-next-line */}
                <iframe
                
    src="https://player.twitch.tv/?channel=naufalrasyid&muted=true"
    height="315"
    width="560"
    frameborder="0"
    scrolling="no"
  
    allowfullscreen="true">
</iframe>
</p>
</div>
</Container>
    

<AppFooter />

            </div>
        );
    }
}

export default Stream;