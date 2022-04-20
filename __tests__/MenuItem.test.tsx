import {
  render,
  screen,
} from '@testing-library/react'

import { MenuItem } from '../components'
import { AppContextProvider } from '../Context/AppContext'

it('Menu item renders', () => {
    render(
        <AppContextProvider>

            <MenuItem team={{
                id: 77,
                crestUrl: 'https://crests.football-data.org/77.png',
                shortName: 'Athletic',
                clubColors: 'Red, White, Black'
            }} />
        </AppContextProvider>
    )
    expect(screen.getAllByText('Athletic')).not.toBeNull()
})
