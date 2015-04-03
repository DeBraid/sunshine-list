Meteor.publish('colleges', function () {
  return Colleges.find();
});

Meteor.publish('crown', function () {
  return  Crown.find();
});

Meteor.publish('hospitals', function () {
  return  Hospitals.find();
});

Meteor.publish('hydro', function () {
  return  Hydro.find();
});

Meteor.publish('judiciary', function () {
  return  Judiciary.find();
});

Meteor.publish('legislative', function () {
  return  Legislative.find();
});

Meteor.publish('ministries', function () {
  return  Ministries.find();
});

Meteor.publish('misc', function () {
  return  Misc.find();
});

Meteor.publish('municipalities', function () {
  return  Municipalities.find();
});

Meteor.publish('schools', function () {
  return  Schools.find();
});

Meteor.publish('unis', function () {
  return  Unis.find();
});

// EMPS 
Meteor.publish('collegeEmps', function () {
  return CollegeEmps.find();
});
Meteor.publish('crownEmps', function () {
  return  CrownEmps.find();
});
Meteor.publish('hospitalEmps', function () {
  return  HospitalEmps.find();
});
Meteor.publish('hydroEmps', function () {
  return  HydroEmps.find();
});
Meteor.publish('judiciaryEmps', function () {
  return  JudiciaryEmps.find();
});
Meteor.publish('legislativeEmps', function () {
  return  LegislativeEmps.find();
});
Meteor.publish('ministryEmps', function () {
  return  MinistryEmps.find();
});
Meteor.publish('miscEmps', function () {
  return  MiscEmps.find();
});
Meteor.publish('muniEmps', function () {
  return  MuniEmps.find();
});
Meteor.publish('schoolsEmps', function () {
  return  SchoolEmps.find();
});
Meteor.publish('unisEmps', function () {
  return  UnisEmps.find();
});