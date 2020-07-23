import React, { Component } from 'react';
import '../admin/BusinessManager/Admin.css';
import { Redirect } from 'react-router-dom';
import axios from 'axios'; 
import { ButtonToolbar } from 'react-bootstrap';
import SelectManagerType from './SelectManagerType'

class SignIn extends Component {
    state = { ManagerTypeShow: false, phone: '', password: '', flag: false, isError: false, userName: '' }
    token = localStorage.usertoken;
    phone = ''
    userName = ''

    login = () => {

        axios.post('/users/login', {
            phone: this.state.phone,
            password: this.state.password,
        }).then(res => {
            console.log(res.config.data);


            console.log(res.config.data.split(',')[0].split(':')[1].split('"')[1]);
            this.phone = res.config.data.split(',')[0].split(':')[1].split('"')[1];
            console.log(this.phone);
            if (res.status === 200) {
                localStorage.setItem("usertoken", JSON.stringify(res.data));
                this.setState({ flag: true })
                console.log(this.token)
                // this.props.userName(this.phone)/
                this.token = res.data.token
                console.log(this.token);
                this.props.log(true)
                this.getDetilsFromUserToken(this.token)
            }
            else {
                console.log(`error code ${res.status}`);
                this.setState({ isError: true });
            }
        }).catch(err => {
            console.log(err);
            this.setState({ isError: true });
        })
    }

    getDetilsFromUserToken = () => {
        console.log(this.token);

        axios.get('/Users/me', { headers: { 'x-access-token': this.token } })

            .then(res => {

                this.userName = res.data.firstName
                this.phone = res.data.phone
                console.log(this.userName, this.phone);
                this.props.logs(this.userName, this.phone, this.token)
                console.log(this.userName, this.phone);

                console.log(res.data);



                // this.userphone = res.data.phone
            }).catch(err => {

                console.log(err);
            })

    }

    render() {
        let ManagerTypeClose = () => this.setState({ ManagerTypeShow: false })
        // const disabled = !this.state.phone || !this.state.password

        return (
            <div>

                {this.state.flag ?
                    <Redirect to='/Home1' />
                    : ''}
                <div class="login-box">
                    <h1>לקוח קיים</h1>
                    <form>
                        <div className='user-box'>
                            <input type="text" pattern="[789][0-9]{9}" id="exampleInputphone1" aria-describedby="phoneHelp" placeholder='טלפון נייד' name='username'
                                onChange={event => this.setState({ phone: event.target.value })} required />
                            <small id="phoneHelp" className="form-text text-muted">We'll never share your phone with anyone else.</small>
                        </div>
                        <div className='user-box'>
                            <input type="password" id="exampleInputPassword1" placeholder='password'
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                onChange={event => this.setState({ password: event.target.value })} required/>
                        </div>
{/* disabled={disabled}  */}
                        <button type="button" className="button-login"
                            onClick={() => {
                                this.login()
                                // this.getDetilsFromUserToken()
                            }}
                        >Sign - In</button>


                        {this.state.isError ? <p style={{ color: 'red' }}>login error</p> : ''}

                        <br /> <br />

                        <p className='forgotPassword'>forgot your password</p>

                        <ButtonToolbar>
                            <button className='btnTypeManager' onClick={() => {
                                this.setState({ ManagerTypeShow: true })
                            }}>מנהל / עובד</button>
                            <SelectManagerType
                                show={this.state.ManagerTypeShow}
                                onHide={ManagerTypeClose}
                            />
                        </ButtonToolbar>
                    </form>

                </div>
            </div>
        )
    }


}


export default SignIn;