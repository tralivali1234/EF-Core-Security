﻿TestApp.Login = function (params) {
    function btnLogin_OnClick(e) {
        // console.log("old " + TestApp.app.UserName + " " + TestApp.app.Password);
        // TestApp.app.UserName = loginModel.txtUserNameSettings.value();
        // TestApp.app.Password = loginModel.txtPasswordSettings.value();
        // console.log("new " + TestApp.app.UserName + " " + TestApp.app.Password);
        window.TestApp.config.navigation.map(function (x, index, array) {
            array[index].visible(true);
        });
        // debugger;
        var uri = TestApp.app.router.format({
            view: 'Contacts'
        });
        TestApp.app.navigate(uri);
    }
    function User(name, password) {
        var self = this;
        self.name = name;
        self.password = password;
    }
    var loginModel = {
        users: ko.observableArray([ "John", "Admin"
//            new User("John", "John"),
//            new User("Admin", "Admin"),
        ]),

        updateCurrentUser: function (e) {
            TestApp.app.UserName = e.value;
            TestApp.app.Password = e.value;
            // TestApp.app.UserName = e.value.name;
            // TestApp.app.Password = e.value.password;
        },

        txtUserNameSettings: {
            value: ko.observable(TestApp.app.UserName)
        },
        txtPasswordSettings: {
            value: ko.observable(TestApp.app.Password),
            mode: 'password'
        },
        btnLoginSettings: {
            text: 'Login',
            onClick: btnLogin_OnClick,
            clickAction: btnLogin_OnClick
        },
        viewShown: function () {
            var hideNavElements = ["#Departments", "#Contacts", "#Tasks"];
            window.TestApp.config.navigation.map(function (x, index, array) {
                var currentElement = array[index];
                if (hideNavElements.indexOf(currentElement.onExecute) >= 0)
                    currentElement.visible(false);
            });
        }
    };
    return loginModel;
};