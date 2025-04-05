import React, { useState } from 'react'
import "./SideBar.css"
import { assets } from '../../assets/assets'

const SideBar = () => {

    const [extend, setExtend] = useState(false)

  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=> setExtend(prev=> !prev)} className='menu' src={assets.menu_icon} alt="MenuIcon" />

            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extend? <p>New Chat</p> : null}

                
            </div>

            {extend ? <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>What is react....</p>

                </div>
            </div> : null}
            

            
        </div>



        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extend? <p>Help</p> : null}
                
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extend? <p>Activity</p> : null}
                
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extend? <p>Setting</p> : null}
                
            </div>
        </div>
    </div>
  )
}

export default SideBar