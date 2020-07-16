import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false,
            btnName: 'Login'
        }

        this.loginLogout = this.loginLogout.bind(this)
    }
    
    loginLogout() {
        let { isLoggedIn, btnName } = this.state
        isLoggedIn = !isLoggedIn
        btnName = isLoggedIn ? 'Logout' : 'Login'
        this.setState({
            isLoggedIn: isLoggedIn,
            btnName: btnName
        })
    }

    render() {
        const { isLoggedIn, btnName } = this.state
        let element = <h1>Welcome Guest</h1>

        if (isLoggedIn)
            element = <h1>Welcome Bharath</h1>
            
        return (
            <div> 
                {element}
                <button onClick={this.loginLogout}>{btnName}</button>
            </div>
            
        )

        // return isLoggedIn && <div>Welcome, Bharath</div> // short circuit syntax

    }
}

export default UserGreeting
