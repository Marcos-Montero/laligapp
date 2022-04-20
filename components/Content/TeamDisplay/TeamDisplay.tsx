import React, { useContext } from 'react'

import { useCycle } from 'framer-motion'

import styled from '@emotion/styled'

import { AppContext } from '../../../Context/AppContext'
import { ICommonProps } from '../../types'
import { Button } from '../../ui'

const Top = styled.div`
    padding: 80px 0 0 0;
    position: relative;
    display: flex;
    flex-wrap: 'no-wrap';
    height: 40%;
    overflow: hidden;
    align-items: center;
    flex-direction: column-reverse;
    :after {
        content: '';
        position: absolute;
        box-shadow: inset 0 50px 100px gray;
        top: 0;
        left: -100px;
        height: 200%;
        width: 200%;
    }
    @media (min-width: 800px) {
        flex-direction: row;
    }
`
const TopContainers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`
const CMain = styled(TopContainers)`
    width: 66%;
`
const CEscudo = styled(TopContainers)`
    z-index:1;
    width: 34%;
`
const Escudo = styled.img`
    width: 50%;
`
const Bottom = styled.div`
    position: relative;
    display: flex;
    flex-wrap: 'no-wrap';
    width: 100%;
    justify-content: center;
    flex-direction: column-reverse;
    @media (min-width: 800px){
        flex-direction: row;
    }
`
const BottomContainers = styled.div`
    max-width: 1100px;
    align-self: center;
    width: 100%;
    height: 95%;
    margin: .5em;
    border-radius: 20px;
    box-shadow: 1px 1px 10px lightgrey;
    transition: .3s;
    overflow: hidden;
    background: rgba(0,0,0,.04);
    transition: .5s;


    :hover {
        background: white;
    }
    >h4 {
        margin: 0;
        padding: 20px;
        font-size: 20px;
        text-align: center;
        background: rgba(0,0,0,.1)
    }
    >div {
        padding: 10px 60px;
        text-align: center;
        >a {
            color: red;
            :hover {
                cursor: pointer;
                text-decoration: underline;

            }
        }
    }
`
const CCompeticiones = styled(BottomContainers)`
    height: auto;
    width: 100%;
`
const CAbout = styled(BottomContainers)`
    width: 100%;
    height: auto;
`
const BPlayer = styled(Button)`
    width: 33%;
    margin: 2em;
`
const CPlayers = styled.div`
    width: 100%;
    @media (min-width: 800px) {
        width: 34%;
    }
`
const TeamName = styled.h1`
    text-align: center;
    font-size: 30px;
    @media (min-width: 500px) {
        font-size: 50px;
    }
    @media (min-width: 1080px) {
        font-size: 100px;
    }
`
const CInfo = styled.div`
    position: relative;
    padding: 0 3em;
    display: flex; 
    flex-direction: column;
    width: 80%;
    @media (min-width: 800px){
        width:66%;
    }
`
const MoreButton: any = styled.button`
    padding: 10px;
    text-align: center;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    text-decoration: none;
    border: none;
    background: none;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    :hover {
        transform: scale(1.1);
        text-decoration: none;
        background: rgba(0,0,0,.05);
    }
    :active {
        transform: scale(.9)
    }
`
const CHeading = styled.div`
    position: relative;
    color: white;
    display: flex;
    justify-content:end;
    padding: 30px;
    align-items: center;
    height: 80px;
    ::before {
        content: '';
        transform: rotate(4deg);
        background: rgba(0,0,0,.7);
        border: orangered 6px solid;
        position: absolute;
        height: 120px;
        width: 110%;
        top: -40px;
        left: -10px;
    }
`
const HeadingStyled = styled.h4`
    position: relative;
    justify-self: end;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    margin: 0;
    :before {
        content: '| ';
        color: orangered;
        font-size: 40px;
        position:absolute;
        right: -24px;
        top: -12px;
        transform: skew(15adeg);
    }
`
const CContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5em;
`
const ListItem = styled.li`
            display: flex;
            gap: 4px;
            justify-content: center;
            align-items: center;
            list-style: none;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            line-height: 2em;
:hover {
        text-decoration: underline;
        text-decoration-color: orangered;
        cursor: normal;
    }
`
const Label = styled.p`
    display: inline;
    font-style: italic;
    font-weight: normal;
    color: orangered;
`
const CLabel = styled.div`
    width: 50%;
    text-align: right;
`
const CData: any = styled.div`
    width: ${(props: ICommonProps) => props.state ? '50%' : '100%'};
    text-align: ${(props: ICommonProps) => props.state ? 'left' : 'center'};

`
const DataStyled = ({ label = "", children }) => {
    return (
        <ListItem>{label !== "" && <CLabel><Label>{label}: </Label></CLabel>}<CData state={label !== ""}>{children}</CData></ListItem>
    )
}
const Heading = ({ children }) => <CHeading><HeadingStyled>{children}</HeadingStyled></CHeading>
export const TeamDisplay = () => {
    const { team, toggleModal, setPlayers } = useContext(AppContext)
    const [masInfo, toggleMasInfo] = useCycle(false, true)
    const handleClickPlayers = () => {
        setPlayers(team.squad)
        toggleModal()
    }
    return (
        team &&
        <>
            <Top>
                <CMain><TeamName>{team.name}</TeamName></CMain>
                <CEscudo><Escudo src={team.crestUrl} alt={`escudo de ${team.name}`} /></CEscudo>
            </Top>
            <Bottom>
                <CInfo>

                    <CCompeticiones>
                        <Heading>Competiciones</Heading>
                        <CContent>
                            {
                                team.activeCompetitions.map((v, i) => (
                                    <DataStyled key={i}>{v.name}</DataStyled>
                                ))
                            }
                        </CContent>
                    </CCompeticiones>
                    <CAbout>
                        <Heading>Detalles</Heading>
                        <CContent>
                            <ul>
                                <DataStyled label="Fundación">{team.founded}</DataStyled>
                                <DataStyled label="Campo">{team.venue}</DataStyled>
                                <DataStyled><a href={team.website}>{team.website}</a></DataStyled>
                                {
                                    masInfo &&
                                    <>
                                        <DataStyled label="Siglas">{team.tla}</DataStyled>
                                        <DataStyled label="Dirección">{team.address}</DataStyled>
                                        <DataStyled><a href={'tel:' + team.email}>{team.phone}</a></DataStyled>
                                        <DataStyled><a href={'mailto:' + team.email} >{team.email}</a></DataStyled>
                                        <hr></hr>
                                        <DataStyled label="Última actualización">{team.lastUpdated}</DataStyled>
                                    </>
                                }
                            </ul>
                            <MoreButton onClick={toggleMasInfo}> {masInfo ? '🔺' : '🔻'}</MoreButton>
                        </CContent>
                    </CAbout>
                </CInfo>
                <CPlayers>
                    <BPlayer onClick={handleClickPlayers}>
                        <h4> Ver Jugadores</h4>
                    </BPlayer>
                </CPlayers>

            </Bottom>

        </>
    )
}
