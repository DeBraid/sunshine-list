Router.configure({
  layoutTemplate: 'main_layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'homepage'
  });

  this.route('colleges', {
    path: '/colleges',
    template: 'reactive_table_container',
    subscriptions: function () {
      return [
        Meteor.subscribe('colleges'),
        Meteor.subscribe('collegeEmps')
      ]
    },
    data: function () {
      return {
        sunshineListData: Colleges.find( { "Salary Paid" : { $gt: "$150,000"} } ),
        employers: CollegeEmps.find().fetch()
      }
    }
  });

  this.route('crown', {
    path: '/crown',
    template: 'reactive_table_container',
    subscriptions: function () {
      return [
        Meteor.subscribe('crown'),
        Meteor.subscribe('crownEmps')
      ]
    },
    data: function () {
      return {
        sunshineListData: Crown.find( { "Salary Paid" : { $gt: "$300,000"} } ),
        employers: CrownEmps.find().fetch()
      }
    }
  });

  this.route('hospitals', {
    path: '/hospitals',
    template: 'reactive_table_container',
    subscriptions: function () {
      return [
        Meteor.subscribe('hospitals'),
        Meteor.subscribe('hospitalEmps')
      ]
    },
    data: function () {
      return {
        sunshineListData: Hospitals.find( { "Salary Paid" : { $gt: "$400,000"} } ),
        employers: HospitalEmps.find().fetch()
      }
    }
  });

  this.route('hydro', {
    path: '/hydro',
    template: 'reactive_table_container',
    subscriptions: function () {
      return [
        Meteor.subscribe('hydro'),
        Meteor.subscribe('hydroEmps')
      ]
    },
    data: function () {
      return {
        sunshineListData: Hydro.find( { "Salary Paid" : { $gt: "$300,000"} } ),
        employers: HydroEmps.find().fetch()
      }
    }
  });

  this.route('judiciary', {
    path: '/judiciary',
    template: 'reactive_table_container',
    subscriptions: function () {
      return [
        Meteor.subscribe('judiciary'),
        Meteor.subscribe('judiciaryEmps')
      ]
    },
    data: function () {
      return {
        sunshineListData: Judiciary.find( { "Salary Paid" : { $gt: "$270,000"} } ),
        employers: JudiciaryEmps.find().fetch()
      }
    }
  });

  this.route('legislative', {
    path: '/legislative',
    template: 'reactive_table_container',
    subscriptions: function () {
      return [
        Meteor.subscribe('legislative'),
        Meteor.subscribe('legislativeEmps')
      ]
    },
    data: function () {
      return {
        sunshineListData: Legislative.find().fetch(),
        employers: LegislativeEmps.find().fetch()
      }
    }
  });

  this.route('ministries', {
    path: '/ministries',
    template: 'reactive_table_container',
    subscriptions: function () {
      return [
        Meteor.subscribe('ministries'),
        Meteor.subscribe('ministryEmps')
      ]
    },
    data: function () {
      return {
        sunshineListData: Ministries.find( { "Salary Paid" : { $gt: "$300,000"} } ),
        employers: MinistryEmps.find().fetch()
      }
    }
  });

  this.route('misc', {
    path: '/misc',
    template: 'reactive_table_container',
    subscriptions: function () {
      return [
        Meteor.subscribe('misc'),
        Meteor.subscribe('miscEmps')
      ]
    },
    data: function () {
      return {
        sunshineListData: Misc.find( { "Salary Paid" : { $gt: "$300,000"} } ),
        employers: MiscEmps.find().fetch()
      }
    }
  });

  this.route('municipalities', {
    path: '/municipalities',
    template: 'reactive_table_container',
    subscriptions: function () {
      return [
        Meteor.subscribe('municipalities'),      
        Meteor.subscribe('muniEmps')
      ]
    },
    data: function () {
      return {
        sunshineListData: Municipalities.find( { "Salary Paid" : { $gt: "$300,000"} } ),
        employers: MuniEmps.find().fetch()
      }
    }
  });

  this.route('schools', {
    path: '/schools',
    template: 'reactive_table_container',
    subscriptions: function () {
      return [
        Meteor.subscribe('schools'),
        Meteor.subscribe('schoolEmps')
      ]
    },
    data: function () {
      return {
        sunshineListData: Schools.find( { "Salary Paid" : { $gt: "$150,000"} } ),
        employers: SchoolEmps.find().fetch()
      }
    }
  });

  this.route('unis', {
    path: '/unis',
    template: 'reactive_table_container',
    subscriptions: function () {
      return [
        Meteor.subscribe('unis'),
        Meteor.subscribe('uniEmps')
      ]
    },
    data: function () {
      return {
        sunshineListData: Unis.find( { "Salary Paid" : { $gt: "$300,000"} } ),
        employers: UniEmps.find().fetch()
      }
    }
  });
});