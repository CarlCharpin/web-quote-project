var quotes = [
	'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.  – Albert Einstein'
	'Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious. – Stephen Hawking'
	'Those who are not shocked when they first come across quantum theory cannot possibly have understood it.  –  Niels Bohr'
	'I love physics with all my heart. It is a kind of personal love, as one has for a person to whom one is grateful for many things. – Lise Meitner'
	'Energy is liberated matter, matter is energy waiting to happen. – Bill Bryson'
	'However difficult life may seem, there is always something you can do and succeed at. – Stephen Hawking'
	'I think nature’s imagination is so much greater than man’s, she’s never going to let us relax – Richard Feynman'
	'A Physicist is just an atom’s way of looking at itself. – Niels Bohr'
	'Love isn’t the most important thing. Physics is. – Krishan Kumar'
	'To understand hydrogen is to understand all physics. – Victor Frederick Weisskopf'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}