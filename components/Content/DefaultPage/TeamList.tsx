import React, { useContext } from 'react'

import styled from '@emotion/styled'

import { AppContext } from '../../../Context/AppContext'
import { searchTeam } from '../../../pages/api'

const CTeam = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    width: 80px;
    gap: 5px;
    padding: 3px;
    border-radius: 12px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    :hover {
        cursor: pointer;
        background: rgba(0,0,0,.04);
    }
    @media (min-width:600px){
        width: 120px;
        height: 120px;
        gap: 15px;
    }
`
const Escudo = styled.img`
    width: 50px;
`
const CTeamList = styled.div`
    position:absolute;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap:2em;
    width: 90%;
    height: 60%;
`
const TeamName = styled.p`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: none;
    @media (min-width: 600){ 
        display: inline-block;
    }
`
export const TeamList = () => {
    const { teamList, setTeam, toggleLoading } = useContext(AppContext)
    const selectTeam = async team => {
        toggleLoading()
        const result = await searchTeam(team.id)
        setTeam(result)
        setTimeout(() => {
            toggleLoading()
        }, 600)
    }

    return (
        <CTeamList>
            {
                teamList.map((v, i) => (
                    <CTeam onClick={() => selectTeam(v)}>
                        <Escudo src={v.crestUrl} />
                        <TeamName>
                            {v.shortName}
                        </TeamName>
                    </CTeam>
                ))
            }
        </CTeamList>
    )
}
