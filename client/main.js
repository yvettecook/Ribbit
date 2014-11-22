Ribbits = new Meteor.Collection('ribbits');

Template.buddiescontent.helpers({
  fullname: function() {
    return Meteor.user().profile.name;
  },

  userName: function() {
    return Meteor.user().username;
  },

  noOfRibbits: function() {
    var ribbits = Ribbits.find({user_id: Meteor.userId()}),
      retVal;
    if (ribbits.count() === 1) {
      retVal = "1 Ribbit";
    } else {
      retVal = ribbits.count() + ' Ribbits';
    }
    return retVal;
  },

  lastRibbit: function() {
    var lastRibbit = Ribbits.findOne({user_id: Meteor.userId()}, {sort: {created_at: -1}}),
      retVal;

    if (lastRibbit) {
      retVal = lastRibbit.ribbit;
    } else {
      retVal = 'This user has no ribbits'
    }

    return retVal;
  }
});
