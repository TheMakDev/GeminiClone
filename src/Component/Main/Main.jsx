import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can i help you today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an road trip </p>
                    <img src={assets.compass_icon} alt="" />

                </div>
                <div className="card">
                    <p>Briefly summarize this consept: urban planning </p>
                    <img src={assets.bulb_icon} alt="" />

                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />

                </div>
                <div className="card">
                    <p>Improve the readability of the followning  code</p>
                    <img src={assets.code_icon} alt="" />

                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here'/>
                    <div className="">
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini display inaccurate info, including about people, sp double-check its responses, Your privacy and Gemmini
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main