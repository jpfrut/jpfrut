import { fireEvent, render, screen, within } from '@testing-library/react'
import HelpCenterPage from '../pages/HelpCenterPage'

describe('HelpCenterPage markdown integration', () => {
  it('shows rendered FAQ markdown content when expanding an item', () => {
    render(<HelpCenterPage />)

    const faqToggle = screen.getByRole('button', {
      name: /¿qué hago si me equivoco y quiero deshacer algo\?/i
    })

    fireEvent.click(faqToggle)

    const introText = screen.getByText(/no te preocupes/i)
    expect(introText).toBeInTheDocument()

    const markdownRoot = introText.closest('div')
    expect(markdownRoot).not.toBeNull()

    const listItems = within(markdownRoot).getAllByRole('listitem')
    expect(listItems.length).toBeGreaterThanOrEqual(4)

    expect(screen.getByText(/botón "Archivar"/i)).toBeInTheDocument()
    expect(screen.getByText(/Guarda los cambios con el botón "Guardar"/i)).toBeInTheDocument()
  })
})
