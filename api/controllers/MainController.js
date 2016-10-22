module.exports = {
    // Главная
    index: function(req, res) {
        return res.render('Landing', _.extend({}, toView, {
            title: 'Main',
            pageTitle: 'Main',
            vue: '/Vues/landing.js'
        }));
    },

    // получить тендерный заем
    loan: function(req, res) {
        return res.render('Personal', _.extend({}, toView, {
            title: 'ЛК получение',
            pageTitle: 'ЛК получение',
            bc: [
                {name: 'Главная', href: '/'},
                {name: 'ЛК получение', href: '/personal'},
            ],
            vue: '/Vues/personal.js'
        }));
    },

    finances: function(req, res) {
        return res.render('Main', _.extend({}, toView, {
            title: 'Разместить финансы',
            pageTitle: 'Разместить финансы',
            html: 'Разместить финансы',
        }));
    },

    deposites: function(req, res) {
        return res.render('Deposites', _.extend({}, toView, {
            title: 'ЛК размещение',
            pageTitle: 'ЛК размещение',
             bc: [
                {name: 'Главная', href: '/'},
                {name: 'ЛК размещение', href: '/personal'},
            ],
            vue: '/Vues/deposites.js'
        }));
    },
    services: function(req, res) {
        return res.render('Main', _.extend({}, toView, {
            title: 'Услуги',
            pageTitle: 'Услуги',
            html: 'Услуги',
        }));
    },
    partners: function(req, res) {
        return res.render('Partners', _.extend({}, toView, {
            title: 'Партнеры',
            pageTitle: 'Партнеры',
               bc: [
                {name: 'Главная', href: '/'},
                {name: 'Партнеры', href: '/partners'},
            ],
            vue: '/Vues/partners.js'
        }));
    },
    about: function(req, res) {
        return res.render('Main', _.extend({}, toView, {
            title: 'О компании',
            pageTitle: 'О компании',
            html: 'О компании',
        }));
    },


};
