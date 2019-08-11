import React, { Component, createRef } from 'react'
import { Label, FormGroup, Input, Container, Button, Form, Col } from 'reactstrap';
import AppHeader from '../common/AppHeader';
import Dropzone from 'react-dropzone'
import axios from "axios";
import AppFooter from '../common/AppFooter';

axios.defaults.baseURL = 'https://historic-acadia-33199.herokuapp.com'
const dropzoneRef = createRef()

class Update extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: "",
            username: "",
            email: "",
            user_foto: ""
          
          


        }
        //this.changePassword = this.changePassword.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
     
        this.updateProfile = this.updateProfile.bind(this)

        //this.changeConfirmPassword = this.changeConfirmPassword.bind(this)



    }
    updateProfile(event) {
        event.preventDefault();

        // if (this.state.password === this.state.confirmpassword) {
        axios
            .put(`https://historic-acadia-33199.herokuapp.com/api/user/${localStorage.getItem('USER_ID')}`, 
            
            {

                email: this.state.email,
                username: this.state.username,
                user_foto: this.state.image.url,
            },
            {
                headers: {
                    Authorization: localStorage.getItem('JWT_TOKEN')
                  }
              
            }
           
            )
            .then((res) => {
                console.log(res, "the res");
                alert('Informasi Akun Anda Berhasil diubah');
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
            formData.append("tags", 'USER_FOTO'); // Add tags for the images - {Array}
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
    // changePassword(event) {
    //     this.setState({
    //         password: event.target.value
    //     })
    // }
    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    changeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    // changeFoto(event) {
    //     this.setState({
    //         user_foto: event.target.value
    //     })
    // }
 
        //  else if (this.state.checkI) { this.setState({

        //     roles: event.target.value,
        //     check: this.state.check

        //     });}
        //     else { this.setState({

        //         check: false,
        //         checkI: false

        //         });}
    

    render() {
        let imageUpload
        

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
        } else {
            imageUpload = <img style={{ width: 50 }} src={this.state.image.url} alt="" srcset="" />
        }
        return (
            <div>
                <AppHeader />

                <div className='bodyupdate'>
                    <Container style={{ textAlign: 'center' }}>
                        <h2 style={{ margin: '30px' }}>Pengaturan Akun</h2>
                        <Form style={{ width: '500px', margin: 'auto' }}>
                            <FormGroup row>
                                <Col sm='3' style={{ textAlign: 'left' }}><Label for='username'>Username Baru: </Label></Col>
                                <Col sm='9'><Input name='username' type='username' value={this.state.username} onChange={this.changeUsername} placeholder="username" /></Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm='3' style={{ textAlign: 'left' }}><Label for='email'>Email Baru: </Label></Col>
                                <Col sm='9'><Input name='email' type='email' value={this.state.email} onChange={this.changeEmail} placeholder="email" /></Col>
                            </FormGroup>
                           
                    
                            <FormGroup row>
                                <Col sm='3' style={{ textAlign: 'left' }}><Label for='user_foto'>Profile Photo Baru: </Label></Col>
                                <Col sm='5'> {imageUpload} </Col>
                            </FormGroup>
                           

                            <Button onClick={this.updateProfile} color='submit' className="btn-primary">Simpan Perubahan</Button>
                        </Form>

                    </Container>
                </div>
                <AppFooter />
            </div>

        );


    };
}
export default Update;