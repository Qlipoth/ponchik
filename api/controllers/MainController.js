module.exports = {
    // Главная
    index: function(req, res) {
        return res.render('Landing', _.extend({}, toView, {
            title: 'Main',
            pageTitle: 'Main',
            vue: '/Vues/landing.js'
        }));
    },

    // ЛК
    loan: function(req, res) {
        return res.render('Loan', _.extend({}, toView, {
            title: 'Л/К',
            pageTitle: 'Л/К',
            bc: [
                {name: 'Главная', href: '/'},
                {name: 'Л/К', href: '/loan'},
            ],
            vue: '/Vues/loan.js'
        }));
    },

    finances: function(req, res) {
        return res.render('Main', _.extend({}, toView, {
            title: 'Разместить финансы',
            pageTitle: 'Разместить финансы',
             bc: [
                {name: 'Главная', href: '/'},
                {name: 'Разместить финансы', href: '/finances'},
            ],
            vue: '/Vues/finances.js'
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
            title: '',
            pageTitle: '',
            bc: [
                {name: 'Главная', href: '/'},
                {name: 'Услуги', href: '/services'},
            ],
            vue: '/Vues/services.js'
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
            bc: [
                {name: 'Главная', href: '/'},
                {name: 'О компании', href: '/about'},
            ],
            vue: '/Vues/about.js'
        }));
    },


};
