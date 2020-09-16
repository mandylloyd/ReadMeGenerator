// function to generate markdown for README
function READMEMarkdown(answers) {
  return `
  # ${answers.title}
  Creator: ${answers.name}
  GitHub: https://github.com/${answers.gitUser}
  
  # Description
  ${answers.description}
  
  # Table of Contents 
  1. [Title, Name, GitHub]
  2. [Description]
  3. [Installation Instructions]
  4. [Useage Instructions]
  5. [Liscenses Required]
  6. [Contribution]
  7. [Testing]
  8. [Contact]
  
  # Installation Instructions
  ${answers.howToInstall}
  
  # Usage Instructions
  ${answers.howToUse}
 
  # Licenses Required
  ${answers.licenses}
  
  # Contribution   
  ${answers.contribution}
  
  # Testing 
  ${answers.test}
  
  # Contact
  ${answers.email}
`}

module.exports = READMEMarkdown;
