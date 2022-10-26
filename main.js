let colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];
let currentQuote = "";
let currentAuthor = "";
//Load JSON data
// fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
//     .then(response => response.json())
//     .then(data => console.log(data));

//Load JSON data with async await fetch JSON

async function fetchQuotesJSON() {
  const response = await fetch(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  );
  // wait until the request completes...

  const quotes = await response.json();
  return quotes;
}

fetchQuotesJSON().then((quotes) => {
  //Get Random Quote index
  function getRandomQuoteIndex() {
    return quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
  }

  // Access quote text and author
  function getQuote() {
    let randomQuote = getRandomQuoteIndex();
    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;
    document.querySelector(".quote-text").textContent = currentQuote;

    document.querySelector(".quote-author").textContent = currentAuthor;
    let randomColor = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomColor];
    document.body.style.color = colors[randomColor];
    document.querySelector(".quote-text").color = colors[randomColor];
    document.querySelector(".newQuoteBtn").style.backgroundColor =
      colors[randomColor];
    document.querySelector(".newQuoteBtn").style.color = "white";
  }

  window.onload = getQuote();

  // Run getQuote function when the new quote button gets clicked
  document.querySelector(".newQuoteBtn").addEventListener("click", getQuote);

  // new quote button style with JS
  const newQuoteBtn = document.querySelector("#new-quote");
  newQuoteBtn.style.padding = "8px 20px";
  newQuoteBtn.style.borderRadius = "10px";
  newQuoteBtn.style.fontSize = "18px";
});

document.querySelector(".quote-box").style.boxShadow =
  "5px 8px 0 rgba(0, 0, 0, .3)";
