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
  //nbrMMceZO1IOwwdSGsU9iknxjJ82Mhgs
  let apiKey = "api-key=nbrMMceZO1IOwwdSGsU9iknxjJ82Mhgs";
  let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  let queryString = "";

  let $searchTerm = $("#searchTerm");
  let $numRecords = $("#numRecords");
  let $startYear = $("#startYear");
  let $endYear = $("#endYear");
  let $articles = $(".articles");

  function convertDate(date){
    return `${date}0101`;
  }

  $(document).on("click", ".searchBtn", function(){
    queryString = `&q=${$searchTerm.text()}
                   &begin_date=${$startYear.text()}0101
                   &end_date=${$endYear.text()}0101`;
    
    $.get(`${queryURL}${queryString}${apiKey}`, function(articles) {
        let results = articles.response.docs;
        for (let i = 0; i < $numRecords.val(); i++){
          //append a new li with this info
          $articles.append($("<li>").text(results[i].abstract));
        }
    });
  });

  $(document).on("click", ".clearBtn", function(){

    [$searchTerm, $startYear, $endYear].forEach(elem =>{
      elem.text("");
    });
    $numRecords.val("1");
  });



});