const rng = require('random-seed').create(process.env.SEED);
const wordList = require('random-words').wordList;

const titles = [ 'Jax', 'Client Side', 'Colgate-Palmolive Ajax', 'Not Actually XML Anymore' ];
const title = titles[rng(titles.length)];

const subdomain = rng.random().toString(16).substr(2);
const flag = wordList[rng(wordList.length)]+'-'+wordList[rng(wordList.length)];

const register_docker = {};
register_docker[`codecup-ajax-${subdomain}`] = {
  image: "srnd/codecup-ajax:latest",
  env: {
    FLAG: flag,
  },
  ports: [
    {
      port: 8080,
      subdomain
    },
  ],
};

console.log(JSON.stringify({
  type: "Web Security",
  title,
  points: 100,
  question: `Data's gotta get there somehow: https://${subdomain}.codecupchallenge.com/`,
  answer: flag,
  hint: 'What can be set in the client can be changed in the client.',
  explain: 'The client sends an AJAX request to the server, but it includes the parameter "is_admin" which can be changed.',
  register_docker
}));
