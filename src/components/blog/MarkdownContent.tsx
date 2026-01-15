'use client'

interface MarkdownContentProps {
  content: string
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const parseMarkdown = (text: string): string => {
    const lines = text.trim().split('\n')
    let html = ''
    let inList = false
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const trimmedLine = line.trim()
      
      // Skip empty lines but close list if open
      if (trimmedLine === '') {
        if (inList) {
          html += '</ul>\n'
          inList = false
        }
        continue
      }
      
      // H2 headers
      if (trimmedLine.startsWith('## ')) {
        if (inList) {
          html += '</ul>\n'
          inList = false
        }
        const headerText = trimmedLine.slice(3)
        html += `<h2 class="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pb-3 border-b border-[#005CFF]/30">${headerText}</h2>\n`
        continue
      }
      
      // H3 headers
      if (trimmedLine.startsWith('### ')) {
        if (inList) {
          html += '</ul>\n'
          inList = false
        }
        const headerText = trimmedLine.slice(4)
        html += `<h3 class="text-xl md:text-2xl font-semibold text-[#00D4FF] mt-8 mb-4">${headerText}</h3>\n`
        continue
      }
      
      // H4 headers
      if (trimmedLine.startsWith('#### ')) {
        if (inList) {
          html += '</ul>\n'
          inList = false
        }
        const headerText = trimmedLine.slice(5)
        html += `<h4 class="text-lg font-semibold text-white mt-6 mb-3">${headerText}</h4>\n`
        continue
      }
      
      // List items
      if (trimmedLine.startsWith('- ')) {
        if (!inList) {
          html += '<ul class="space-y-3 my-6 ml-4">\n'
          inList = true
        }
        let listContent = trimmedLine.slice(2)
        // Handle bold in list items
        listContent = listContent.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
        html += `<li class="flex items-start gap-3 text-gray-300 leading-relaxed">
          <span class="w-2 h-2 bg-[#005CFF] rounded-full mt-2 flex-shrink-0"></span>
          <span>${listContent}</span>
        </li>\n`
        continue
      }
      
      // Close list if we're starting a paragraph
      if (inList) {
        html += '</ul>\n'
        inList = false
      }
      
      // Regular paragraphs
      let paragraphContent = trimmedLine
      // Handle bold text
      paragraphContent = paragraphContent.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      // Handle italic text
      paragraphContent = paragraphContent.replace(/\*(.*?)\*/g, '<em class="text-[#00D4FF]">$1</em>')
      
      html += `<p class="text-gray-300 leading-relaxed mb-6 text-lg">${paragraphContent}</p>\n`
    }
    
    // Close any open list
    if (inList) {
      html += '</ul>\n'
    }
    
    return html
  }

  return (
    <div 
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  )
}
