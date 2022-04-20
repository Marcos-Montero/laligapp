import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react'

import { MenuToggle } from '../components'

describe('MenuToggle component', () => {

    const mockFn = jest.fn()

    test('renders', () => {
        render(<MenuToggle toggle={mockFn} />)
        expect(screen.getAllByText('Teams')).not.toBeNull()

    })
    test('button works', () => {
        render(<MenuToggle toggle={mockFn} />)
        const btn = screen.getByRole('button')
        fireEvent.click(btn)
        expect(mockFn).toBeCalled()
    })
})