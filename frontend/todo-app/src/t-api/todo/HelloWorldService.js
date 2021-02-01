import axios from 'axios'
import { API_URI } from '../../components/todo/TodoConstants'
class HelloWorldService {

  /*  excecuteHelloWorldService(){
     return  axios.get('http://localhost:8080/hello')
   }
   excecuteHelloWorldJsonService(){
     return  axios.get('http://localhost:8080/hello1')
   } */

  excecuteHelloWorldWithPathVariableService(name) {

    return axios.get(`${API_URI}/${name}`)
  }
}
export default new HelloWorldService()