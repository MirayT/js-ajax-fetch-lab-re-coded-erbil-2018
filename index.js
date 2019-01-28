function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  const token = '178e163429470240f30d4dda555fc4fe0b4f9b8a';

fetch('https://api.github.com/MirayT/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
const token = '178e163429470240f30d4dda555fc4fe0b4f9b8a';
const postData = {
  body: 'Great stuff'
};

fetch(
  'https://api.github.com/repos/:your_ghname/:your_repo/commits/:sha/comments',
  {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }
).then(res => console.log(res));
