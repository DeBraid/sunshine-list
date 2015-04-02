Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'homepage'
  });

  this.route('ministries', {
    path: '/ministries',
    template: 'reactive_table_container',
    subscriptions: function () {
      // return Meteor.subscribe('beachballs');
    },
    data: function () {
      return {
        sunshineListData: Ministries.find( { "Salary Paid" : { $gt: "$300,000"} } ),
        employers: MinistryEmps.find().fetch()
      }
    }
  });

  this.route('hospitals', {
    path: '/hospitals',
    template: 'reactive_table_container',
    subscriptions: function () {
      // return Meteor.subscribe('beachballs');
    },
    data: function () {
      return {
        sunshineListData: Hospitals.find( { "Salary Paid" : { $gt: "$300,000"} } ),
        employers: HospitalEmps.find().fetch()
      }
    }
  });
});