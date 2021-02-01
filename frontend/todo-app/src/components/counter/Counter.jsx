import {Component} from 'react'
import './Counter.css'
import { CounterButton } from './CounterButton'


class Counter extends Component{
    constructor(){
        super()
        this.state = {
            counter : 0
        }
    
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    render(){
        return (
            <div className="Counter">
                <CounterButton by={1} incrementMethod = {this.increment} decrementMethod = {this.decrement}></CounterButton>
                <CounterButton by={5} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
                <CounterButton by={10} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
                <span className="count">{this.state.counter}</span>
                <div>
                    <button className="reset" onClick={this.reset}>RESET</button>
                </div>
            </div>
          );
    }
    increment(by){
        //console.log(`increment counter by parent :${by}`)

        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            }
        );
    }

    decrement(by){
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - by }
            }
        )
    }

    reset(){
        this.setState({
            counter: 0
        })
    }
    
}

export default Counter;