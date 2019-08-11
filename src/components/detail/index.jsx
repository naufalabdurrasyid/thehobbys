import React, { Component } from 'react';
import {
  Card, CardImg,
  CardBody, Container, Button, FormGroup, Col,
} from 'reactstrap';
import axios from 'axios';
import AppHeader from '../common/AppHeader';
import isLoggedIn from '../helpers/is_logged_in';
import { Redirect } from 'react-router-dom';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import AppFooter from '../common/AppFooter';

class DetailPage extends Component {

  constructor(props) {
    super(props);
    this.state = {

      value: 0,
      jumlah_lot: "",
      items: [


      ]



    };
    this.postLot = this.postLot.bind(this)
    this.changeLot = this.changeLot.bind(this)
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };


  handleChangeComplete = () => {
    console.log('Change event completed')
  };
  changeLot = value => {
    this.setState({
      value: value
    })
  }

  componentDidMount() {
    axios.get(`https://historic-acadia-33199.herokuapp.com/api/komoditas/data/${this.props.match.params.id}`
    )
      .then(res => {
        this.setState({
          items: res.data.data
        })
        console.log(res, "sgs")
      });
  }
  postLot(event) {
    event.preventDefault();
    // if (this.state.asal === this.state.confirmasal) {

    axios
      .post(`https://historic-acadia-33199.herokuapp.com/api/user/invest/lot/${this.props.match.params.id}`,

        {
          jumlah_lot: this.state.value,
          //.value buat nangkep value yang sesuai sama value dr onChange slidernya
        },
        {
          headers: {
            Authorization: localStorage.getItem('JWT_TOKEN')
          }

        }

      )
      .then((res) => {
        console.log(res, "the res");
        alert('jumlah lot anda tersimpan');
        this.setState({
          items: res.data.result
        })
        localStorage.setItem('lotId', res.data.result._id)
        localStorage.setItem('jumlahLot', res.data.result.jumlah_lot)
        localStorage.setItem('komoditas', res.data.result.posts)

        this.props.history.push(`/investasi/pembayaran/${localStorage.getItem('lotId')}`)

      })

      .catch(function (error) {
        console.log("the error", error);
        alert("error", error);
      });
  }








  render() {

    if ( localStorage.getItem('Roles') === 'Peternak') {
      return (alert("Maaf peternak tidak dapat melakukan investasi"), <Redirect to='/' />)
    }
    if ( !isLoggedIn() ) {
      return (alert("Maaf anda harus login terlebih dahulu"), <Redirect to='/login' />)
    }
    
    console.log(this.props.match.params.id)

    const { foto, nama_ternak, harga, lot_tersedia, asal } = this.state.items

    const { value } = this.state
    //let total = value * harga
    // let total= harga * value

    return (

      <div>
        <AppHeader />
        <div className='bodylogin'>
          <Container>
            <br />
            <h1 style={{ margin: 'auto', textAlign: 'center' }}>Monggo Investasi</h1>

            <hr />
            <Col sm='7' style={{ margin: 'auto' }}>
              <Card  >
                <CardImg top width="100%" height="250px" src={foto} alt="Card image cap" />

                <CardBody>
                  <tr>

                    <th>Nama Ternak </th>
                    <tr ></tr>
                    <th>: {nama_ternak}</th>



                  </tr>
                  <tr>
                    <th>Asal</th>
                    <tr></tr>
                    <th>: {asal}</th>

                  </tr>
                  <tr>
                    <th >Harga/Lot</th>
                    <th></th>
                    <th>: Rp. {harga}</th>

                  </tr>

                  <tr>
                    <th >Lot yang tersedia</th>
                    <th></th>
                    <th>: {lot_tersedia}</th>

                  </tr>
                  <tr>
                    <th >Jumlah lot yang diinginkan</th>
                    <th></th>
                    <th>: {value}</th>

                  </tr>


                  <div className='slider'>
                    <Slider
                      min={0}
                      max={20}
                      value={value}
                      onChangeStart={this.handleChangeStart}
                      onChange={this.changeLot}
                      onChangeComplete={this.handleChangeComplete}
                    />

                  </div>
                  
                  <FormGroup row style={{ textAlign: 'center' , color: 'white' ,background: 'linear-gradient(90deg,#0a3565,#1782d9)'}}>
                   <Col  >Total Harga : Rp. {harga * value}</Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm='12' style={{ textAlign: 'center' }}>   <Button onClick={this.postLot} color='submit' className="btn-primary">Submit Lot</Button></Col>
                  </FormGroup>


                </CardBody >


              </Card>
            </Col>
          </Container>
        </div>
        <AppFooter />
      </div>
    );


  }

}

export default DetailPage;