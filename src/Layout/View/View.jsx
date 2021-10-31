import React from 'react'
import "./View.css"
import Header from '../Header/Header'
const View = ({children}) => {
    return (
        <div className="l_view__wrapper">
            <Header/>
            <div className="l_view__body">
                {children}
            </div>

        </div>
    )
}

export default View
