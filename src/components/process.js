import React from 'react'

/**
 * @class - Process
 * @description - contains 3 different slides showing the process to user
 * @style - should be in format of image:description 
 * partition should be slanted
 * 
 */
export default class Process extends React.Component
{
    render=()=>{
        return(
            <div className="process">
                <div className="process-cards">
                    <div className="process-card">
                        <div className="left">
                            <img src=""/>

                        </div>
                        <div className="right">
                            <h1>Fabrication Matter Drive</h1>
                            <p>Lorem ipsum</p>
                        </div>
                    </div>
                    <div className="process-card">
                        <div className="left">
                            <img src=""/>

                        </div>
                        <div className="right">
                            <h1>Fabrication Matter Drive</h1>
                            <p>Lorem ipsum</p>
                        </div>
                    </div>
                    <div className="process-card">
                        <div className="left">
                            <img src=""/>

                        </div>
                        <div className="right">
                            <h1>Fabrication Matter Drive</h1>
                            <p>Lorem ipsum</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}