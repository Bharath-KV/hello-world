import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Bharath'
        }

        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
    
    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    componentWillUnmount() {
        // Method is invoked immediately before a component is unmounted and destroyed
        // Cancelling any network requets, removing event handlers, cancelling any subscriptions 
        // and also invalidating timers.
        // Do not call the setState method
    }

    changeState = () => {
        this.setState({
            name: 'BSTech'
        })
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>LifecycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
