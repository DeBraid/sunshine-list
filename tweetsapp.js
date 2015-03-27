if (Meteor.isClient) {

  Meteor.call('getHeaders', function (error, result) {
    if (error) {
      console.log("error", error);
    };

    console.log(result);
    console.log(typeof(result));
    Session.set("headers", result);
  });

  Template.tweets.helpers({
    rant: function () {
      return Session.get("headers");
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    var cheerio = Meteor.npmRequire('cheerio');

    Meteor.methods({
      getHeaders: function () {
        var rootUrl = "http://www.fin.gov.on.ca/en/publications/salarydisclosure/pssd/orgs-tbs.php",
            pageNum = "?pageNum_tbs=0",
            org = "&organization=electricity",
            year = "&year=2014";
        result = Meteor.http.get( rootUrl + pageNum + org + year );
        $ = cheerio.load(result.content);
  
        var rawHeaders = $('#right_column > div:nth-child(2) > table > thead > tr:nth-child(3) th strong')
            .clone()    //clone the element
            .children() //select all the children
            .remove()   //remove all the children
            .end()  //again go back to selected element
            .text();
        var headers = rawHeaders.split(" / ");             
        
        return headers;
      }
    })
  });
}

// Fetch the data from the table body
 
// var tableObject = $("#tableID tbody tr.tableClass").map(function(i){ 
  
//   var row = {};
 
//     $(this).find('td').each(function(i){
//       var rowName = headers[i];
//       row[rowName] = $(this).text();
//     });
  
//   return row;
 
//  }).get();
 
// // convert object to JSON
 
// JSON.stringify(tableObject);