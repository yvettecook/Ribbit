// Handling click event of the Log In button

Template.header.events({
  'click #btnLogOut': function (event, template) {
    if (Meteor.userId()) {
      Meteor.logout();
    } else {
      console.log('login attempt')
      var userName = template.find('#username').value,
      userPassword = template.find('#password').value;
      Meteor.loginWithPassword(userName, userPassword, function (error) {
        if (error) {
          console.log(error);
        }
      });
    }
  }
});


Template.homecontent.events({
  'click #btnCreateAccount': function (event, template) {
    var userEmail = template.find('#email').value,
      userName = template.find('#newusername').value,
      password = template.find('#newpassword').value,
      password2 = template.find('#password2').value,
      name = template.find('#fullname').value;

    Accounts.createUser({
      username: userName,
      email: userEmail,
      password: password,
      profile: {
        name: name
      }
    }, function (error) {
      if (error) {
        console.log('Cannot create user');
      }
    });
  }
});
