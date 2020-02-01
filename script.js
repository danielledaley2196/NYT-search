// js for NYT search 

$(function (){

  let apiKey = "api-key=nbrMMceZO1IOwwdSGsU9iknxjJ82Mhgs";
  let apiSecret = "16LSk18wu5TAXNoC";
  let queryString = "&q=puppies";
  let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?${apiKey}${queryString}`;

  $.get(queryURL, function(response){
    let results = response;
    console.log(results);
  });

});