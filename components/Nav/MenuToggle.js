import * as React from 'react'

import { motion } from 'framer-motion'

import styled from '@emotion/styled'

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="5"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);
const Nav = styled.button`
  position: fixed;
  padding: 1em;
  display: flex; 
  gap: 1em;
  align-items: center;
  width: 100px;
  border-radius: 0;
  margin: 0;
  left: 0;
  top: 0;
  background: white;
  z-index: 5;
  border: none;
  font-family: 'laliga bold';
`
const Container = styled.div`
  display: flex; 
  flex-direction: column;
  flex-wrap: 'no-wrap';
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  z-index: 10;
`
const Text = styled.span`
  position: relative;
  font-size: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
export const MenuToggle = ({ toggle }) => (
  <Container>
    <Nav onClick={toggle}>
      <div>
        <svg width="23" height="23" viewBox="0 0 30 15">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" }
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" }
            }}
          />
        </svg>
      </div>
      <Text>Teams</Text>
    </Nav>
  </Container>
);
