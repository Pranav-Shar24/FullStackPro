import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ListComponent from './ListComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import TodoComponent from './TodoComponent.jsx';
import CreateComponent from './CreateComponent.jsx';


class TodoApp extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <HeaderComponent></HeaderComponent>
                    <div className="content">
                        <Switch>
                            <Route path="/" exact component={LoginComponent}></Route>
                            <Route path="/login" component={LoginComponent}></Route>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/todos" component={ListComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/create" component={CreateComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}></AuthenticatedRoute>

                            <Route component={ErrorComponent}></Route>
                        </Switch>
                    </div>
                    <FooterComponent></FooterComponent>
                </div>
            </BrowserRouter>
        )
    }
}


export default TodoApp;