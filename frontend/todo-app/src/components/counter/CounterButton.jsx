import { Component } from 'react';
import PropTypes from 'prop-types';

export class CounterButton extends Component {
    /*  Best ways to define a state are:
           1 Define the initial state in the constructor
           2 state of the initail countrt must be set ==> To zero
           3 when ever increment is called increase the counter by 1
    */
    // constructor() {
    //     super();

    //     this.increment = this.increment.bind(this);
    //     this.decrement = this.decrement.bind(this);
    // }

    render() {
        return (
            <div className="CounterButton">
                <button onClick={() => this.props.incrementMethod(this.props.by)} >+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)} >-{this.props.by}</button>

            </div>

        );
    }
//     // update the counter by 1 when the method is called
//     increment() {

//         this.props.incrementMethod(this.props.by);
//     }

//     decrement() {

//         this.props.decrementMethod(this.props.by);
//     }
// }

}
CounterButton.defaultProps = {
    by:1
}

CounterButton.propTypes = {
    by: PropTypes.number
}
