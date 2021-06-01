import React, { Component } from 'react'
import { ThemeContext } from './Contexts/ThemeContext';


export class ToggleTheme extends Component {
    static contextType = ThemeContext;
    render() {
        const {toggle} = this.context
        return (
                <button onClick={toggle}>Toggle the theme</button>
        )
    }
}

export default ToggleTheme;
