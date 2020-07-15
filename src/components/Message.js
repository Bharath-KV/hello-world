import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    clickHandler() {
        this.setState({
            message: 'Thanks for subscribing..'
        })
    }
    render() {
        const { message } = this.state
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.clickHandler()}>Subscribe</button>
            </div>
        )
    }
}

export default Message
