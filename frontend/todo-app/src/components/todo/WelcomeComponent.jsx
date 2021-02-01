import { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../../t-api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retrieveMyMessage = this.retrieveMyMessage.bind(this)
        this.state = {
            welcomeMessage: '',
            hasErrorOccured: false
        };
        this.state = {
            errorMsg: ''
        };

        this.handleSucessfulResponse = this.handleSucessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
    }
    render() {
        return (
            <>
                <h1>Welcome</h1>
                <div className="container"> Welcome <b>{this.props.match.params.name}</b>.
            You can manage your todos from <Link to="/todos">here.</Link>
                </div>

                <div className="container">
                    Click here to get a customized Message
            <button className="btn btn-success" onClick={this.retrieveMyMessage}>Get Welcome msg</button>
                </div>

                <div className="container">
                    {this.state.welcomeMessage}
                </div>

                {this.state.hasErrorOccured && <div className="alert alert-warning">Connect to Support: {this.state.errorMsg}
                </div>}
            </>
        );
    }
    retrieveMyMessage() {
       
        HelloWorldService.excecuteHelloWorldWithPathVariableService(this.props.match.params.name)
            .then(response => this.handleSucessfulResponse(response))
            .catch(error => this.handleError(error))
    }

    handleSucessfulResponse(response) {
        console.log(response)
        this.setState({ welcomeMessage: response.data.message })
    }

    handleError(error) {
        console.log(error.response)
        let errorMessage = ''
        if (error.message) {
            errorMessage += error.Message
        }
        if (error.response && error.response.data) {
            errorMessage += error.response.data.message
        }
        this.setState({ welcomeMessage: errorMessage })
    }
}



export default WelcomeComponent