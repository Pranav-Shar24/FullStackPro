import React, { Component } from 'react';
import moment from 'moment';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import TodoDataService from '../../t-api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class TodoComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
        this.getExistingDataForUpadateTodos = this.getExistingDataForUpadateTodos.bind(this)
    }

    getExistingDataForUpadateTodos() {
        let userName = AuthenticationService.getUserLoggedUserName()
        console.log("UserName  " + userName)
        console.log("Id  " + this.state.id)
        TodoDataService.retreiveUserById(userName, this.state.id)
            .then(
                response => {
                    console.log("Respnse is" + response)
                    this.setState({
                        description: response.data.description,
                        targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')


                    })
                }
            )
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.getExistingDataForUpadateTodos()
        console.log(this.state)

    }

    onSubmit(values) {
        console.log(values)
        TodoDataService.updateTodo(this.state.id, {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }).then(
            () => {
                this.props.history.push('/todos')
            }
        )

    }
    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = "Enter a Description"
        } else if (values.description.length < 5) {
            errors.description = "Should have more than 5 charcters"
        }

        if (!moment(values.targetDate).isValid) {
            errors.targetDate = "Enter a valid date"
        }

        console.log(errors)
        return errors
    }
    render() {
        let { description, targetDate } = this.state
        return (
            <div>
                <h1>Todos</h1>
                <div className="container">
                    <Formik initialValues={{ description, targetDate }}
                        onSubmit={this.onSubmit} validate={this.validate}
                        validateOnBlur={false} validateOnChange={false}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning"></ErrorMessage>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <ErrorMessage name="targetDate" component="div"
                                        className="alert alert-warning"></ErrorMessage>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate" />
                                    </fieldset>

                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>

                            )
                        }
                    </Formik>
                </div>
            </div>

        );
    }
}
export default TodoComponent