const util = require('util');
const bignum = require('bignum');
const rng = require('random-seed').create(process.env.SEED);

const titles = [ `XOR Code`, `Secret Number` ]
const title = titles[rng(titles.length)];

const flag = rng.intBetween(10,50000000);
const xorWith = rng.intBetween(10, 50000000);
const result = bignum(flag).xor(xorWith);

console.log(JSON.stringify({
  type: "Cryptography",
  title,
  points: 300,
  question: `${result} XOR ${xorWith} = ?`,
  answer: flag,
  hint: `It's a logical operator.`,
  explain: `XOR is a reversible simple encryption function. You can look up a calculator online.`
}));
