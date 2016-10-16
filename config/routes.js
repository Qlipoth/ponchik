
module.exports.routes = {


    // 'get  /dasboard': 'Dashboard.index',

    //
    // Main page
    //
    'get  /': 'Dashboard.index',
  

    //----------------------------------------------------------------
    // Other routes
    //
    ////

    //
    // current user
    // menu top block with avatar
    //
    'get  /me'          : 'Me',
    'get  /services'    : 'Main.index',
    'get  /me/settings' : 'Me.settings',
    'get  /me/company'  : 'Me.company',


    //
    // Auth
    //
    'get  /auth'       : 'Auth',
    'post /doLogin'    : 'Auth.doLogin',
    'get  /register'   : 'Auth.register',
    'post /doRegister' : 'Auth.doRegister',
    'get  /logout'     : 'Auth.logout',

 
    //
    // Admin
    //
    'get  /admin'       : 'Admin',
    'get  /admin/users' : 'Admin.users',
    //
    'get  /admin/users/table' : 'Admin.usersTable',


    //  ╔╦╗╔═╗╔═╗╔╦╗
    //   ║ ║╣ ╚═╗ ║
    //   ╩ ╚═╝╚═╝ ╩
    'get  /403': {response: 'forbidden'},
    'get  /404': {response: 'notFound'},
    'get  /500': {response: 'serverError'},
};
