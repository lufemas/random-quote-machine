'use strict'

debugLog(quotes)

debugLog(quotes[0].quote)
debugLog(quotes[0].author)

let rndIdx = Math.floor(Math.random() * quotes.length)

debugLog(rndIdx)

$('#text').text(`"${quotes[rndIdx].quote}"`)
$('#author').text(quotes[rndIdx].author)





function debugLog(...arg){
    console.log('------LOG------')
    console.log( ...arg)

}