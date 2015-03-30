Template.salaryTable.helpers({
  settings: function () {
    return {
      collection: Schools.find( { "Salary Paid" : { $gt: "$200,000"} } ),
      rowsPerPage: 20,
      showFilter: true
    };
  }
});

Template.employerByType.helpers({
  employers: function () {
    return SchoolEmps.find({}).fetch();
  }
});

Template.employerByType.events({
  'click .employer-name': function (e,t) {
    var value = e.target.textContent.trim();
    var inp = $('.reactive-table-input');
    
    console.log(value);
    
    inp.val(value);
    inp.trigger('keyup');
  }
});

// Template.salaryTable.helpers({
//   // top100schools: function () {
//   //   return Schools.find({ 'Employer' : 'Hamilton-Wentworth District School Board'}).fetch();
//   // },
//   hamiltonSchools: function () {
//     return Schools.find({}).fetch();
//   },
//   // topSchool: function () {
//   //   // return  Schools.find({}. {sort: -1})
//   //   // return Schools.find({}, {sort: { 'Salary Paid' : -1}});
//   //   return Schools.find({}, {sort: {date: -1}, limit: 10})
//   // }
// });

// ARGS = {
//     pageNum: '6',
//     org: 'municipalities',
//     year: '2014'
// }

// Meteor.call('getScrapedTableData', ARGS, function (error, result) {
//     if (error) {
//         console.log("error", error);
//     };

//     console.log(result);
//     // Salaries.insert(result, function () {
//     //     console.log("GO GO GADGET salaries created");
//     // });
//     return Session.set("tableData", result);

// });

// Template.salaryTable.helpers({
//     // rant: function () {
//     //     return Session.get("tableData");
//     // }
// });