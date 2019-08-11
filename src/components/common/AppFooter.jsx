import React from 'react';
// import { Container } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'
// import Avatar from 'react-avatar';
// import store from 'store'
// import isLoggedIn from '../helpers/is_logged_in';
// import axios from 'axios';


class AppFooter extends React.Component {
  
  render() {
    
  
    return (
      <div className='colornav'>
      <br/>
           
      <Link to='/'className="text-white"><img class="centeroke" height='100px' src='https://res.cloudinary.com/dcnhkq6qt/image/upload/v1565080148/791c0286-2a28-47e6-82dd-1e10f76bf456_200x200_qnxxg1.png' alt=''/></Link>
    <br/>
     <p style={{ textAlign: 'center' , color: 'black'}}>  © 2019 Copyright - The Hobby's</p>
         
    
      </div>
    );
  }
}
export default withRouter (AppFooter)