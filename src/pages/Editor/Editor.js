import './Editor.scss'
import React from 'react'
import MonacoEditor from 'react-monaco-editor'

class Editor extends React.Component {
    constructor() {
        super()
        this.state = {
            code: ''
        }
    }
    onChange = (newValue) => {
        this.setState({
            code: newValue
        })
    }
    editorDidMount = () => {

    }
    render() {
        const {code} = this.state
        const options = {}

        return (
            <div id="editor">
                <MonacoEditor
                    width="800"
                    height="600"
                    language="java"
                    theme="vs"
                    value={code}
                    options={options}
                    onChange={this.onChange}
                    editorDidMount={this.editorDidMount}
                />
            </div>
        )
    }
}

export default Editor
