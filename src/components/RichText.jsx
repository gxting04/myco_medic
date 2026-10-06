import React from 'react'

// Inline **bold** inside a line.
function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**') && part.length > 4 ? (
      <strong key={i} className="font-semibold text-gray-900">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  )
}

/**
 * Renders the lightweight markup used in product descriptions:
 *   **Heading**      on its own line → subheading
 *   • item           → bullet list (consecutive lines grouped into one list);
 *                      "1.item" and "2 x item" lines are treated the same way
 *   anything else    → paragraph
 */
function RichText({ text, className = '' }) {
  if (!text) return null
  const blocks = []
  let list = null

  String(text)
    .split('\n')
    .forEach((raw) => {
      const line = raw.trim()
      // Bullets ("• x", "- x"), numbered items ("1.Isolation: …") and kit
      // quantities ("2 x Gallipots") all render as list items.
      const isBullet = line.startsWith('•') || /^[-*]\s/.test(line)
      const isNumbered = /^\d+\.\s*\S/.test(line) && !/^\d+\.\d/.test(line)
      const isQuantity = /^\d+\s*x\s*\S/i.test(line)
      if (isBullet || isNumbered || isQuantity) {
        if (!list) {
          list = []
          blocks.push({ type: 'list', items: list })
        }
        list.push(isBullet ? line.replace(/^(•|[-*])\s*/, '') : isNumbered ? line.replace(/^\d+\.\s*/, '') : line)
        return
      }
      list = null
      if (!line) return
      if (/^\*\*[^*]+\*\*:?$/.test(line)) {
        blocks.push({ type: 'heading', text: line.replace(/\*\*/g, '').replace(/:$/, '') })
      } else {
        blocks.push({ type: 'p', text: line })
      }
    })

  return (
    <div className={`space-y-4 text-[15px] leading-relaxed text-gray-600 ${className}`}>
      {blocks.map((b, i) => {
        if (b.type === 'heading') {
          return (
            <h3 key={i} className="pt-3 text-sm font-semibold uppercase tracking-wider text-gray-900 first:pt-0">
              {b.text}
            </h3>
          )
        }
        if (b.type === 'list') {
          return (
            <ul key={i} className="space-y-2">
              {b.items.map((item, j) => (
                <li key={j} className="flex gap-3">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" aria-hidden />
                  <span>{renderInline(item)}</span>
                </li>
              ))}
            </ul>
          )
        }
        return <p key={i}>{renderInline(b.text)}</p>
      })}
    </div>
  )
}

export default RichText
