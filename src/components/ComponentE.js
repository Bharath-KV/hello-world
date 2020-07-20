import React, { Component, Fragment } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {

    // static contextType = UserContext // Limitations: Only works with Class Components, Only subscribe with a single context

    render() {
        return (
            <Fragment>
                <h1>Component E context {this.context}</h1>
                <ComponentF />
            </Fragment>
        )
    }
}

ComponentE.contextType = UserContext

export default ComponentE
