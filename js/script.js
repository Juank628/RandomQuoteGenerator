/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
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
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  selectedQuote = getRandomQuote();
  htmlQuote = `<p>"${selectedQuote.quote}"</p>`;
  htmlDetails =
    "<p>" +
    selectedQuote.source  + ", " +
    (selectedQuote.citation === undefined ? '' : selectedQuote.citation) + ", " +
    (selectedQuote.year === undefined ? '' : selectedQuote.year) + 
    "</p>";
  htmlCategory = selectedQuote.category ? `<p>${selectedQuote.category}</p>` : null;
  return htmlQuote + htmlDetails + htmlCategory
}

console.log(printQuote());

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.