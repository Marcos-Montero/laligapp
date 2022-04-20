import React from 'react'

import styled from '@emotion/styled'

const Btn = styled.button`
    position: relative;
    height: 60px;
    font-size: 16px;
    display: flex;
    align-items: center;
    padding: 2em;
    justify-content: center;
    border-radius: 20px;
    z-index: 5;
    transition: .3s;
    color: white;
    box-shadow: 1px 1px 4px gray, inset -1px -1px 4px rgba(0,0,0,.8);
    max-width: 300px;
    margin: 1em auto;
    border-top: 4px solid rgba(255,255,255,.5);
    border-left: 4px solid rgba(255,255,255,.5);
    border-bottom: none;
    border-top: none;
    backdrop-filter: blur(5px);
    opacity:.8;
    background: orangered;
    :hover {
        cursor: pointer;
        background: #ee4411;
        transform: scale(1.02);
    }
    :active {
        background: #aa2201;
        transform: scale(0.98);
    }
`

export const Button = ({ onClick, children }) => {
    return (
        <Btn onClick={onClick}>{children}</Btn>
    )
}
