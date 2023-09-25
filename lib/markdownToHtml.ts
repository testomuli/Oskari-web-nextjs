import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).use(remarkGfm).process(markdown)
  console.log(result.toString())
  return result.toString()
}

// const insertIdsToHeaders = (markdown: string) => {
//   const tempElement = document.createElement('div');
// tempElement.innerHTML = markdown;

// // Get all header elements (h1, h2, h3, h4, h5, h6) within the temporary element
// const headers = tempElement.querySelectorAll('h1, h2, h3, h4, h5, h6');

// // Loop through each header and set its id attribute
// if (headers.length === 0) return markdown;
// headers.forEach(header => {
//   // Get the text content of the header
//   const headerText = header?.textContent?.trim();

//   // Remove special characters and spaces from the text to create a valid ID
//   const headerId = headerText?.replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').toLowerCase();

//   // Set the id attribute of the header
//   header.id = headerId;
// });

// // Get the modified HTML string
// const modifiedHtmlString = tempElement.innerHTML;

// // Log or use the modified HTML string as needed
// return modifiedHtmlString
// }
