import React, { Component, createRef } from 'react'
import { Label, FormGroup, Input, Container, Button, Form, Col } from 'reactstrap';
import AppHeader from '../common/AppHeader';
import Dropzone from 'react-dropzone'
import axios from "axios";
import { Redirect } from 'react-router-dom';
import isLoggedIn from '../helpers/is_logged_in';
import AppFooter from '../common/AppFooter';
//import CurrencyInput from 'react-currency-input';

axios.defaults.baseURL = 'https://historic-acadia-33199.herokuapp.com'
const dropzoneRef = createRef()

class PostKomoditas extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
            author: "",
            image: "",
            foto: "",
            nama_ternak: "",
            asal: "",
            harga: "",
            lot_tersedia: ""



        }
        this.changeAsal = this.changeAsal.bind(this)
        this.changeNama_ternak = this.changeNama_ternak.bind(this)
        this.changeHarga = this.changeHarga.bind(this)
        this.changeLot_tersedia = this.changeLot_tersedia.bind(this)
        //this.changeFoto = this.changeFoto.bind(this)
        this.postKomoditas = this.postKomoditas.bind(this)

        //this.changeConfirmasal = this.changeConfirmasal.bind(this)



    }
  
    postKomoditas(event) {
        event.preventDefault();
        // if (this.state.asal === this.state.confirmasal) {
           
        axios
            .post("https://historic-acadia-33199.herokuapp.com/api/komoditas/post", 
    
                {
                    
                    author: this.state.decoded,
                    foto: this.state.image.url,
                    nama_ternak: this.state.nama_ternak,
                    asal: this.state.asal,
                    harga: this.state.harga,
                    lot_tersedia: this.state.lot_tersedia,
                },
                {
                    headers: {
                        Authorization: localStorage.getItem('JWT_TOKEN')
                      }
                  
                }
            
          )
            .then((res) => {
                console.log(res, "the res");
                alert('Komoditas anda berhasil di post');
                this.setState({
                    datasWithImg: res.data
                })
                this.props.history.push('/')

            })
            .catch(function (error) {
                console.log("the error", error);
                alert("error", error);
            });
    }
    handleUploadImages = images => {
        // uploads is an array that would hold all the post methods for each image to be uploaded, then we'd use axios.all()
        const uploads = images.map(image => {
            // our formdata
            const formData = new FormData();
            formData.append("file", image);
            formData.append("tags", 'KOMODITAS_FOTO'); // Add tags for the images - {Array}
            formData.append("upload_preset", 'efx7bxvu'); // Replace the preset name with your own
            formData.append("api_key", "149952854421636"); // Replace API key with your own Cloudinary API key
            formData.append("timestamp", (Date.now() / 1000) | 0);

            // Replace cloudinary upload URL with yours
            return axios.post(
                "https://api.cloudinary.com/v1_1/dcnhkq6qt/image/upload",
                formData,
                { headers: { "X-Requested-With": "XMLHttpRequest" } })
                .then(response => {
                    this.setState({
                        image: response.data
                    })
                })
        });
        axios.all(uploads).then(() => {
            // ... do anything after successful upload. You can setState() or save the data
            console.log(uploads.url)
        });
    }
    changeAsal(event) {
        this.setState({
            asal: event.target.value
        })
    }
    changeHarga(event){
        this.setState({
            harga: event.target.value
        })
    }
    changeNama_ternak(event) {
        this.setState({
            nama_ternak: event.target.value
        })
    }
    changeLot_tersedia(event) {
        this.setState({
            lot_tersedia: event.target.value
        })
    }
    // changeFoto(event) {
    //     this.setState({
    //         user_foto: event.target.value
    //     })
    // }

    //  else if (this.state.checkI) { this.setState({

    //     lot_tersedia: event.target.value,
    //     check: this.state.check

    //     });}
    //     else { this.setState({

    //         check: false,
    //         checkI: false

    //         });}


    render() {

        if (!isLoggedIn () || localStorage.getItem('Roles') === 'Investor' ) {
            return (<Redirect to='/' /> ) }
        let imageUpload
        console.log("lot_tersedia", this.state.lot_tersedia)

        console.log('images', this.state.image.url)
        if (this.state.image.url === undefined) {
            imageUpload =
                <Dropzone ref={dropzoneRef}
                    onDrop={this.handleUploadImages}
                >
                    {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <img style={{ width: 50 }} src="https://image.flaticon.com/icons/png/512/3/3901.png" alt="" srcset="" />
                        </div>
                    )}
                </Dropzone>
        } 
        else {
            imageUpload = <img style={{ width: 50 }} src={this.state.image.url} alt="" srcset="" />
        }
        return (
            <div>
                <AppHeader />
<br/>
                <div className='bodylogin'>
                    <Container  style={{ textAlign: 'center' }}>
                        <h2 >Pendaftaran Komoditas</h2>
                        <hr/>
                        <Form style={{ width: '500px', margin: 'auto' }}>
                            <FormGroup row>
                                <Col sm='3' style={{ textAlign: 'left' }}><Label for='nama_ternak'>Nama Ternak: </Label></Col>
                                <Col sm='9'><Input name='nama_ternak' type='nama_ternak' value={this.state.nama_ternak} onChange={this.changeNama_ternak} placeholder="nama ternak" /></Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm='4' style={{ textAlign: 'left' }}><Label for='harga'>Harga/Lot: </Label></Col>
                                <span>Rp.</span><Col sm='6'><Input name='harga'  type='number' value={this.state.harga} onChange={this.changeHarga} placeholder="harga" /></Col>                            </FormGroup>
                            <FormGroup row>
                                <Col sm='3' style={{ textAlign: 'left' }}><Label for='lot_tersedia'>Lot Tersedia: </Label></Col>
                                <Col sm='9'><Input name='lot_tersedia' type='number' value={this.state.lot_tersedia} onChange={this.changeLot_tersedia} placeholder="lot tersedia" /></Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm='3' style={{ textAlign: 'left' }} ><Label for='asal'>Asal: </Label></Col>
                                <Col sm='9'><Input name='asal' type='asal' value={this.state.asal} onChange={this.changeAsal} placeholder="asal" /></Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm='3' style={{ textAlign: 'left' }}><Label for='foto'>Foto Komoditas: </Label></Col>
                                <Col sm='5'> {imageUpload} </Col>
                            </FormGroup>
                            {/* <FormGroup row>
                                <Col sm='3' style={{ textAlign: 'left' }}><Label for="user_foto">Profile Photo</Label></Col>
                                <Col sm='9'><Input type="user_foto" name="user_foto" value={this.state.user_foto} onChange={this.changeFoto}/></Col>
                                </FormGroup>
                                 */}

                            <Button onClick={this.postKomoditas} color='submit' className="btn-primary">Daftarkan Komoditas</Button>
                        </Form>

                    </Container>
                </div>
                <AppFooter />
            </div>

        );


    };
}
export default PostKomoditas;