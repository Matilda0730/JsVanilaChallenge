const quotes = [
  {
    quote : "If your life were a book and you were the author, how would you want your story to go?",
    author: "Amy purdy"
  },
  {
    quote : "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    quote : "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch"
  },
  {
    quote : "You know you're in love when you can't fall asleep because reality is finally better than your dreams." ,
    author: "Dr. Seuss"
  },
  {
    quote : "You only live once, but if you do it right, once is enough.",
    author: " Mae West"
  },
  {
    quote : "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    quote : "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  {
    quote : "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote : "Well done is better than well said. ",
    author: "Benjamin Franklin"
  },
];

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;