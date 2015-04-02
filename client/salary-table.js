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

Template.reactiveTableContainer.helpers({
  settings: function () {
    return {
      // collection: Ministries.find( { "Salary Paid" : { $gt: "$200,000"} } ),
      rowsPerPage: 20,
      showFilter: true,
      fields: [
        { key: 'Employer', label: 'Employer' },
        { key: 'name', label: 'Name', 
          fn: function (value, object) {
            return object["Given Name"] + ' ' + object.Surname;
          } 
        },
        { key: 'Position', label: 'Position' },
        { key: 'Salary Paid', label: 'Salary Paid', sort: 'desc' },
        { key: 'Taxable Benefits', label: 'Taxable Benefits' }
      ]   
    }
  }
});

Template.reactiveTableContainer.events({
  'click .employer-name': function (e,t) {
    var value = e.target.textContent.trim();
    var inp = $('.reactive-table-input');
    inp.val(value);
    inp.trigger('keyup');
  }
});