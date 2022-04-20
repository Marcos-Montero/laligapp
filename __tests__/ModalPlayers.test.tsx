import {
  render,
  screen,
} from '@testing-library/react'

import { ModalPlayers } from '../components'
import { AppContextProvider } from '../Context/AppContext'

describe('ModalPlayers component', () => {
    test('renders', () => {
        render(<AppContextProvider>
            <ModalPlayers />
        </AppContextProvider>
        )
        expect(screen.getAllByRole('button').length).toBeGreaterThan(0)
    }
    )
})