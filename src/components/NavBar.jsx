import React, {Component} from 'react'
import { AuthContext } from './Contexts/AuthContext';
import {ThemeContext} from './Contexts/ThemeContext'
class NavBar extends Component {

    render(){
        return (// this way can be use for functional components either
            <AuthContext.Consumer>{(authContext)=>{
                return(
                <ThemeContext.Consumer> 
                    {(themeContext)=>{
                        const {isAuthentic, toggleAuth} = authContext
                        const {isLightTheme, light,dark} = themeContext;
                        const theme = isLightTheme ? light : dark
                        return(
                            <nav style={{background:theme.ui, color:theme.syntax}}>
                                <h1>Context Api</h1>
                                <button onClick={toggleAuth}>{isAuthentic ? 'logged in' : 'logged out'}</button>
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </nav>
                        )
                    }}
            </ThemeContext.Consumer>
                )
            }}
            
            </AuthContext.Consumer>
        )
        
       
    }
}

export default NavBar;