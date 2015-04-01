Meteor.startup(function () {
    var cheerio = Meteor.npmRequire('cheerio');

    Meteor.methods({
        getScrapedTableData: function (ARGS) {
            // var rootUrl = "http://www.fin.gov.on.ca/en/publications/salarydisclosure/pssd/orgs-tbs.php",
            //     pageNum = "?pageNum_tbs=" + ARGS.pageNum,
            //     org = "&organization=" + ARGS.org,
            //     year = "&year=" + ARGS.year;
            var url = "http://www.fin.gov.on.ca/en/publications/salarydisclosure/pssd/orgs-tbs.php?organization=other&year=2014";
            result = Meteor.http.get( url );
            $ = cheerio.load(result.content);

            var headers = $('#right_column > div:nth-child(2) > table > thead > tr:nth-child(3) th strong')
                .clone() //clone the element
                .children() //select all the children
                .remove() //remove all the children
                .end() //again go back to selected element
                .text()
                .split(" / ");

            var data = $('#right_column > div:nth-child(2) > table > tbody > tr')
                .map(function (i) {
                    var row = {};
                    $(this).find('td').each(function (i) {
                        var rowName = headers[i];
                        row[rowName] = $(this).text();
                    });
                    Misc.insert(row);
                    return row;
                }).get();
            return data;                
        }
    })
});