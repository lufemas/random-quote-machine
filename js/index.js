'use strict'


// $('#quote-box').css({'background-color':'rgb( 0,0 ,0 ,) !important'})

// debugLog(

//     $('#quote-box')[0].style.backgroundColor = 'red'
// )

const generateNewQuote = (e)=>{

    let rndIdx = Math.floor(Math.random() * quotes.length)


    $('#text').text(`"${quotes[rndIdx].quote}"`)
    $('#author').text(quotes[rndIdx].author)
    $('#tweet-quote').attr('href','https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="'+quotes[rndIdx].quote+'" '+quotes[rndIdx].author)
    // $('body').css('background-color',`rgb( ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)} ,${Math.floor(Math.random() * 255)} ,)`)
    $('body')[0].style.backgroundColor = `rgb( ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)} ,${Math.floor(Math.random() * 255)})`
    $('#new-quote')[0].style.backgroundColor = $('body')[0].style.backgroundColor
    $('#tweet-quote')[0].style.backgroundColor = $('body')[0].style.backgroundColor
    $('#text')[0].style.color = $('body')[0].style.backgroundColor
    $('#text').addClass('animated bounce infinite')
    $('#author')[0].style.color = $('body')[0].style.backgroundColor

    

    debugLog(

        $('body')[0].style.backgroundColor
        )

}

generateNewQuote()
$('#new-quote').click(generateNewQuote)




function debugLog(...arg){
    console.log('------LOG------')
    console.log( ...arg)

}