import React from 'react'
import '../App.css'
import { Button } from './Button'
import './MainSection.css'

const MainSection = () => {
    return (
        <div className='main-container'>
            <video src ='/videos/video2.mp4' autoPlay loop muted/>
     
                <h1> Hello,</h1>
                <h2> Welcome to my page! </h2>
                <div className = "main-btns">
                    <Button className = 'btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        LEARN MORE
                    </Button>
                    
                </div>

                <div className = "strengths">
                    Includer - Discipline - Consistency - Futuristic - Developer
                </div>
        </div>
    )
}

export default MainSection
