import './Audio.scss'
import React from 'react'
import AudioPlayer from '../../components/AudioPalyer/AudioPlayer'

class Audio extends React.Component {
    render() {
        return (
            <div id="Audio">
                <h1>Audio player test</h1>
                <div className="example">
                    <AudioPlayer beforeLoadText="点击开始" pasueText="暂停中" src="http://srv.test.pajkdc.com/ghibli/voc/T13yhQBjKT1RCvBVdK" />
                </div>
            </div>
        )
    }
}

export default Audio
