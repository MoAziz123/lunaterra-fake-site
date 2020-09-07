import React from 'react'
import starwindow from '../assets/images/undraw_starry_window_ppm0.svg'
import explore from '../assets/images/undraw_explore_7ofa.svg'
import flight from '../assets/images/undraw_Outer_space_drqu.svg'
/**
 * @class - Process
 * @description - contains 3 different slides showing the process to user
 * @style - should be in format of image:description 
 * partition should be slanted
 * 
 */
export default class Process extends React.Component
{

    componentDidMount()
    {
        window.addEventListener('scroll', ()=>{
            let about = document.getElementsByClassName('about-wrapper')[0];
            let process = document.getElementsByClassName('process')[0];
            if(about.getBoundingClientRect().top < 0)
            {
            process.classList.add('fade-in-top');
            }
        })
    }

    render=()=>{
        return(
            <div className="process fade-elem" >
                <div className="process-cards">
                    <div className="process-card">
                        <div className="left">
                            <img src={starwindow}/>

                        </div>
                        <div className="right">
                            <h1>The Dream</h1>
                            <p>When we first started out as LunaTerra, we wanted to envision a way in which we could conquer the final barrier to civilization: the stars. We spent years working on the technology you see today, our most brilliant minds put to the very limit of human endurance to come up with a solution.</p>
                        </div>
                    </div>
                    <div className="process-card" >
                        <div className="left">
                            <img src={flight}/>

                        </div>
                        <div className="right">
                            <h1>The Flight</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                        </div>
                    </div>
                    <div className="process-card">
                        <div className="left">
                            <img src={explore}/>

                        </div>
                        <div className="right">
                            <h1>The Stars</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}