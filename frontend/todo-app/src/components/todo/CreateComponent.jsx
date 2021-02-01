
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import TodoDataService from '../../t-api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';
import moment from 'moment';
class CreateComponent extends Component {

    constructor(props) {
        super(props)
        let userName = AuthenticationService.getUserLoggedUserName()
        this.state = {
            userName: userName,
            id: '',
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }


    componentDidMount() {
        console.log("check")
    }
    onSubmit(values) {
        console.log(values)
        let userName = AuthenticationService.getUserLoggedUserName()
        TodoDataService.createTodos(userName, {
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
        let { description, targetDate } = ''
        return (
            <div>
                <h1>Todos</h1>
                <div className="container">
                    <Formik
                        onSubmit={this.onSubmit} initialValues={{ description, targetDate }} validate={this.validate}
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
                                    <fieldset className="form-group">
                                        <label>IsCompleted</label>
                                        <Field className="form-control" type="boolean" name="complete" />
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
export default CreateComponent