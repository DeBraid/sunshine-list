Template.reactiveTableContainer.helpers({
  settings: function () {
    return {
      rowsPerPage: 10,
      showFilter: true,
      fields: [
        { key: 'Employer', label: 'Employer', 
          fn: function (value, object) {
            return object.Employer.split(' / ')[0];
          } 
        },
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