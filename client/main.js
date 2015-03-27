Meteor.call('getScrapedTableData', function (error, result) {
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