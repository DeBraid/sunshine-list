UI.registerHelper('divisions', function () {
  return ['colleges','crown','hospitals','hydro','judiciary','legislative','ministries','misc','municipalities','schools','unis'];  
});

// ARGS = {
//     pageNum: '2',
//     org: 'hospitals',
//     year: '2014'
// }

// Meteor.call('getScrapedTableData', function (error, result) {
//     if (error) {
//         console.log("error", error);
//     };

//     console.log(result);
//     return result;
//     // return Session.set("tableData", result);

// });