// js for NYT search 

$(function (){

  // let apiKey = "api-key=nbrMMceZO1IOwwdSGsU9iknxjJ82Mhgs";
  // let apiSecret = "16LSk18wu5TAXNoC";
  // let queryString = "&q=puppies";
  // let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?${apiKey}${queryString}`;

  // $.get(queryURL, function(response){
  //   let results = response;
  //   console.log(results);
  // });

  // DECLARATIONS
  let apiKey = "api-key=nbrMMceZO1IOwwdSGsU9iknxjJ82Mhgs";
  let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  let queryString = "";

  let $searchTerm = $("#searchTerm");
  let $numRecords = $("#numRecords");
  let $startYear = $("#startYear");
  let $endYear = $("#endYear");


  $(document).on("click", ".searchBtn", function({
    
  }));

  $(document).on("click", ".clearBtn", function(){

    [$searchTerm, $startYear, $endYear].forEach(elem =>{
      elem.text("");
    });
    $numRecords.val("1");
  });



});