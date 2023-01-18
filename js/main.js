var quotes=[
    `“Be yourself; everyone else is already taken.”
    ― Oscar Wilde`,`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    ― Albert Einstein`,`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
    ― Dr. Seuss`,`“Be yourself; everyone else is already taken.”
    ― Oscar Wilde`,`“So many books, so little time.”
    ― Frank Zappa`
]

function newQuote(){
    var randomQuotes = Math.floor(Math.random() * (quotes.length-1));
    document.getElementById('quote').innerHTML = quotes[randomQuotes];
}