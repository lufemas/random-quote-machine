'use strict'



const generateNewQuote = (e)=>{

    let rndIdx = Math.floor(Math.random() * quotes.length)


    $('#text').text(`"${quotes[rndIdx].quote}"`)
    $('#author').text(quotes[rndIdx].author)
    $('#tweet-quote').attr('href','https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="'+quotes[rndIdx].quote+'" '+quotes[rndIdx].author)

}

generateNewQuote()
$('#new-quote').click(generateNewQuote)




function debugLog(...arg){
    console.log('------LOG------')
    console.log( ...arg)

}