import React from 'react'

/**
 * @class - Nav
 * @description - contains "logo" and also contains the link of the fake landing page
 * @style - flex-direction:space-between on nav
 * list item should be inline and should glow or underline on hover
 * 
 */
export default class Nav extends React.Component
{
    render=()=>{
        return(
            <div className="nav-wrapper">
            <div className="nav">
            <text>LunaTerra</text>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>Work</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            </div>
            </div>
        )
    }
}