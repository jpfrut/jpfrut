import { Fragment, cloneElement, isValidElement } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import GlossaryText from './GlossaryText'

const MarkdownText = ({ children, enableGlossary = true, className = '' }) => {
  if (!children) return null

  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Render paragraphs with glossary support
          p: ({ children }) => <p className="mb-3 last:mb-0">{renderWithGlossary(children, enableGlossary)}</p>,
          // Render strong/bold text
          strong: ({ children }) => (
            <strong className="font-semibold text-neutral-800">
              {renderWithGlossary(children, enableGlossary)}
            </strong>
          ),
          // Render emphasis/italic text
          em: ({ children }) => <em className="italic">{renderWithGlossary(children, enableGlossary)}</em>,
          // Render unordered lists with proper bullets
          ul: ({ children }) => (
            <ul className="space-y-1 my-2">
              {children}
            </ul>
          ),
          // Render list items with bullet points
          li: ({ children }) => (
            <li className="flex items-start gap-2">
              <span className="text-primary-500 mt-1 flex-shrink-0 text-base leading-none">•</span>
              <span className="flex-1">
                {renderWithGlossary(children, enableGlossary)}
              </span>
            </li>
          ),
          // Render ordered lists
          ol: ({ children }) => (
            <ol className="space-y-1 my-2 list-decimal list-inside">
              {children}
            </ol>
          ),
          // Render headers
          h1: ({ children }) => (
            <h1 className="text-xl font-bold text-neutral-800 mb-2">
              {renderWithGlossary(children, enableGlossary)}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-lg font-bold text-neutral-800 mb-2">
              {renderWithGlossary(children, enableGlossary)}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-base font-bold text-neutral-800 mb-1">
              {renderWithGlossary(children, enableGlossary)}
            </h3>
          ),
          // Render inline code
          code: ({ inline, children }) =>
            inline ? (
              <code className="bg-neutral-100 text-primary-700 px-1 py-0.5 rounded text-sm font-mono">
                {children}
              </code>
            ) : (
              <code className="block bg-neutral-100 p-3 rounded-lg text-sm font-mono overflow-x-auto">
                {children}
              </code>
            ),
          // Render blockquotes
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary-500 pl-4 italic text-neutral-600 my-2">
              {renderWithGlossary(children, enableGlossary)}
            </blockquote>
          ),
          hr: () => <hr className="my-4 border-neutral-200" />,
          table: ({ children }) => (
            <div className="overflow-x-auto my-4 rounded-xl border border-neutral-200">
              <table className="w-full text-sm text-left border-collapse">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-neutral-50 text-neutral-600">{children}</thead>,
          tbody: ({ children }) => <tbody className="divide-y divide-neutral-100">{children}</tbody>,
          tr: ({ children }) => <tr className="last:border-b-0">{children}</tr>,
          th: ({ children }) => (
            <th className="px-3 py-2 font-semibold text-neutral-700">
              {renderWithGlossary(children, enableGlossary)}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-3 py-2 text-neutral-700">
              {renderWithGlossary(children, enableGlossary)}
            </td>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}

const renderWithGlossary = (children, enableGlossary) => {
  if (!enableGlossary) return children

  if (typeof children === 'string') {
    return <GlossaryText text={children} enableGlossary={enableGlossary} />
  }

  if (Array.isArray(children)) {
    return children.map((child, index) => (
      <Fragment key={index}>{renderWithGlossary(child, enableGlossary)}</Fragment>
    ))
  }

  if (isValidElement(children)) {
    if (children.props?.inline || children.props?.node?.tagName === 'code') {
      return children
    }

    return cloneElement(children, {
      ...children.props,
      children: renderWithGlossary(children.props.children, enableGlossary)
    })
  }

  return children
}

export default MarkdownText
