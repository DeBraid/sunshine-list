Template.salaryTable.helpers({
  settings: function () {
    return {
      collection: Hydro.find( { "Salary Paid" : { $gt: "$200,000"} } ),
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

Template.employerByType.helpers({
  employers: function () {
    return HydroEmps.find({}).fetch();
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