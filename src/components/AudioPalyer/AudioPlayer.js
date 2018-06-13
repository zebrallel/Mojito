import './AudioPlayer.scss'
import React from 'react'

class AudioPlayer extends React.Component{
    render(){
        return (
            <div className="m-audio-player">
                <div className="left">
                    <div className="icon"></div>
                </div>
                <div className="right">
                    right content
                </div>
            </div>
        )
    }
}

export default AudioPlayer 