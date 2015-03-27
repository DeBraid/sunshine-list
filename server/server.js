Meteor.startup(function () {
    var cheerio = Meteor.npmRequire('cheerio');

    Meteor.methods({
        getScrapedTableData: function (ARGS) {
            var rootUrl = "http://www.fin.gov.on.ca/en/publications/salarydisclosure/pssd/orgs-tbs.php",
                pageNum = "?pageNum_tbs=" + ARGS.pageNum,
                org = "&organization=" + ARGS.org,
                year = "&year=" + ARGS.year;
            result = Meteor.http.get(rootUrl + pageNum + org + year);
            $ = cheerio.load(result.content);

            var headers = $('#right_column > div:nth-child(2) > table > thead > tr:nth-child(3) th strong')
                .clone() //clone the element
                .children() //select all the children
                .remove() //remove all the children
                .end() //again go back to selected element
                .text()
                .split(" / ");

            return $('#right_column > div:nth-child(2) > table > tbody > tr')
                .map(function (i) {
                    var row = {};
                    $(this).find('td').each(function (i) {
                        var rowName = headers[i];
                        row[rowName] = $(this).text();
                    });
                    return row;
                }).get();
        }
    })
});