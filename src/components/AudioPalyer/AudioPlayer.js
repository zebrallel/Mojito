import './AudioPlayer.scss'
import React from 'react'

const signal = {
  beforeLoad: 0,
  loading: 1,
  playing: 2,
  pause: 3
}

class AudioPlayer extends React.Component {
  constructor() {
    super()

    this.state = {
      status: signal.beforeLoad
    }
    this.audio = new Audio()
    this.audio.addEventListener('canplay', this.audioReady, false)
  }
  audioReady = () => {
    this.audio.play()

    this.setState({
      status: signal.playing
    })
  }
  toggle = ()=> {
    const { status } = this.state

    switch (status) {
      case signal.beforeLoad:
        this.audio.src = this.props.src

        this.setState({
          status: signal.loading
        })

        break
      case signal.playing:
        this.audio.pause()

        this.setState({
          status: signal.pause
        })

        break
      case signal.pause:
        this.audio.play()

        this.setState({
          status: signal.playing
        })

        break
    }
  }
  componentWillUnmount() {
    this.audio.pause()
    this.audio.removeEventListener('canplay', this.audioReady)
    delete this.audio
  }
  render() {
    const { status } = this.state
    const { beforeLoadText = '点击开始', pauseText = '暂停中' } = this.props

    return (
      <div className="m-audio-player">
        <div
          className="left"
          onClick={this.toggle}
        >
          {status === signal.playing ? <span className="icon-pause" /> : <span className="icon-play" />}
        </div>
        <div className="right">
          {status === signal.beforeLoad && beforeLoadText}
          {status === signal.pause && pauseText}
          {status === signal.loading && '加载中...'}
          {status === signal.playing && (
            <div className="waving">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default AudioPlayer
