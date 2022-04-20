import {
  render,
  screen,
} from '@testing-library/react'

import { Button } from '../components'

describe('Button ui component', () => {
    test('renders', () => {
        render(<Button onClick={jest.fn()}>botón</Button>)
        expect(screen.getAllByText('botón')).not.toBeNull()
    })
})