import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js/lib/core'

// Import languages
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
import typescript from 'highlight.js/lib/languages/typescript'
import json from 'highlight.js/lib/languages/json'
import bash from 'highlight.js/lib/languages/bash'

// Register languages
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('js', javascript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('ts', typescript)
hljs.registerLanguage('json', json)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('shell', bash)

// Import theme
import 'highlight.js/styles/panda-syntax-dark.css'

// Create markdown-it instance with highlight.js
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${hljs.highlight(str, { language: lang }).value}</code></pre>`
      } catch (__) {}
    }

    try {
      return `<pre class="hljs"><code>${hljs.highlightAuto(str).value}</code></pre>`
    } catch (__) {}

    return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`
  },
})

export function parseMarkdown(markdownString) {
  if (typeof markdownString !== 'string') {
    console.warn('parseMarkdown: input was not a string.')
    return ''
  }

  try {
    return md.render(markdownString)
  } catch (error) {
    console.error('Error parsing markdown:', error)
    return `<p style="color: red;">Error parsing markdown content: ${error.message}</p>`
  }
}
