import React, {
  useContext,
  useEffect,
  useState,
} from 'react'

import { motion } from 'framer-motion'

import styled from '@emotion/styled'

import { AppContext } from '../../Context/AppContext'
import { parseColorsCards } from '../../utils'
import { ICommonProps } from '../types'
import {
  attacker,
  defender,
  goalKeeper,
  midFielder,
} from './Designs'

const Card: any = styled(motion.div)`
    position: relative;
    height: 211px;
    width: 152px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${(props: ICommonProps) => props.colors};
    border: 1px solid;
    border-radius: 12px;
    box-shadow: 0 0 10px;
    gap: 2px;
    @media (min-width: 800) {

    }
`
const CIllustration = styled.div`
    position: relative;
    background: skyblue;
    height: 143px;
    width: 143px;
    border-radius: 12px;
    border: 2px solid #1a1a1a;
    overflow: hidden;
`
const CInfo = styled.div`
    background: white;
    border-radius: 12px;
    height: 53px;
    width: 143px;
    border: 2px solid #1a1a1a;
    font-size: 12px;
    >p {
        line-height: 3px;
        text-align: center;
        span {
            font-size: 1em;
            font-weight: bolder;
        }
    }
`
const Escudo: any = styled.img`
    width: ${(props: ICommonProps) => props.exception ? '30px' : '40px'};
    position: absolute;
    left: ${(props: ICommonProps) => props.exception ? '-12px' : '-15px'};
    top: -10px;
    z-index: 10;
`
const Modal = styled(motion.div)`
    border-radius: 12px;
    position: absolute;
    width:100%;
    height: 100%;
    background: rgba(0,0,0,.7);
    opacity: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ButtonAdd = styled.button`
    background: white;
    border: none;
    padding: 1em;
    border-radius: 12px;
    :hover {
        background: coral;
        cursor: pointer;
    }
`
const Nombre = styled.p`
    position: absolute;
    font-size: 14px;
    bottom: -5px;
    left: 5px;
    font-weight: bolder;
    color: #0014ae;
`
const Posicion = styled.p`
    position: absolute;
    bottom: -10px;
    left: 8px;
    font-style: italic;
    font-weight: bold;
    font-size:.7em;
    color: #051942;
`
const Flag = styled.div`
    position: absolute;
    bottom: -10px;
    left: -35px;
    background: linear-gradient(#ff00006b , #ffffffbd );
    height: 40px;
    width: 150%;
    transform: rotate(10deg);
`
const CImage = styled.div`
    >svg{
        width:146px;
        height:146px;
    }
`
export const PlayerCard = ({ player, team }) => {
    const { name, position, dateOfBirth, nationality } = player
    const { clubColors, crestUrl } = team
    const [illustration, setIllustration] = useState(null)
    const bgColors = parseColorsCards(clubColors)
    const getAge = (dateString: string): any => {
        const newLocal: any = new Date()
        const ageLocal: any = new Date(dateString)
        return Math.floor(((newLocal - ageLocal) / 31557600000))
    }

    const { addToMyTeam, deleteFromMyTeam } = useContext(AppContext)
    useEffect(() => {
        switch (position) {
            case 'Goalkeeper':
                setIllustration(goalKeeper)
                break
            case 'Defender':
                setIllustration(defender)
                break
            case 'Attacker':
                setIllustration(attacker)
                break
            case 'Midfielder':
                setIllustration(midFielder)
                break
            default:
                setIllustration(midFielder)
        }

    }, [])
    const checkEspanyol = () => crestUrl === 'https://crests.football-data.org/80.svg'
    const handleAddToMyTeam = () => addToMyTeam(player, team)
    const handleDeleteFromMyTeam = () => addToMyTeam(player)
    return (
        <Card colors={bgColors} >
            <Modal whileHover={{ opacity: 1 }}>
                <ButtonAdd onClick={handleAddToMyTeam}>❤️ Add to my team</ButtonAdd>
            </Modal>
            <Escudo src={crestUrl} exception={checkEspanyol} />
            <CIllustration>
                <CImage>
                    {illustration}
                </CImage>
                <Flag></Flag>
                <Nombre>{name}</Nombre>
                <Posicion>{position}</Posicion>
            </CIllustration>
            <CInfo>
                <p><span>{name}</span></p>
                <p>{getAge(dateOfBirth)} años</p>
                <p>{nationality}</p>
            </CInfo>
        </Card>
    )
}
