import {
  render,
  screen,
} from '@testing-library/react'

import { PlayerCard } from '../components/ModalPlayers/PlayerCard'
import { AppContextProvider } from '../Context/AppContext'
import { team } from '../mocks'

describe('PlayerCard component', () => {
    test('renders', () => {
        render(<AppContextProvider>
            <PlayerCard player={team.squad[0]} team={team} />
        </AppContextProvider>
        )
        expect(screen.getAllByText(team.squad[0].name).length).toBeGreaterThan(0)
    })
})