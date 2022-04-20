import {
  render,
  screen,
} from '@testing-library/react'

import { DefaultPage } from '../components'
import { AppContextProvider } from '../Context/AppContext'

describe('DefaultPage component', () => {
    test('renders', () => {
        render(<AppContextProvider>
            <DefaultPage />
        </AppContextProvider>
        )
        expect(screen.getAllByText('Choose a team.').length).toBeGreaterThan(0)
    })
})