import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
// class ParentComp extends PureComponent {    

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Bharath'
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Bharath'
            })
        }, 2000)
    }

    render() {
        console.log('*************Parent Component render************************')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
                {/* <RegComp name={this.state.name} /> */}
                {/* <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
