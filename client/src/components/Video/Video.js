import React from 'react'
import "./Video.css"
import ReactPlayer from 'react-player'

function Video() {
    return (
        <div className="video">
            <ReactPlayer
                className="videoPlayer"
                loop
                url="https://www.youtube.com/watch?v=Bs_DLdGCnmk"
                className="videoPlayer"
                width="50vw"
                height="100vh"
            />
        </div>
    )
}

export default Video
