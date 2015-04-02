Router.map(function () {
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
});

// this.route('stockballoons', {
//   path: '/stockballoons',
//   template: 'stockballoons',
//   subscriptions: function () {
//     // return Meteor.subscribe('beachballs');
//   },
//   data: function () {
//     return {
//       // beachballs: Beachballs.find()
//     }
//   }
// });