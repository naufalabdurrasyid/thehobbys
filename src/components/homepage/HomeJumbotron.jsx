import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

class HomeJumbotron extends Component {
  
  render() {
  return (
    <div>
      <Jumbotron fluid className='colornav'>
        <Container fluid>
          <h1 style={{ width: '300px', margin: 'auto' , textAlign: 'center' , color: 'black'}}>Tarif</h1>
          <div style={{margin: 'auto' , textAlign: 'center'}}>
            <br/>
       
          
            <img src='https://res.cloudinary.com/dcnhkq6qt/image/upload/v1565080778/OnPaste.20190806-153917_drz0mf.jpg' alt=''></img>
           
      </div>
        </Container>
        <br/>
      </Jumbotron>
    </div>
  );
  }
};

export default HomeJumbotron;