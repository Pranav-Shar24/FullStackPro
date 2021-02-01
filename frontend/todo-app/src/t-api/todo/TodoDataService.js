import axios from 'axios';
import { API_URI } from '../../components/todo/TodoConstants'

class TodoDataService {

    retreiveAllUser(name) {
        console.log('get all user based on user name')
        return axios.get(`${API_URI}/users/${name}/allDetails`)
    }

    deleteTodo(name, id) {
        console.log('delete user based on id and name')
        return axios.delete(`${API_URI}/users/${name}/todos/${id}`)

    }

    retreiveUserById(name, id) {
        console.log('get user based on id')
        return axios.get(`${API_URI}/users/${name}/todos/${id}`)
    }
    updateTodo(id, todo) {
        console.log('update the user based on id')
        return axios.put(`${API_URI}/users/${id}`, todo)
    }

    createTodos(name, todo) {
        console.log('Create a new todo')
        return axios.post(`${API_URI}/users/${name}/todos/`, todo)
    }


}

export default new TodoDataService()
