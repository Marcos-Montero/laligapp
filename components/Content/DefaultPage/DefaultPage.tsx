import React from 'react'

import styled from '@emotion/styled'

import { TeamList } from './TeamList'

const Container = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    gap: 1em;
    justify-content: center;
    overflow: hidden;
    overflow-y: scroll;
    flex-flow: column nowrap;
    

`
const Tip = styled.h3`
    width:100%;
    text-align: center;
`
const CTip = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    align-content:center;
    width: 100%;
    position: absolute;
    top: 0;
    height: 20%;
`

export const DefaultPage = () => {
    return (
        <Container>
            <CTip>
                <Tip>Choose a team.</Tip>
            </CTip>
            <TeamList />
        </Container>
    )
}
