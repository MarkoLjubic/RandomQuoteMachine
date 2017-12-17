export const quotesApi = 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=';

export const quotesHeader = {
  "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
  Accept: "application/json",
  "Content-Type": "application/x-www-form-urlencoded"
}

export const twitter = text =>
  `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(text)}`;

const colors = [
  '#4286f4',
  '#42f442',
  '#f442a1',
  '#f4d142',
  '#f48c42',
  '#0c97af',
  '#690caf',
  '#7da81a',
  '#1aa8a8',
  '#7f7d02',
];

export const getColor = () =>
  colors[parseInt(Math.random() * 10, 10)]
