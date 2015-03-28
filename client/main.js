ARGS = {
    pageNum: '2',
    org: 'schoolboards',
    year: '2014'
}

Meteor.call('getScrapedTableData', ARGS, function (error, result) {
    if (error) {
        console.log("error", error);
    };

    console.log(result);
    // Salaries.insert(result, function () {
    //     console.log("GO GO GADGET salaries created");
    // });
    return Session.set("tableData", result);

});

Template.salaryTable.helpers({
    rant: function () {
        return Session.get("tableData");
    }
});