import { Component } from 'react'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'

class LearningComponents extends Component{
    render(){
      return(
        <div className="LearningComponent">
        <p>My Hello World</p>
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent> 
      </div>
      )
  }
}
export default LearningComponents;