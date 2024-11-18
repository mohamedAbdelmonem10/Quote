var arrayOfQuotes = [
  {
    author: "Jim Rohn",
    quote: "Beware of what you become in pursuit of what you want.",
  },
  {
    author: "Oscar Wilde",
    quote: "“Be yourself; everyone else is already taken.”",
  },
  {
    author: "Mae West",
    quote: "“You only live once, but if you do it right, once is enough.”",
  },
  {
    author: "Mahatma Gandhi",
    quote:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
  },
  {
    author: "Andre Gide",
    quote:
      "“It is better to be hated for what you are than to be loved for what you are not.”",
  },
  {
    author: "Stephen Chbosky",
    quote: "“We accept the love we think we deserve.”",
  },
  {
    author: "Oscar Wilde",
    quote: "“Always forgive your enemies; nothing annoys them so much.”",
  },
  {
    author: "Elbert Hubbard",
    quote: "“A friend is someone who knows all about you and still loves you.”",
  },
];

function getQuote() {
  var random;
  random = Math.floor(Math.random() * arrayOfQuotes.length);
  document.getElementById(
    "cartonaQuote"
  ).innerHTML = `<p id="Quote" class="text-center fw-bold fs-2">${arrayOfQuotes[random].quote}</p>`;
  document.getElementById(
    "cartonaQuoteAuthor"
  ).innerHTML = `<p id="QuoteAuthor" class="text-center fw-medium fs-2">-- ${arrayOfQuotes[random].author}</p>`;
}
