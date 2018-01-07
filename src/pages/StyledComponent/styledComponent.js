import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`

export default () => {
    return (
        <div id="Styled Page">
            <Title>This is a styled component</Title>
        </div>
    )
}
