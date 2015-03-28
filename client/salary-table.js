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

Template.salaryTable.helpers({
  settings: function () {
    return {
      collection: Schools.find({}).fetch(),
      rowsPerPage: 20,
      showFilter: true
    };
  }
});
