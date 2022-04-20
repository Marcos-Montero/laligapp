import React, {
  useContext,
  useEffect,
  useState,
} from 'react'

import { useCycle } from 'framer-motion'

import styled from '@emotion/styled'

import { AppContext } from '../../Context/AppContext'
import { ICommonProps } from '../types'
import { PlayerCard } from './PlayerCard'

const ModalBg = styled.div`
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background: rgba(0,0,0,.7);
    z-index: 8;
    transition:1s;
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    justify-content: center;
    animation: open 1s linear;
    padding: auto 2em;
    @media (min-width: 800px) {
        gap: 1em;
    }
    @keyframes open {
        0% {
            gap: 0;
        }
    }
    ::-webkit-scrollbar {
        display: none;
    }
    `
const SeeAllButton: any = styled.button`
    padding: 2em;
    height: 80px;
    background: orangered;
    width: 500px;
    color: white;
    font-weight: bolder;
    margin: 1em;
    border: none;
    border-radius: 20px;
    z-index: 200;
    display: ${(props: ICommonProps) => props.state ? 'block' : 'none'};
    transition: .3s;
    :hover {
        cursor: pointer;
        background: #ff8888;
        
    }
`
const CloseButton: any = styled(SeeAllButton)`
    opacity: ${(props: ICommonProps) => props.state ? 1 : 0};
`
const Container = styled.div`
margin-top: 3em;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
`
export const ModalPlayers = () => {
    const { toggleModal, team, players } = useContext(AppContext)
    const [playerCards, setPlayerCards] = useState([])
    const [seeAllButton, toggleSeeAllButton] = useCycle(true, false)
    const seeAll = () => {
        setPlayerCards(players)
        toggleSeeAllButton()
        toggleModal()
    }
    useEffect(() => {
        setPlayerCards(players.slice(0, 3))
    }, [])
    return (
        <ModalBg
            onClick={toggleModal}
        >
            <Container>

                {playerCards.map((v, i) => (
                    <PlayerCard key={i} team={team} player={v} />
                ))}
            </Container>
            <SeeAllButton onClick={seeAll} state={seeAllButton}>VER TODOS</SeeAllButton>
            <CloseButton state={!seeAllButton}>Cerrar</CloseButton>
        </ModalBg>
    )
}
