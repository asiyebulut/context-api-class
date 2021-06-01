import React, { Component, createContext } from 'react'

export const AuthContext = createContext()

export class AuthContextProvider extends Component {
    state={
        isAuthentic: false
    }

    toggleAuth = () => {
        this.setState({isAuthentic:!this.state.isAuthentic})
    }

    render() {
        return (
            <AuthContext.Provider value={{...this.state , toggleAuth:this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider
