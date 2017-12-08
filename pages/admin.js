import React, { Component } from 'react'
import keys from '../config/keys'

export class Admin extends Component {
    componentDidMount(){
        window.location = `${keys.serverURL}/db`
    }
    render() {
        return (
        <div>
            <h2>Send to server</h2>
            <style jsx>{`
                div {
                    position: absolute;
                    max-width:100%;
                    
                    text-align: center ;
                    top: 50% ;
                    left:50%;
                    transform: translate(-50% , -50%);
                    margin: 0 auto;
                }
            `}</style>
        </div>
        )
    }
}

export default Admin
