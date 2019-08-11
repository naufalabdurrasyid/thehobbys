import React, { Component } from 'react'
import { Label, FormGroup, Input, Container, Button, Form, Col } from 'reactstrap';
import AppHeader from '../common/AppHeader';
import AppFooter from '../common/AppFooter';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import isLoggedIn from '../helpers/is_logged_in';
axios.defaults.baseURL = 'https://historic-acadia-33199.herokuapp.com'

class PembayaranDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
          nama_lengkap: "",
        nomor_ktp: "",
        alamat_lengkap: "",
        nomor_hp: "",
        email_konfirmasi: "",
        metode_pembayaran:"",
        
        }
        this.changenomor_ktp = this.changenomor_ktp.bind(this)
        this.changenomor_hp = this.changenomor_hp.bind(this)

        this.changenama_lengkap = this.changenama_lengkap.bind(this)
        this.changeemail_konfirmasi = this.changeemail_konfirmasi.bind(this)
        this.changemetode_pembayaran = this.changemetode_pembayaran.bind(this)
        //this.changeFoto = this.changeFoto.bind(this)
        this.pembayaranDetail = this.pembayaranDetail.bind(this)

        //this.changeConfirmnomor_ktp = this.changeConfirmnomor_ktp.bind(this)



    }
    pembayaranDetail(event) {
        event.preventDefault();
        // if (this.state.nomor_ktp === this.state.confirmnomor_ktp) {
        axios
            .post(`https://historic-acadia-33199.herokuapp.com/api/user/invest/data/${this.props.match.params.id}`,
            {

                   nama_lengkap: this.state.nama_lengkap,
        nomor_ktp: this.state.nomor_ktp,
        alamat_lengkap: this.state.alamat_lengkap,
        nomor_hp: this.state.nomor_hp,
        email_konfirmasi: this.state.email_konfirmasi,
        metode_pembayaran: this.state.metode_pembayaran,
        jumlah_lot: localStorage.getItem('jumlahLot'),
        posts: localStorage.getItem('komoditas')
            },
           
            {
                headers: {
                    Authorization: localStorage.getItem('JWT_TOKEN')
                  }
              
            }
        
      )
        .then((res) => {
            console.log(res, "the res");
            alert('investasi anda tersimpan, detail pembayaran akan segera kami kirim ke email');
          
            localStorage.removeItem('lotId')
            localStorage.removeItem('jumlahLot')
            localStorage.removeItem('komoditas')
            this.props.history.push('/investasi')

        })
        
        .catch(function (error) {
            console.log("the error", error);
            alert("error", error);
        });
    }
    
    changenomor_ktp(event) {
        this.setState({
            nomor_ktp: event.target.value
        })
    }
    changenomor_hp(event) {
        this.setState({
            nomor_hp: event.target.value
        })
    }
    changeemail_konfirmasi(event) {
        this.setState({
            email_konfirmasi: event.target.value
        })
    }
    changenama_lengkap(event) {
        this.setState({
            nama_lengkap: event.target.value
        })
    }
    changemetode_pembayaran(event) {
        this.setState({
            metode_pembayaran: event.target.value
        })
    }
    

    render() {
        if (!isLoggedIn () || localStorage.getItem('Roles') === 'Peternak' ) {
            return (alert("Maaf peternak tidak dapat melakukan investasi") , <Redirect to='/' /> ) 
         } 
       
     
        
        return (
            <div>
                <AppHeader />

                <div className='bodylogin'>
                    <Container style={{ textAlign: 'center' }}>
                        <h2 style={{ margin: '30px' }}>Detail Investor</h2>
                        <Form style={{ width: '800px', margin: 'auto' }}>
                            <FormGroup row>
                                <Col sm='3' style={{ textAlign: 'left' }}><Label for='nama_lengkap'>Nama Lengkap: </Label></Col>
                                <Col sm='6'><Input name='nama_lengkap' type='nama_lengkap' value={this.state.nama_lengkap} onChange={this.changenama_lengkap} placeholder="Nama Lengkap" /></Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm='3' style={{ textAlign: 'left' }}><Label for='email_konfirmasi'>Email Konfirmasi: </Label></Col>
                                <Col sm='6'><Input name='email_konfirmasi' type='email_konfirmasi' value={this.state.email_konfirmasi} onChange={this.changeemail_konfirmasi} placeholder="Email Konfirmasi" /></Col>
                            </FormGroup>
                            <FormGroup row>
                            <Col sm='3' style={{ textAlign: 'left' }}><Label for='metode_pembayaran'>Metode Pembayaran: </Label></Col>
                            <Col sm='1'>
                                <FormGroup check>
                                
                                    <Label check>
                                    <Input type="radio" name="metode_pembayaran" value= "Transfer" onChange={this.changemetode_pembayaran} />{' '}Transfer
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="metode_pembayaran" value="Tunai" onChange={this.changemetode_pembayaran}/>{' '}Tunai
                                    </Label>
                                    
                                </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm='3' style={{ textAlign: 'left' }} ><Label for='nomor_ktp'>Nomor KTP: </Label></Col>
                                <Col sm='6'><Input name='nomor_ktp' type='nomor_ktp' value={this.state.nomor_ktp} onChange={this.changenomor_ktp} placeholder="Nomor KTP" /></Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm='3' style={{ textAlign: 'left' }} ><Label for='nomor_hp'>Nomor HP: </Label></Col>
                                <Col sm='6'><Input name='nomor_hp' type='nomor_hp' value={this.state.nomor_hp} onChange={this.changenomor_hp} placeholder="Nomor HP" /></Col>
                            </FormGroup>
                        

                            <Button onClick={this.pembayaranDetail} color='submit' className="btn-primary">Simpan Investasi</Button>
                        </Form>

                    </Container>
                </div>

                <AppFooter />
            </div>

        );


    };
}
export default PembayaranDetail;