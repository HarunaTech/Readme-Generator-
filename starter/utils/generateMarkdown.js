// function to generate markdown for README 
// # indicate Heading 1 style according to readme markdown and Title is relative to index.js prompt
function generateMarkdown(data) {
  return `# ${data.Title}  
  
  
`;
}

module.exports = generateMarkdown;
