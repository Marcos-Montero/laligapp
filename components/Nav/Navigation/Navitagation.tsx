import { useContext } from 'react'

import { motion } from 'framer-motion'

import styled from '@emotion/styled'

import { AppContext } from '../../../Context/AppContext'
import { MenuItem } from '../MenuItem'

const List = styled(motion.ul)`
    padding: 25px;
  position: absolute;
  top: -20px;
  width: 250px;
  z-index: 1;
`
export const Navigation = () => {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  const { teamList } = useContext(AppContext)
  return (
    <List variants={variants}>
      {teamList.map((v, i) => (
        <MenuItem team={v} key={i} />
      ))}
    </List>
  )
}


