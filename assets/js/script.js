

//JokeAPI	Programming, Miscellaneous and Dark Jokes
//JokeAPI  documentation https://sv443.net/jokeapi/v2/
//Doesn't use API keys
//I think we should use separate functions to create different query URL's for each api
function jokeApiQuery(){
    //select any joke
    let any = "Any";
    //muiltiple selections are seperated by a ","
    //catagory options 
    // let more = ","
    // let miscellaneous = "Miscellaneous";
    // let programming = "Programming";
    // let dark = "Dark";
    // let pun = "Pun";
    // blacklist flag options
    let blacklistFlags = "?blacklistFlags=";
    // let nsfw = "nsfw";
    // let religious = "religious";
    // let political = "political";
    let racist = "racist";
    // let sexist = "sexist";
    //each option after is separated by a "&"
    let and = "&"
    //type options *twoPart is default
    // let type = "type=single"
    //amount of jokes * 1 joke is default
    let amount = "amount=4";
    //the url for jokeAPI
    let url = "https://sv443.net/jokeapi/v2/joke/";
    //this will need to be coded for user options but for test purposes
    let queryUrl = url + any + blacklistFlags + racist + and + amount;
    ajaxRequest(queryUrl);
};

//Pexels	Free Stock Photos and Videos	
//Pexel API Documentation https://www.pexels.com/api/documentation/
//turtorial on pexel use in the browser https://www.youtube.com/watch?v=d1Nke7twxMM
function pexelApiQuery(search){
    //we can put any string as the search to get photos
    let query = "?query=";
    let perPage = "per_page=4";
    let page = "page=1";
    let pexelsApiKey = "563492ad6f91700001000001a7186190942c4e13817d5ad0d55b7ade";
    let url = "https://api.pexels.com/v1/search";
    let and = "&"
    let queryUrl = url + query + search + and + perPage + and + page;

    $.ajax({
        url: queryUrl,
        beforeSend: function(xhr) {
            xhr.setRequestHeader( "Authorization", pexelsApiKey);
        },
        method: "GET"
    }).then(function(response){
        console.log(response);
        var testingDiv = $("#testing");
        testingDiv.attr("src", response.photos[0].src.medium);

    }, function(error){
        console.log(error);
    });

    // You have to link the photo back to pexels by using 
    //  <a href="https://www.pexels.com">Photos provided by Pexels</a>
    //      <!-- or show our white logo -->
    //  <a href="https://www.pexels.com">
    //  <img src="https://images.pexels.com/lib/api/pexels-white.png" />
    //  </a>
    //      <!-- or show our black logo -->
    //  <a href="https://www.pexels.com">
    //  <img src="https://images.pexels.com/lib/api/pexels.png" />
    //  </a>
};

//Giphy 
//Giphy API Documentation https://developers.giphy.com/docs/api#quick-start-guide
function giphyApiQuery(search){
    let giphyApiKey = "api_key=1RtzRKPjjkz1zLpVge9zotETQENJDzjR";
    let url = "https://api.giphy.com/v1/gifs/search?";
    //string req - search a query term or phrase
    let query = "q="
    //integer(int32) - defaults to 25
    //let limit = "limit="
    //integer(int32) - defaults to 0
    //let offset = "offset="
    //string - filters results by specified rating g, pg, pg-13, r
    //let rating = "rating="
    //each option after is separated by a "&"
    let and = "&"
    let queryUrl = url + giphyApiKey + and + query + search;

    ajaxRequest(queryUrl);

};


//this function will make all ajax request
function ajaxRequest(queryUrl){
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response);
    }, function(error){
        console.log(error);
    });

};

$("#sadBtn").on("click", function(){
    choiceOfMood("sad");
})

$("#happyBtn").on("click", function(){
    choiceOfMood("happy");
})

//Determine the choice the user made
function choiceOfMood(choice){
    pexelApiQuery(choice);
}

//test response
jokeApiQuery();
pexelApiQuery("sad");
giphyApiQuery("popcorn");