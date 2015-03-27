ARGS = {
    pageNum: '1',
    org: 'electricity',
    year: '2014'
}

Meteor.call('getScrapedTableData', ARGS, function (error, result) {
    if (error) {
        console.log("error", error);
    };

    console.log(result);
    return Session.set("tableData", result);

});

Template.salaryTable.helpers({
    rant: function () {
        return Session.get("tableData");
    }
});