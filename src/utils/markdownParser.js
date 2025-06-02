import { marked } from 'marked'
import hljs from 'highlight.js/lib/core'

// Import only the languages you need
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
// Add more as needed

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('xml', xml)

// Import the theme CSS (github-dark-dimmed)
import 'highlight.js/styles/github-dark-dimmed.css'

marked.setOptions({
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value
      } catch (e) {
        // fallback to auto
      }
    }
    try {
      return hljs.highlightAuto(code).value
    } catch (e) {
      // fallback to plain
    }
    return code
  },
  langPrefix: 'hljs language-',
})

export function parseMarkdown(markdownString) {
  if (typeof markdownString !== 'string') {
    console.warn('parseMarkdown: input was not a string.')
    return ''
  }
  return marked.parse(markdownString)
}
