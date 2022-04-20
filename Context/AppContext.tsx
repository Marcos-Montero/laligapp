import {
  createContext,
  useEffect,
  useState,
} from 'react'

import { useCycle } from 'framer-motion'

import { searchTeamList } from '../pages/api'

export const AppContext = createContext(null)
export const AppContextProvider = ({ children }) => {
    const [teamList, setTeamList] = useState([])
    const [team, setTeam] = useState()
    const [navOpen, toggleNavOpen] = useCycle(false, true);
    const [loading, toggleLoading] = useCycle(false, true);
    const [modal, toggleModal] = useCycle(false, true);
    const [players, setPlayers] = useState([])
    const [myTeam, setMyTeam] = useState([])

    const addToMyTeam = (playerSelected, teamSelected) => {
        setMyTeam([...myTeam, { playerSelected, teamSelected }])
    }
    const deleteFromMyTeam = (playerSelected) => {
        myTeam.filter((v) => v.id !== playerSelected.id)
    }
    const searchTeams = async () => {
        const result = await searchTeamList()
        setTeamList(result.teams)
    }
    useEffect(() => {
        searchTeams()
    }, [])
    return (
        <AppContext.Provider value={{
            teamList,
            setTeamList,
            searchTeams,
            team,
            setTeam,
            navOpen,
            toggleNavOpen,
            loading,
            toggleLoading,
            modal,
            toggleModal,
            players,
            setPlayers,
            myTeam,
            addToMyTeam,
            deleteFromMyTeam
        }}>
            {children}
        </AppContext.Provider>
    )
}