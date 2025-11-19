import { render, screen, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import MarkdownRenderer from '../components/common/MarkdownRenderer'

describe('MarkdownRenderer', () => {
  const richContent = [
    '## Demo markdown',
    '',
    'Esto incluye [un enlace](https://example.com) y contenido mixto:',
    '',
    '- Elemento de lista',
    '- Segundo elemento',
    '',
    '1. Paso uno',
    '2. Paso dos',
    '',
    'Texto con `código en línea`.',
    '',
    '```js',
    "const saludo = 'hola'",
    'console.log(saludo)',
    '```'
  ].join('\n')

  it('renders lists, links, and code blocks consistently', () => {
    const { asFragment, container } = render(
      <MarkdownRenderer content={richContent} className="prose" />
    )

    const link = screen.getByRole('link', { name: /un enlace/i })
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(4)

    const inlineCode = screen.getByText('código en línea')
    expect(inlineCode.tagName.toLowerCase()).toBe('code')

    const blockCode = container.querySelectorAll('pre code')
    expect(blockCode.length).toBeGreaterThan(0)
    expect(blockCode[0].textContent).toContain("const saludo = 'hola'")

    expect(asFragment()).toMatchSnapshot()
  })

  it('returns null when there is no content to render', () => {
    const { container } = render(<MarkdownRenderer content={null} />)
    expect(container.firstChild).toBeNull()
  })

  it('notifies analytics hooks when markdown renders', async () => {
    const track = vi.fn()
    const dispatchSpy = vi.spyOn(window, 'dispatchEvent')

    window.analytics = { track }

    render(
      <MarkdownRenderer content={richContent} />
    )

    await waitFor(() => {
      expect(dispatchSpy).toHaveBeenCalled()
      expect(track).toHaveBeenCalledWith(
        'markdown_rendered',
        expect.objectContaining({
          length: expect.any(Number),
          containsTable: false,
          containsCodeBlock: true,
        })
      )
    })

    const dispatchedEvent = dispatchSpy.mock.calls.find(([event]) => event?.type === 'markdown:rendered')?.[0]
    expect(dispatchedEvent?.detail).toEqual(expect.objectContaining({
      length: expect.any(Number),
      containsCodeBlock: true,
    }))

    dispatchSpy.mockRestore()
    delete window.analytics
  })
})
