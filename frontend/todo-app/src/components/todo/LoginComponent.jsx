import { Component } from 'react';
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            userName: 'Enter User Name',
            passWord: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        };
        /*  this.handleUserNameChange = this.handleUserNameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this) */

        this.handleEventChange = this.handleEventChange.bind(this);
        this.LoginClicked = this.LoginClicked.bind(this);
    }
    /*
        handleUserNameChange(event){
            console.log(event.target.value)
            this.setState({
                userName:event.target.value
            })
        }
    
        handlePasswordChange(event){
            console.log(event.target.value)
            this.setState({
                passWord: event.target.value
            })
    
        }
        
        */
    // handling event change with one common method
    handleEventChange(event) {
        console.log(this.state);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    LoginClicked() {
        console.log("Login button clicked");
        /* 
                // hardcoding the login values for now
                 if (this.state.userName === "pranShar" && this.state.passWord === "dummy") {
                     console.log("success");
                     AuthenticationService.registerSuccessfulLogin(this.state.userName,this.state.passWord)
                    this.props.history.push(`/welcome/${this.state.userName}`);
                     this.setState({
                         showSuccessMessage:true
                     })
                    this.setState({
                       hasLoginFailed:false
                })
                 } else {
                     console.log("failed!!");
                     this.setState({
                         showSuccessMessage: false
                     });
                     this.setState({
                         hasLoginFailed: true
                     });
                 }
        
                // Updating the code to remove hard coded values for login 
             AuthenticationService.executeBasicAuthService(this.state.userName, this.state.passWord)
                 .then(
                        () => {
                            console.log("success");
                            AuthenticationService.registerSuccessfulLogin(this.state.userName, this.state.passWord)
                            this.props.history.push(`/welcome/${this.state.userName}`)
                        })
                    .catch(
                        () => {
                            console.log("failed!!");
                            this.setState({ showSuccessMessage: false });
                         this.setState({ hasLoginFailed: true });
                        }
                     )
        
         */
        // upadting the code to use JWT Auth
        AuthenticationService.executeJWTAuthService(this.state.userName, this.state.passWord)
            .then(
                (response) => {
                    console.log("success");
                    AuthenticationService.registerSuccessfulLoginForJWT(this.state.userName, response.data.token)
                    this.props.history.push(`/welcome/${this.state.userName}`)
                })
            .catch(
                () => {
                    console.log("failed!!");
                    this.setState({ showSuccessMessage: false });
                    this.setState({ hasLoginFailed: true });
                }
            )

    }
    render() {
        return (

            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}

            User Name: <input type="text" name="userName" value={this.state.userName} onChange={this.handleEventChange} />
            Password:   <input type="password" name="passWord" value={this.state.passWord} onChange={this.handleEventChange} />
                    <button className="btn btn-success" onClick={this.LoginClicked}>Login</button>
                </div>
            </div>
        );
    }
}
export function ShowInvalidCredentials(props) {
    if (props.hasLoginFailed) {
        return <div>Invalid Credentials</div>
    } else {
        return null
    }
}

export default LoginComponent

