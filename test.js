const owner = 'carloslme';
const repo = 'python-utils';
const apiUrl = `https://raw.githubusercontent.com/carloslme/intro-data-engineering/main/README.md`;

fetch('https://raw.githubusercontent.com/carloslme/intro-data-engineering/main/README.md', {
  headers: {
    'Authorization': 'token TOKEN'
  },
  mode: 'no-cors'
})
  .then(response => response.text())
  .then(data => {
    // Handle the data from the README.md file
    console.log(data);
  })
  .catch(error => console.error(error));