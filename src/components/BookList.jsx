

import React, { Component } from 'react'
import { ThemeContext } from './Contexts/ThemeContext'

export class BookList extends Component {
    static contextType=ThemeContext; //this consept can be used just for class

    render() {
        const {isLightTheme,light,dark} = this.context;
        const theme = isLightTheme ? light : dark
        return (
            <div className='book-list' style={{color:theme.syntax, background:theme.bg}}>
                <ul>
                    <li style={{background:theme.ui}}>book 1</li>
                    <li style={{background:theme.ui}}>book 2</li>
                    <li style={{background:theme.ui}}>book 3</li>
                </ul>
            </div>
        )
    }
}

export default BookList
