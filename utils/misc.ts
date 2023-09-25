export const compareSemanticVersions = (a: string, b: string) => {
  // 1. Split the strings into their parts.
  const a1 = a.split('.')
  const b1 = b.split('.')
  // 2. Contingency in case there's a 4th or 5th version
  const len = Math.min(a1.length, b1.length)
  // 3. Look through each version number and compare.
  for (let i = 0; i < len; i++) {
    const a2 = +a1[i] || 0
    const b2 = +b1[i] || 0

    if (a2 !== b2) {
      return a2 > b2 ? 1 : -1
    }
  }

  // 4. We hit this if the all checked versions so far are equal
  //
  return b1.length - a1.length
}

export const getHeadersFromMarkdownContent = (markdown: string) => {
  const headingsRegEx = /(?<flag>#{1,6})\s+(?<content>.+)/g
  const headings = Array.from(markdown.matchAll(headingsRegEx)).map((match) => {
    // Remove special characters and spaces from the text to create a valid ID
    const headerSlug = match
      .groups!.content.trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase()
    return {
      heading: `h${match.groups!.flag.length}`,
      content: match.groups!.content,
      headerSlug,
    }
  })
  return headings
}
