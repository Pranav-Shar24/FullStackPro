import { Component } from 'react';
import TodoDataService from '../../t-api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            message: null
        };
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.refreshTodos()
        console.log(this.state)

    }

    refreshTodos() {
        let userName = AuthenticationService.getUserLoggedUserName()
        TodoDataService.retreiveAllUser(userName)
            .then(
                response => {
                    console.log(response)
                    this.setState({
                        todos: response.data
                    })
                }
            )
    }

    deleteTodoClicked(id) {
        let userName = AuthenticationService.getUserLoggedUserName()
        console.log(id + " <--id + name-->" + userName)
        TodoDataService.deleteTodo(userName, id)
            .then(
                response => {
                    this.setState({
                        message: `Deleted the todo with ${id}, successfully`
                    })
                    this.refreshTodos()
                }
            )

    }

    updateTodoClicked(id) {
        console.log("update " + id)
        this.props.history.push(`/todos/${id}`);

    }
    addTodoClicked() {
        this.props.history.push(`/create`)
    }

    render() {
        return (
            <div>
                <h1>List of My Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>

                                <th>Description</th>
                                <th>isCompleted?</th>
                                <th>Targe Date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map(
                                todo => <tr key={todo.id}>

                                    <td>{todo.description.toString()}</td>
                                    <td>{todo.complete.toString()}</td>
                                    <td> {moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                    <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>UPDATE</button></td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>DELETE</button></td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-outline-success" onClick={this.addTodoClicked}>ADD</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ListComponent