var DEFAULT_SETTINGS = {
        length: 20,
        repeat: 0,
        autosend: false,
        servicename: 'login',
        defServicename: undefined,
        lower: undefined,
        upper: undefined,
        number: undefined,
        dash: undefined,
        space: undefined,
        symbol: undefined,
        prefix: false,
        suffix: false
    },
    SETTINGS = {
        pwFieldList: [
            'pass', 'pass1', 'pass2', 'Pass', 'passwd', 'Passwd', 'password', 'Password', 'PASSWORD',
            'pw', 'PW', 'passwort', 'Passwort', 'ap_password', 'login_password', 'user_password',
            'user_pass', 'pwd', 'rpass'
        ],
        userFieldList: [
            'mail', 'Mail', 'email', 'Email', 'EMail', 'e-mail', 'E-Mail', 'eMail', 'login', 'Login',
            'user', 'User', 'username', 'Username', 'ap_email', 'userid', 'Userid', 'userId', 'UserId',
            'login_email', 'user_login', 'signin-email', 'j_username', 'session[username_or_email]'
        ],
        imgUrl: 'images/close.png'
    },
    TYPES = 'lower upper number dash space symbol'.split(' ');

var $ = function (selector) {
    'use strict';

    return document.getElementById(selector);
};

var on = function (element, event, listener) {
    'use strict';
    
    if (!element) {
        return;
    }

    if ('string' === typeof event) {
        event = [event];
    }

    for (var i = 0; i < event.length; i++) {
        if (element.addEventListener) {
            element.addEventListener(event[i], listener, false);
        } else {
            element.attachEvent('on' + event[i], listener);
        }
    }
};

var getElementFromList = function (list, callback) {
    'use strict';

    var i, element;

    for (i = 0; i < list.length; i++) {
        element = callback(list[i]);

        if (element) {
            return element;
        }
    }

    return false;
};

var isOverlay = function (pwField) {
    return pwField && pwField.id && pwField.id.match(/^vault-passphrase-/);
};

var hasOverlay = function (pwField) {
    return pwField && pwField.id && $('vault-generator-overlay-' + pwField.id);
};