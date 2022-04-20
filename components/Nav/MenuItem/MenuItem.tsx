import React from 'react'

import { motion } from 'framer-motion'

import styled from '@emotion/styled'

import { AppContext } from '../../../Context/AppContext'
import { searchTeam } from '../../../pages/api'
import { parseColors } from '../../../utils'
import { ICommonProps } from '../../types'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 1em;
  background: white;
`
const Escudo = styled.img`
  width: 40px;
`
const Texto = styled.p`
  border-radius: 5px;
  text-align: center;
  width: 100%;
  height: 20px;
`
const ItemContainer: any = styled(motion.li)`
  list-style: none;
  z-index: 1;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-family: 'laliga bold';
  height: 40px;
  overflow: hidden;
  display: flex;
  position: relative;
  justify-content: center;
  background: rgba(255,255,255);
  box-shadow: 2px 2px 5px lightgray;
  border-radius: 6px;
  :after {
    content: '';
    position: absolute;
    top: 15px;
    right: 0px;
    height: 50px;
    width: 20px;
    box-shadow: 0 0 7px;
    background: ${(props: ICommonProps) => props.colors};
    transform: rotate(45deg);
    z-index: 40;
  }
`
interface IMenuiItem {
  team: {
    id: number
    crestUrl: string
    shortName: string
    clubColors: string
  }
}
export const MenuItem: React.FC<IMenuiItem> = ({ team }) => {
  const { setTeam, toggleNavOpen, toggleLoading } = React.useContext(AppContext)
  const selectTeam = async (id) => {
    toggleLoading()
    const result = await searchTeam(id)
    setTeam(result)
    toggleNavOpen()
    setTimeout(() => {
      toggleLoading()
    }, 600)
  }

  return (
    <ItemContainer
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => selectTeam(team.id)}
      colors={parseColors(team.clubColors)}
    >
      <IconContainer>
        <Escudo src={team.crestUrl} />
      </IconContainer>
      <Texto >{team.shortName}</Texto>
    </ItemContainer>
  );
};


