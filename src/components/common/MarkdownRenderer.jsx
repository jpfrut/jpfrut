import { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import DOMPurify from 'dompurify'
import remarkGfm from 'remark-gfm'

import styles from './MarkdownRenderer.module.css'

const MarkdownRenderer = ({ content, className = '' }) => {
  const sanitizedContent = useMemo(() => {
    const normalizedContent = (content ?? '')
      .split('\n')
      .map(line => line.trimStart())
      .join('\n')
      .trim()

    return DOMPurify.sanitize(normalizedContent, { USE_PROFILES: { html: true } })
  }, [content])

  if (!sanitizedContent) return null

  return (
    <div className={`${styles.markdown} ${className}`.trim()}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ className: headingClass, children, ...props }) => (
            <h1 className={`${styles.h1} ${headingClass ?? ''}`.trim()} {...props}>
              {children}
            </h1>
          ),
          h2: ({ className: headingClass, children, ...props }) => (
            <h2 className={`${styles.h2} ${headingClass ?? ''}`.trim()} {...props}>
              {children}
            </h2>
          ),
          h3: ({ className: headingClass, children, ...props }) => (
            <h3 className={`${styles.h3} ${headingClass ?? ''}`.trim()} {...props}>
              {children}
            </h3>
          ),
          p: ({ className: paragraphClass, children, ...props }) => (
            <p className={`${styles.paragraph} ${paragraphClass ?? ''}`.trim()} {...props}>
              {children}
            </p>
          ),
          ul: ({ className: listClass, children, ...props }) => (
            <ul className={`${styles.unorderedList} ${listClass ?? ''}`.trim()} {...props}>
              {children}
            </ul>
          ),
          ol: ({ className: listClass, children, ...props }) => (
            <ol className={`${styles.orderedList} ${listClass ?? ''}`.trim()} {...props}>
              {children}
            </ol>
          ),
          li: ({ className: itemClass, children, ...props }) => (
            <li className={`${styles.listItem} ${itemClass ?? ''}`.trim()} {...props}>
              {children}
            </li>
          ),
          a: ({ className: linkClass, children, ...props }) => (
            <a
              className={`${styles.link} ${linkClass ?? ''}`.trim()}
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            >
              {children}
            </a>
          ),
          blockquote: ({ className: quoteClass, children, ...props }) => (
            <blockquote className={`${styles.blockquote} ${quoteClass ?? ''}`.trim()} {...props}>
              {children}
            </blockquote>
          ),
          hr: () => <hr className={styles.divider} />, 
          pre: ({ className: preClass, children, ...props }) => (
            <pre className={`${styles.codeBlock} ${preClass ?? ''}`.trim()} {...props}>
              {children}
            </pre>
          ),
          code: ({ inline, className: codeClass, children, ...props }) => {
            const content = Array.isArray(children) ? children.join('') : children
            const isInline = inline ?? (!codeClass && !String(content).includes('\n'))

            if (isInline) {
              return (
                <code
                  className={`${styles.inlineCode} ${codeClass ?? ''}`.trim()}
                  {...props}
                >
                  {children}
                </code>
              )
            }

            return (
              <code className={codeClass} {...props}>
                {content}
              </code>
            )
          },
          table: ({ className: tableClass, children, ...props }) => (
            <div className={styles.tableWrapper}>
              <table className={`${styles.table} ${tableClass ?? ''}`.trim()} {...props}>
                {children}
              </table>
            </div>
          ),
          thead: ({ className: headClass, children, ...props }) => (
            <thead className={`${styles.tableHead} ${headClass ?? ''}`.trim()} {...props}>
              {children}
            </thead>
          ),
          tbody: ({ className: bodyClass, children, ...props }) => (
            <tbody className={`${styles.tableBody} ${bodyClass ?? ''}`.trim()} {...props}>
              {children}
            </tbody>
          ),
          tr: ({ className: rowClass, children, ...props }) => (
            <tr className={`${styles.tableRow} ${rowClass ?? ''}`.trim()} {...props}>
              {children}
            </tr>
          ),
          th: ({ className: headerClass, children, ...props }) => (
            <th className={`${styles.tableHeader} ${headerClass ?? ''}`.trim()} {...props}>
              {children}
            </th>
          ),
          td: ({ className: cellClass, children, ...props }) => (
            <td className={`${styles.tableCell} ${cellClass ?? ''}`.trim()} {...props}>
              {children}
            </td>
          ),
        }}
      >
        {sanitizedContent}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer
