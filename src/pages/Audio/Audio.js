import './Audio.scss'
import React from 'react'
import AudioPlayer from '../../components/AudioPalyer/AudioPlayer'

class Audio extends React.Component {
    render() {
        return (
            <div id="Audio">
                <h1>Audio player test</h1>
                <div className="example">
                    <AudioPlayer />
                </div>
            </div>
        )
    }
}

export default Audio
