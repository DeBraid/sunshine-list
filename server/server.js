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