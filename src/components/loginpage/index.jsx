import React, { Component } from 'react';
import { FormGroup, Label, Col, Input, Button, Form, NavLink, Container } from 'reactstrap';
import AppHeader from '../common/AppHeader';
import store from 'store';
import { Redirect, Link } from 'react-router-dom';
import isLoggedIn from '../helpers/is_logged_in';
import axios from 'axios'
import AppFooter from '../common/AppFooter';

axios.defaults.baseUrl = 'https://historic-acadia-33199.herokuapp.com'


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            check: false,
            hidden: true
        };

        this.handleChange = this.handleChange.bind(this);

        this.handleChecked = this.handleChecked.bind(this);

        this.onSubmit = this.onSubmit.bind(this)
    }


    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        let data = {};
        data[name] = value;
        this.setState(data);
    }

    handleChecked = () => {
        this.setState({
            check: !this.state.check,
            hidden: !this.state.hidden
        });
    }
    onSubmit(e) {
        e.preventDefault();
        axios
            .post("https://historic-acadia-33199.herokuapp.com/api/user/login", {
                username: this.state.username,
                password: this.state.password
            })


            .then((res) => {
                console.log(res)
                localStorage.setItem('JWT_TOKEN', res.data.token)
                localStorage.setItem('USER_ID', res.data.id)
                localStorage.setItem('Roles', res.data.roles)
                store.set('loggedIn', true);
                //ini tu berurutan kalau this propsnya diatas local set item itu bakal duluan
                this.props.history.push('/')
                alert(res.data.message);

            })

            .catch(function (err) {
                //console.log(res.data.message);
                alert("email atau password anda salah", err);
            });
        this.setState({
            username: "",
            password: ""
        })

    }

    render() {


        if (isLoggedIn()) {
            return (
                <Redirect to='/' />
            )
        } else {
            return (
                <div >

                  <AppHeader /> 
                  <div className='bodylogin'>
                  <Container >
                    <br/>
                    <h1 style={{ width: '100px', margin: 'auto', textAlign: 'center' }}>Login</h1>
                   <br/>
        <body >
                            
                     
                        <Form style={{ width: '400px', margin: 'auto' }}>
                            <FormGroup>
                               Username:<br />
                                <Input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Masukkan Username" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Password: </Label>
                                <Input type={this.state.hidden ? "password" : "text"} required="required" name="password" value={this.state.password} placeholder="Kata Sandi Anda" onChange={this.handleChange}
                                />
                                <Label check sm={12}>
                                    <Col sm={12}>
                                        <Input type="checkbox" checked={this.state.check} onChange={this.handleChecked} />lihat kata sandi
                                 </Col>
                                </Label>
                            </FormGroup>

                            <div align="center">
                                <Button onClick={this.onSubmit} color="submit" className="btn-primary">MASUK</Button>{" "}
                            </div>
                            <div align="center">

                                <NavLink ><Link to='/register' className="text-info">Belum Punya Akun? Ayo Sign Up</Link></NavLink>

                            </div>
                        </Form>
                        </body>
                    
                    </Container>
                    </div>
                <AppFooter /> 
                
                </div>
                
            );
        }
    }
};


export default LoginPage;