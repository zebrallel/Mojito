import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
    padding-top: 50px;
`

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`
const Button = styled.button`
    padding: 10px;
    background: ${props => props.primary ? 'blue' : 'green'}
`
// 现在我们有个Title组件，给他定义了一些样式
// 那么，css中最常见的继承，是如何实现的呢？

const LargeButton = Button.extend`
    color: #fff;
    font-size: 26px;
`

// 我们可以定义组件的属性

const PasswordInput = styled.input.attrs({
    type: 'password',
    maxLength: 6
})`
    border: red solid 1px;
    padding: 4px;
`

export default () => {
    return (
        <Page>
            <Title>This is a styled component</Title>
            <Button>Button 1</Button>
            <Button primary>Button2</Button>
            <LargeButton>Button 3</LargeButton>
            <PasswordInput />
        </Page>
    )
}
