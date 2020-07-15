import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }

        // this.incrementCount = this.incrementCount.bind(this)

    }

    // incrementCount() {
    //     this.setState(({
    //         count: this.state.count + 1
    //     }))
    // }

    // incrementCount() {
    //     this.setState((prevState, props) => ({
    //         count: prevState.count + Number(props.addValue)
    //     }))
    // }

    incrementCount = () => {
        this.setState((prevState, props) => ({
            count: prevState.count + Number(props.addValue)
        }))
    }
    
    render() {
        const {count} = this.state
        return (
            <div>
                <h1>Count - {count}</h1>
                {/* <button onClick={this.incrementCount.bind()}>Increment</button> */}
                {/* <button onClick={() => this.incrementCount()}>Increment</button> */}
                {/* <button onClick={this.incrementCount}>Increment</button> */}
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        )
    }
}

export default Counter
