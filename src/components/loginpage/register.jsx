import React, { Component, createRef } from 'react'
import { Label, FormGroup, Input, Container, Button, Form, Col } from 'reactstrap';
import AppHeader from '../common/AppHeader';
import Dropzone from 'react-dropzone'
import axios from "axios";
import AppFooter from '../common/AppFooter';

axios.defaults.baseURL = 'https://historic-acadia-33199.herokuapp.com'
const dropzoneRef = createRef()

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: "",
            user_foto: "",
            password: "",
            email: "",
            username: "",
            roles: ""
          


        }
        this.changePassword = this.changePassword.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeRoles = this.changeRoles.bind(this)
        //this.changeFoto = this.changeFoto.bind(this)
        this.signUp = this.signUp.bind(this)

        //this.changeConfirmPassword = this.changeConfirmPassword.bind(this)



    }
    signUp(event) {
        event.preventDefault();
        // if (this.state.password === this.state.confirmpassword) {
        axios
            .post("https://historic-acadia-33199.herokuapp.com/api/user", {

                email: this.state.email,
                password: this.state.password,
                username: this.state.username,
                roles: this.state.roles,
                //user_foto: this.state.user_foto,
                user_foto: this.state.image.url
            })
            .then((res) => {
                console.log(res, "the res");
                alert('Anda berhasil membuat akun. Selamat Datang di Monggovest. Silahkan Login');
                this.setState({
                    datasWithImg: res.data
                })
                this.props.history.push('/login')

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
    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
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
    changeRoles(event) {
        this.setState({
            roles: event.target.value
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
        console.log("roles", this.state.roles)

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

                <div className='bodysignup'>
                    <Container style={{ textAlign: 'center' }}>
                        <h2 style={{ margin: '30px' }}>Sign Up</h2>
                        <Form style={{ width: '500px', margin: 'auto' }}>
                            <FormGroup row>
                                <Col sm='3' style={{ textAlign: 'left' }}><Label for='username'>Username: </Label></Col>
                                <Col sm='9'><Input name='username' type='username' value={this.state.username} onChange={this.changeUsername} placeholder="username" /></Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm='3' style={{ textAlign: 'left' }}><Label for='email'>Email: </Label></Col>
                                <Col sm='9'><Input name='email' type='email' value={this.state.email} onChange={this.changeEmail} placeholder="email" /></Col>
                            </FormGroup>
                            <FormGroup row>
                            <Col sm='3' style={{ textAlign: 'left' }}><Label for='roles'>Roles: </Label></Col>
                            <Col sm='2'><FormGroup check>
                                
                                    <Label check>
                                    <Input type="radio" name="roles" value= "Peternak" onChange={this.changeRoles} />{' '}
                                        Peternak
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="roles" value="Investor" onChange={this.changeRoles}/>{' '}
                                        Investor
                                    </Label>
                                    
                                </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm='3' style={{ textAlign: 'left' }} ><Label for='password'>Password: </Label></Col>
                                <Col sm='9'><Input name='password' type='password' value={this.state.password} onChange={this.changePassword} placeholder="password" /></Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm='3' style={{ textAlign: 'left' }}><Label for='user_foto'>Profile Photo: </Label></Col>
                                <Col sm='5'> {imageUpload} </Col>
                            </FormGroup>
                            {/* <FormGroup row>
                                <Col sm='3' style={{ textAlign: 'left' }}><Label for="user_foto">Profile Photo</Label></Col>
                                <Col sm='9'><Input type="user_foto" name="user_foto" value={this.state.user_foto} onChange={this.changeFoto}/></Col>
                                </FormGroup>
                                 */}

                            <Button onClick={this.signUp} color='submit' className="btn-primary">Sign Up !!!</Button>
                        </Form>

                    </Container>
                </div>
                <AppFooter />
            </div>

        );


    };
}
export default SignUp;