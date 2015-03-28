Template.salaryTable.helpers({
  schoolsData: function () {
    return Schools.find().fetch();
  }
});