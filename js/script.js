/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  quotes array
***/

var quotes = [
  {
    quote: "If everything seems under control, you're not going fast enough",
    source: 'Mario Andretti',
    year: '1978',
    category: "sports"
  },
  {
    quote: "To achieve anything, you must be prepared to dabble on the boundary of disaster",
    source: 'Stirling Moss',
    category: "sports"
  },
  {
    quote: "If I had my life to live over again, I would have made a rule to read some poetry and listen to some music at least once every week.",
    source: 'Charles Darwin',
    citation: 'The Autobiography of Charles Darwin',
    year: '1887',
    category: "science"
  },
  {
    quote: "When you are in the ocean you must swim.",
    source: 'Pedro Almodovar',
    citation: 'Academy Awards',
    year: '2000',
    category: "cinematic"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: 'Oscar Wilde',
    category: "literature"
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    source: 'Edgar Allan Poe',
    category: "literature"
  },
];

/***
  generate random quote
***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
  generate random color
***/

function getRandomColor() {
  var randomColor = {};
  randomColor.red = Math.floor(Math.random() * 255);
  randomColor.green = Math.floor(Math.random() * 255);
  randomColor.blue = Math.floor(Math.random() * 255);
  return randomColor;
}

/***
  concatenate HTML, set background color, and print in the DOM 
***/

function printQuote() {
  var selectedQuote = getRandomQuote();
  var htmlToPrint = '';
  
  htmlToPrint += `<p class="quote"> ${selectedQuote.quote} </p>`;
  htmlToPrint += `<p class="source"> ${selectedQuote.source}`;

  if(selectedQuote.citation){
    htmlToPrint += `<span class="citation"> ${selectedQuote.citation} </span>`;
  }

  if(selectedQuote.year){
    htmlToPrint += `<span class="year"> ${selectedQuote.year} </span>`;
  }

  htmlToPrint += `<span class="category"> ${selectedQuote.category} </span></p>`
  
  document.getElementById('quote-box').innerHTML = htmlToPrint;

  var primaryColor = getRandomColor();
  document.body.style.backgroundColor = `rgb(${primaryColor.red},${primaryColor.green},${primaryColor.blue})`;
}

printQuote();

/***
  auto refresh quote
***/

var autoRefresh = window.setInterval(printQuote, 20000);

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.